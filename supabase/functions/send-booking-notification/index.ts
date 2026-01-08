import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple rate limiting using in-memory store
// Tracks IP addresses and their request timestamps
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 requests per minute

function getRateLimitKey(req: Request): string {
  // Use IP address for rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const requests = rateLimitStore.get(key) || [];
  
  // Remove old requests outside the window
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(key, recentRequests);
  
  // Cleanup old entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [k, times] of rateLimitStore.entries()) {
      if (times.every(t => now - t > RATE_LIMIT_WINDOW_MS)) {
        rateLimitStore.delete(k);
      }
    }
  }
  
  return false;
}

interface BookingNotificationRequest {
  customerName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  message?: string;
}

// HTML escaping utility to prevent XSS in email templates
function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    if (isRateLimited(rateLimitKey)) {
      console.warn(`Rate limit exceeded for: ${rateLimitKey}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many booking requests. Please try again in a minute." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const bookingData: BookingNotificationRequest = await req.json();
    
    // Input validation
    if (!bookingData.customerName || !bookingData.email || !bookingData.serviceType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    console.log("Sending booking notification for:", bookingData.customerName);

    const adminEmail = "muneebahmed272@outlook.com";

    const emailResponse = await resend.emails.send({
      from: "Hair & Scalp Treatments <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New Booking: ${escapeHtml(bookingData.serviceType)} - ${escapeHtml(bookingData.customerName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">
            New Booking Request Received
          </h1>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4F46E5; margin-top: 0;">Customer Information</h2>
            <p><strong>Name:</strong> ${escapeHtml(bookingData.customerName)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(bookingData.email)}">${escapeHtml(bookingData.email)}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${escapeHtml(bookingData.phone)}">${escapeHtml(bookingData.phone)}</a></p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4F46E5; margin-top: 0;">Appointment Details</h2>
            <p><strong>Service Type:</strong> ${escapeHtml(bookingData.serviceType)}</p>
            <p><strong>Preferred Date:</strong> ${escapeHtml(bookingData.preferredDate)}</p>
            <p><strong>Preferred Time:</strong> ${escapeHtml(bookingData.preferredTime)}</p>
          </div>
          
          ${bookingData.message ? `
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h2 style="color: #856404; margin-top: 0;">Special Requests / Questions</h2>
            <p style="color: #856404;">${escapeHtml(bookingData.message)}</p>
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
      JSON.stringify({ 
        error: "Failed to send notification. Please try again or contact support." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
