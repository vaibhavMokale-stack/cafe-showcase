import { Card } from "@/components/ui/card";
import { Clock, Award, Heart } from "lucide-react";

const About = () => {
  const hours = [
    { day: "Monday - Friday", time: "7:00 AM - 9:00 PM" },
    { day: "Saturday", time: "8:00 AM - 10:00 PM" },
    { day: "Sunday", time: "8:00 AM - 8:00 PM" }
  ];

  const testimonials = [
    {
      text: "The best coffee in town! Sarah makes everyone feel like family.",
      author: "Maria K.",
      rating: 5
    },
    {
      text: "Perfect spot for remote work. Great WiFi and even better pastries.",
      author: "David L.",
      rating: 5
    },
    {
      text: "Been coming here for 3 years. Consistently excellent food and service.",
      author: "Jennifer M.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            About The Roasted Bean
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a café—we're your neighborhood gathering place
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div>
            <div className="mb-8">
              <div className="w-64 h-64 bg-muted rounded-lg mb-6 mx-auto lg:mx-0 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-accent mx-auto mb-2" />
                  <p className="font-open-sans text-muted-foreground">Sarah, Owner & Head Chef</p>
                </div>
              </div>
            </div>
            
            <h2 className="font-poppins font-bold text-2xl mb-4">Our Story</h2>
            <div className="font-open-sans text-foreground space-y-4 leading-relaxed">
              <p>
                We opened our doors in 2012 with a simple mission: to create a warm, 
                welcoming space where neighbors become friends over exceptional coffee 
                and fresh, locally-sourced food.
              </p>
              <p>
                Every morning, we bake our sourdough fresh and carefully brew each cup 
                with beans roasted right here in the city. We believe that great food 
                and genuine hospitality can brighten anyone's day.
              </p>
              <p>
                Whether you're rushing to work with a quick espresso or settling in 
                for a leisurely weekend brunch, we're here to make your experience 
                special. This is your place too.
              </p>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <Card className="p-8 border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-accent" />
                <h2 className="font-poppins font-bold text-2xl">Hours</h2>
              </div>
              
              <div className="space-y-4" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="The Roasted Bean" />
                <meta itemProp="telephone" content="+1234567890" />
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
                  <span itemProp="streetAddress">123 Main Street</span>
                  <span itemProp="addressLocality">Downtown</span>
                  <span itemProp="addressRegion">State</span>
                  <span itemProp="postalCode">12345</span>
                </div>
                
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-open-sans font-medium">{schedule.day}</span>
                    <span className="font-open-sans text-accent font-semibold" itemProp="openingHours" content="Mo-Fr 07:00-21:00 Sa 08:00-22:00 Su 08:00-20:00">
                      {schedule.time}
                    </span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-cafe-warm-light rounded-lg">
                  <p className="font-open-sans text-sm text-center">
                    <span className="font-semibold text-accent">Holiday Hours:</span><br />
                    Please call ahead during holidays as hours may vary
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-2xl mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-border">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="font-open-sans text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-open-sans font-semibold text-sm">
                  — {testimonial.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;