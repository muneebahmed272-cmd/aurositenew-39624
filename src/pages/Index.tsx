import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone, Mail, MapPin, Syringe, Heart, Star, Users, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wellness.jpg";
import prpImage from "@/assets/prp-treatment-new.jpg";
import biotinImage from "@/assets/vitamin-injection-new.jpg";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🏥 Mobile Wellness Service
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Clinic That <span className="text-secondary">Comes to You</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Expert PRP & Vitamin Injection Treatments for Radiant Results<br />
              <span className="text-secondary font-semibold">Birmingham & Surrounding Areas</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingForm defaultService="Free Consultation Only">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </BookingForm>
              <Link to="/treatments">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent">
                  View Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Professional wellness treatment" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">💉 Our Treatments</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Wellness Treatments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the convenience of expert medical treatments in the comfort of your chosen location
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PRP Treatment */}
            <Card className="wellness-card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img src={prpImage} alt="PRP Treatment" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl flex items-center">
                    <Syringe className="mr-3 h-6 w-6 text-primary" />
                    PRP Therapy
                  </CardTitle>
                  <div className="price-badge">£160/session</div>
                </div>
                <CardDescription className="text-base">
                  Platelet Rich Plasma treatment for natural healing and rejuvenation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Stimulates hair growth and scalp health
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Improves skin texture and reduces fine lines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Uses your body's natural healing factors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Minimal downtime, natural results
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link to="/blog">
                    <Button className="w-full">Learn More About PRP</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Biotin Treatment */}
            <Card className="wellness-card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img src={biotinImage} alt="Biotin Treatment" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl flex items-center">
                    <Heart className="mr-3 h-6 w-6 text-primary" />
                    Vitamin Boost
                  </CardTitle>
                  <div className="price-badge">£35/session</div>
                </div>
                <CardDescription className="text-base">
                  Vitamin B12 & Biotin injections for energy and hair health
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Boosts energy levels and metabolism
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Strengthens hair, skin, and nails
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Supports nervous system health
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Quick treatment with immediate benefits
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link to="/blog">
                    <Button className="w-full">Learn More About Vitamin Injection</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Launch Offers Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">🚀 Launch Special</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exclusive Launch Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with our special bundled packages and save big on your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="wellness-card relative flex flex-col h-full">
              <CardHeader className="text-center flex-1">
                <CardTitle className="text-2xl mb-2">Starter Taster</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£170</div>
                  <div className="text-sm text-muted-foreground line-through">Value £195</div>
                  <div className="savings-badge">Save £25</div>
                </div>
                <CardDescription className="text-base">Perfect for first-time clients</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    1 PRP Treatment Session
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    1 Biotin Boost Session
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Free consultation included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Mobile service convenience
                  </li>
                </ul>
                <div className="mt-auto">
                  <BookingForm defaultService="Starter Taster Package">
                    <Button className="w-full">Choose Starter</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Transformation Package */}
            <Card className="wellness-card relative border-primary shadow-lg flex flex-col h-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center pt-8 flex-1">
                <CardTitle className="text-2xl mb-2">Transformation Pack</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£480</div>
                  <div className="text-sm text-muted-foreground line-through">Value £537</div>
                  <div className="savings-badge">Save £57</div>
                </div>
                <CardDescription className="text-base">Ideal for visible results</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    3 PRP Treatment Sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    3 Biotin Boost Sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Free consultation & aftercare
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Flexible scheduling
                  </li>
                </ul>
                <div className="mt-auto">
                  <BookingForm defaultService="Transformation Pack">
                    <Button className="w-full">Choose Transformation</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Ultimate Package */}
            <Card className="wellness-card relative flex flex-col h-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                Best Value
              </Badge>
              <CardHeader className="text-center pt-8 flex-1">
                <CardTitle className="text-2xl mb-2">Ultimate Growth Pack</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£820</div>
                  <div className="text-sm text-muted-foreground line-through">Value £978</div>
                  <div className="savings-badge">Save £158</div>
                </div>
                <CardDescription className="text-base">Maximum results guaranteed</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    6 PRP Treatment Sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    6 Biotin Boost Sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    VIP consultation & support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    Priority booking
                  </li>
                </ul>
                <div className="mt-auto">
                  <BookingForm defaultService="Ultimate Growth Pack">
                    <Button className="w-full">Choose Ultimate</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Discounts Banner */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited-Time Launch Discounts</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-secondary mb-2">20%</div>
              <div className="text-lg font-semibold mb-2">OFF First Session</div>
              <div className="text-white/80">Try our treatments risk-free</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-secondary mb-2">30%</div>
              <div className="text-lg font-semibold mb-2">OFF 3 Sessions</div>
              <div className="text-white/80">Perfect for steady progress</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-secondary mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">OFF 6 Sessions</div>
              <div className="text-white/80">Maximum savings & results</div>
            </div>
          </div>
          <div className="mt-8">
            <BookingForm>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Claim Your Discount Now
              </Button>
            </BookingForm>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Aurosite?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of wellness with our mobile, professional treatment service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Mobile Convenience</CardTitle>
                <CardDescription className="text-base">
                  We come to you - your home, office, or preferred location. No travel, no waiting rooms, just professional care where you're comfortable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Expert-Led Care</CardTitle>
                <CardDescription className="text-base">
                  Our qualified healthcare professionals bring years of experience in PRP therapy and vitamin treatments for optimal results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Natural & Safe</CardTitle>
                <CardDescription className="text-base">
                  Using your body's natural healing properties and essential vitamins, our treatments are safe, effective, and minimally invasive.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Wellness Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with wellness tips, treatment insights, and exclusive offers for Aurosite clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your free consultation today and discover how PRP and Biotin treatments can enhance your natural beauty and vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <BookingForm defaultService="Free Consultation Only">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </BookingForm>
              <BookingForm>
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 py-4 text-gray-900">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Now
                </Button>
              </BookingForm>
            </div>
            
            <Separator className="bg-white/20 mb-8" />
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-white/80">Available 7 days a week</div>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-white/80">Quick response within 24h</div>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="font-semibold mb-1">Service Area</div>
                <div className="text-white/80">Birmingham & Surrounding Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Aurosite</h3>
              <p className="text-white/80 mb-4 max-w-md">
                Professional mobile wellness treatments bringing expert PRP therapy and vitamin injections directly to you in Birmingham and surrounding areas.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white text-slate-950">
                  Follow Us
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/treatments" className="hover:text-primary transition-colors">Treatments</Link></li>
                <li><Link to="/prices" className="hover:text-primary transition-colors">Prices</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">PRP Therapy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Biotin Injections</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Service</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/20 my-8" />
          
          <div className="text-center text-white/60">
            <p>&copy; 2024 Aurosite. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
      </main>
      <Toaster />
    </div>;
};
export default Index;