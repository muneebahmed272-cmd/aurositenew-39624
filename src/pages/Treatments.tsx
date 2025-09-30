import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, Syringe, Heart, Clock, Users, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import prpImage from "@/assets/prp-treatment-new.jpg";
import biotinImage from "@/assets/vitamin-injection-new.jpg";
import microneedlingImage from "@/assets/microneedling-treatment.jpg";
const Treatments = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              💉 Professional Treatments
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Wellness <span className="text-secondary">Treatments</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover our range of professional PRP and vitamin injection treatments designed to enhance your natural beauty and wellbeing
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* PRP Treatment */}
            <Card className="wellness-card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img src={prpImage} alt="PRP Treatment" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-3xl flex items-center mb-4">
                  <Syringe className="mr-3 h-8 w-8 text-primary" />
                  PRP Therapy
                </CardTitle>
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-primary">From £136</div>
                  <div className="text-sm text-muted-foreground line-through">Regular: £170</div>
                  <div className="savings-badge">Up to 40% off</div>
                </div>
                <CardDescription className="text-lg">
                  Platelet Rich Plasma therapy uses your body's own healing properties for natural rejuvenation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">What is PRP?</h4>
                    <p className="text-muted-foreground">
                      PRP therapy involves drawing a small amount of your blood, processing it to concentrate the platelets, and injecting it into targeted areas. The concentrated platelets release growth factors that stimulate healing and regeneration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Stimulates natural hair growth and thickness
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Improves skin texture and reduces fine lines
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Accelerates healing and tissue repair
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        100% natural using your own blood
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Minimal side effects and downtime
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Treatment Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Scalp & Hair</Badge>
                      <Badge variant="outline">Face</Badge>
                      <Badge variant="outline">Under Eyes</Badge>
                      <Badge variant="outline">Neck</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <BookingForm defaultService="PRP Therapy">
                    <Button className="w-full">Contact Now</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Microneedling Treatment */}
            <Card className="wellness-card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img src={microneedlingImage} alt="Microneedling Treatment" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-3xl flex items-center mb-4">
                  <Heart className="mr-3 h-8 w-8 text-primary" />
                  Microneedling
                </CardTitle>
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-primary">From £90</div>
                  <div className="text-sm text-muted-foreground line-through">Regular: £100</div>
                  <div className="savings-badge">Up to 25% off</div>
                </div>
                <CardDescription className="text-lg">
                  Professional microneedling treatment for improved skin texture, reduced scars, and enhanced collagen production. Also effective for beard area to promote facial hair growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">What is Microneedling?</h4>
                    <p className="text-muted-foreground">
                      Microneedling uses fine needles to create controlled micro-injuries in the skin, stimulating your body's natural collagen and elastin production for smoother, firmer, and more radiant skin.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Reduces fine lines and wrinkles
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Improves acne scars and texture
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Enhances product absorption
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Minimises pore appearance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Natural collagen stimulation
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto">
                  <BookingForm defaultService="Microneedling">
                    <Button className="w-full">Contact Now</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Vitamin Injections */}
            <Card className="wellness-card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img src={biotinImage} alt="Vitamin Injections" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-3xl flex items-center mb-4">
                  <Heart className="mr-3 h-8 w-8 text-primary" />
                  Vitamin Injections
                </CardTitle>
                <div className="space-y-2 mb-4">
                  <div className="text-xl font-bold text-primary">B12: From £25.50</div>
                  <div className="text-lg font-bold text-primary">Biotin: Consultation</div>
                  <div className="savings-badge">Up to 25% off B12</div>
                </div>
                <CardDescription className="text-lg">
                  Essential vitamin injections for energy, metabolism, and stronger hair, skin, and nails
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">What are Vitamin Injections?</h4>
                    <p className="text-muted-foreground">
                      Our vitamin injections deliver essential nutrients directly into your system, bypassing the digestive system for maximum absorption and immediate benefits.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Increased energy levels and reduced fatigue
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Stronger, healthier hair and nails
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Improved skin health and radiance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Enhanced metabolism and weight management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                        Better nervous system function
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Available Vitamins:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Biotin (B7)</Badge>
                      <Badge variant="outline">Vitamin B12</Badge>
                      <Badge variant="outline">Custom Blends</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <BookingForm defaultService="Vitamin Injections">
                    <Button className="w-full">Contact Now</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Treatment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, professional process designed for your comfort and safety
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-lg mb-2">Consultation</CardTitle>
                <CardDescription>
                  Free consultation to assess your needs and create a personalised treatment plan
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-lg mb-2">Preparation</CardTitle>
                <CardDescription>
                  Professional setup and preparation in your chosen location with all sterile equipment
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-lg mb-2">Treatment</CardTitle>
                <CardDescription>
                  Quick, comfortable treatment administered by our qualified healthcare professional
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-lg mb-2">Aftercare</CardTitle>
                <CardDescription>
                  Comprehensive aftercare instructions and follow-up support for optimal results
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your free consultation today and discover how our treatments can enhance your natural beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingForm defaultService="Free Consultation Only">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  Book Free Consultation
                </Button>
              </BookingForm>
              <Link to="/prices">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 py-4 text-slate-950">
                  View Prices
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Treatments;