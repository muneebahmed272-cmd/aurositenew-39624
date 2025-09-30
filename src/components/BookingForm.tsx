import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, Mail, Phone, User, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  children: React.ReactNode;
  defaultService?: string;
}

const BookingForm = ({ children, defaultService }: BookingFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: defaultService || "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("bookings").insert({
        customer_name: formData.customerName,
        email: formData.email,
        phone: formData.phone || null,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        service_type: formData.serviceType,
        message: formData.message || null,
      });

      if (error) throw error;

      // Send email notification
      try {
        await supabase.functions.invoke("send-booking-notification", {
          body: {
            customerName: formData.customerName,
            email: formData.email,
            phone: formData.phone,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            serviceType: formData.serviceType,
            message: formData.message,
          },
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the booking if email fails
      }

      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      // Reset form and close dialog
      setFormData({
        customerName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        serviceType: defaultService || "",
        message: "",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Calendar className="mr-3 h-6 w-6 text-primary" />
            Book Your Treatment
          </DialogTitle>
          <DialogDescription>
            Fill in your details below and we'll contact you within 24 hours to confirm your appointment.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName">Full Name *</Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => handleInputChange("customerName", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="07123 456789"
                required
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Appointment Details
            </h3>
            
            <div>
              <Label htmlFor="serviceType">Treatment Type *</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred treatment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRP Therapy">PRP Therapy - £136/session</SelectItem>
                  <SelectItem value="PRP + Biotin Combo">PRP + Biotin Combo - £156/session</SelectItem>
                  <SelectItem value="Microneedling">Microneedling - £90/session</SelectItem>
                  <SelectItem value="Vitamin B12">Vitamin B12 Injection - £25.50/session</SelectItem>
                  <SelectItem value="Biotin Boost">Biotin Injection - Consultation required</SelectItem>
                  <SelectItem value="Starter Taster Package">Starter Taster Package - £170</SelectItem>
                  <SelectItem value="Transformation Pack">Transformation Pack - £480</SelectItem>
                  <SelectItem value="Ultimate Growth Pack">Ultimate Growth Pack - £820</SelectItem>
                  <SelectItem value="Consultation Only">Free Consultation Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              Additional Information
            </h3>
            
            <div>
              <Label htmlFor="message">Questions or Special Requests</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Any questions about treatments, medical conditions, or special requests..."
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <Mail className="inline h-4 w-4 mr-1" />
            We'll contact you within 24 hours to confirm your appointment and provide location details.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;