import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Find Us
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We're right in the heart of downtown. Come visit us or get in touch—we'd love to hear from you!
          </p>
        </div>

        {/* Map and Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map */}
          <div>
            <Card className="p-0 overflow-hidden border-border">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="font-open-sans text-muted-foreground mb-4">
                    Interactive map coming soon
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://maps.google.com/?q=123+Main+Street,+Downtown" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Get directions to The Roasted Bean"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-border">
              <h2 className="font-poppins font-bold text-xl mb-4">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div className="font-open-sans">
                    <p className="font-semibold">123 Main Street</p>
                    <p className="text-muted-foreground">Downtown, City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div className="font-open-sans">
                    <p className="font-semibold">Open Today</p>
                    <p className="text-muted-foreground">7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h2 className="font-poppins font-bold text-xl mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="tel:+1234567890" aria-label="Call The Roasted Bean">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us: (123) 456-7890
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Message us on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <div className="font-open-sans">
                    <p className="text-sm text-muted-foreground">Email us at:</p>
                    <a href="mailto:hello@roastedbean.com" className="text-accent hover:underline">
                      hello@roastedbean.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border">
            <h2 className="font-poppins font-bold text-2xl mb-6 text-center">
              Questions? Drop us a line
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-open-sans font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="font-open-sans font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="font-open-sans font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 min-h-[120px]"
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;