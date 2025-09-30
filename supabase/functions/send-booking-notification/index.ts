import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingNotificationRequest {
  customerName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingNotificationRequest = await req.json();
    
    console.log("Sending booking notification for:", bookingData.customerName);

    // TODO: Replace with your actual email address
    const adminEmail = "YOUR_EMAIL@example.com";

    const emailResponse = await resend.emails.send({
      from: "Hair & Scalp Treatments <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New Booking: ${bookingData.serviceType} - ${bookingData.customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">
            New Booking Request Received
          </h1>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4F46E5; margin-top: 0;">Customer Information</h2>
            <p><strong>Name:</strong> ${bookingData.customerName}</p>
            <p><strong>Email:</strong> <a href="mailto:${bookingData.email}">${bookingData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${bookingData.phone}">${bookingData.phone}</a></p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4F46E5; margin-top: 0;">Appointment Details</h2>
            <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
            <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${bookingData.preferredTime}</p>
          </div>
          
          ${bookingData.message ? `
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h2 style="color: #856404; margin-top: 0;">Special Requests / Questions</h2>
            <p style="color: #856404;">${bookingData.message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              <strong>Action Required:</strong> Please contact the customer within 24 hours to confirm their appointment.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending booking notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
