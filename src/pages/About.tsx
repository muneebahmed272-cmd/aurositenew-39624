import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import EmbeddedBookingForm from "@/components/EmbeddedBookingForm";
import { MapPin, Award, Heart, Users, Clock, Shield, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🏥 About Aurosite
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Clinic That <span className="text-secondary">Comes to You</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Bringing professional wellness treatments directly to your door across Birmingham and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                Revolutionizing wellness through mobile professional treatments
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Aurosite was founded with a simple yet revolutionary idea: professional wellness treatments shouldn't require you to travel to a clinic. We believe that high-quality healthcare should be convenient, accessible, and tailored to fit your lifestyle.
              </p>

              <p className="text-lg leading-relaxed">
                Our mobile wellness service brings expert PRP therapy and vitamin injection treatments directly to your preferred location across Birmingham and surrounding areas. Whether you're at home, in your office, or another comfortable setting, we ensure you receive the same professional standard of care you'd expect from a traditional clinic.
              </p>

              <p className="text-lg leading-relaxed">
                We specialise in Platelet Rich Plasma (PRP) therapy and essential vitamin injections, including Biotin and B12 boosts, designed to enhance your natural beauty, improve your wellbeing, and support your body's healing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Aurosite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Patient-Centred Care</CardTitle>
                <CardDescription className="text-base">
                  Every treatment is tailored to your individual needs and goals. We listen, understand, and create personalised wellness plans that work for you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Safety & Quality</CardTitle>
                <CardDescription className="text-base">
                  We maintain the highest standards of safety and hygiene, using only premium equipment and following strict medical protocols for every treatment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="wellness-card text-center">
              <CardContent className="pt-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-4">Convenience</CardTitle>
                <CardDescription className="text-base">
                  Healthcare should fit your schedule, not the other way around. Our mobile service brings professional treatments to your preferred location.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Mobile Healthcare Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Mobile Healthcare?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">The Benefits of Mobile Treatment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="mr-3 h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Time-Saving:</strong> No travel time, no waiting rooms, no parking hassles
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Heart className="mr-3 h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Comfort:</strong> Receive treatments in familiar, relaxing environments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-3 h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Privacy:</strong> Discrete, personal service without crowded clinic environments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-3 h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Personalised:</strong> One-on-one attention with dedicated treatment time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="mr-3 h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Professional:</strong> Same high standards as clinic-based treatments
                    </div>
                  </li>
                </ul>
              </div>

              <Card className="wellness-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Service Areas</CardTitle>
                  <CardDescription>
                    We proudly serve Birmingham and surrounding areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <span className="font-semibold">Birmingham City Centre</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <span>Edgbaston & University Area</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <span>Solihull & Surrounding Areas</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <span>Sutton Coldfield</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <span>Kings Heath & Moseley</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Don't see your area? Contact us - we may be able to arrange travel to your location.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">📅 Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your wellness journey? We're here to help
            </p>
          </div>
          <EmbeddedBookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Phone className="mr-3 h-6 w-6" />
                  Book Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Speak directly with our team to discuss your needs and schedule your first treatment.
                </p>
                <a href="#booking-form">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full">
                    Book Free Consultation
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Mail className="mr-3 h-6 w-6" />
                  Email Enquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Send us your questions or request more information about our treatments and packages.
                </p>
                <a href="#booking-form">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
                    Send Email Enquiry
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
