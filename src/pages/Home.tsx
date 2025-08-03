import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Fresh • Local • Loved since 2012
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground font-open-sans font-semibold">
              <a href="tel:+1234567890" aria-label="Call to book a table" style = {{color: "Black"}} >Call to Book</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-border">
              <Coffee className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-2">Artisanal Coffee</h3>
              <p className="font-open-sans text-muted-foreground">
                Locally roasted beans, expertly brewed with passion and precision
              </p>
            </Card>

            <Card className="p-6 text-center border-border">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-2">Downtown Heart</h3>
              <p className="font-open-sans text-muted-foreground">
                Perfect spot in the city center, walking distance from everything
              </p>
            </Card>

            <Card className="p-6 text-center border-border">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-2">Open Today</h3>
              <p className="font-open-sans text-muted-foreground">
                7:00 AM - 9:00 PM<br />
                <span className="text-accent font-medium">Open Now</span>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready for the perfect cup?
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're grabbing coffee to go or settling in with a good book, 
            we're here to make your day a little brighter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;