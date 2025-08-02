import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const menuData = {
    breakfast: [
      {
        name: "Artisan Avocado Toast",
        description: "Sourdough, smashed avocado, cherry tomatoes, feta, lime",
        price: "$12",
        isSpecial: true
      },
      {
        name: "Classic Eggs Benedict",
        description: "Poached eggs, ham, hollandaise, English muffin",
        price: "$15"
      },
      {
        name: "Morning Grain Bowl",
        description: "Quinoa, berries, nuts, honey, Greek yogurt",
        price: "$11"
      },
      {
        name: "French Toast Stack",
        description: "Brioche, seasonal berries, maple syrup, butter",
        price: "$13"
      }
    ],
    lunch: [
      {
        name: "Roasted Bean Burger",
        description: "House-made patty, caramelized onions, aioli, fries",
        price: "$16",
        isSpecial: true
      },
      {
        name: "Mediterranean Wrap",
        description: "Grilled chicken, hummus, olives, cucumber, tomato",
        price: "$14"
      },
      {
        name: "Seasonal Soup & Salad",
        description: "Chef's daily soup with mixed greens and vinaigrette",
        price: "$12"
      },
      {
        name: "Grilled Salmon",
        description: "Pan-seared salmon, quinoa, roasted vegetables",
        price: "$19"
      }
    ],
    drinks: [
      {
        name: "Signature Roasted Bean Blend",
        description: "Our custom roast with notes of chocolate and caramel",
        price: "$4",
        isSpecial: true
      },
      {
        name: "Matcha Latte",
        description: "Premium matcha powder, steamed milk, honey",
        price: "$5"
      },
      {
        name: "Cold Brew Float",
        description: "House cold brew with vanilla ice cream",
        price: "$6"
      },
      {
        name: "Fresh Juice Blends",
        description: "Orange-carrot-ginger or green apple-spinach-cucumber",
        price: "$7"
      }
    ]
  };

  const categories = [
    { id: "breakfast", name: "Breakfast", time: "7AM - 11AM" },
    { id: "lunch", name: "Lunch", time: "11AM - 4PM" },
    { id: "drinks", name: "Drinks", time: "All Day" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Our Menu
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Made fresh daily with locally sourced ingredients. 
            All our bread is baked in-house every morning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`font-open-sans ${
                activeCategory === category.id 
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                  : ""
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">{category.time}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <Card key={index} className="p-6 border-border hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-poppins font-semibold text-lg">{item.name}</h3>
                  {item.isSpecial && (
                    <Badge variant="secondary" className="bg-cafe-warm-light text-accent">
                      <Star className="w-3 h-3 mr-1" />
                      Special
                    </Badge>
                  )}
                </div>
                <span className="font-poppins font-bold text-lg text-accent">{item.price}</span>
              </div>
              <p className="font-open-sans text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="font-poppins font-bold text-2xl mb-4">Ready to order?</h2>
          <p className="font-open-sans text-muted-foreground mb-6">
            Call ahead for takeaway or reserve a table for dine-in
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="tel:+1234567890" aria-label="Call to place an order">
                Call to Order
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;