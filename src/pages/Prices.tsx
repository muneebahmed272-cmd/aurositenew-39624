import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, Star, Crown, Gift } from "lucide-react";

const Prices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Clear <span className="text-secondary">Pricing</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              No hidden fees, no surprises. Choose the package that works best for your wellness goals
            </p>
          </div>
        </div>
      </section>

      {/* Individual Treatment Prices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Treatment Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional treatments with special launch discounts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* PRP Therapy Pricing */}
            <Card className="wellness-card text-center flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle className="text-2xl mb-4">PRP Therapy</CardTitle>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">£136</div>
                    <div className="text-sm text-muted-foreground line-through">£170</div>
                    <div className="text-xs font-medium text-green-600">20% OFF</div>
                  </div>
                  <CardDescription>1 session</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="text-left space-y-2 text-sm flex-1">
                  <div className="flex justify-between">
                    <span>3 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£329</div>
                      <div className="text-xs text-muted-foreground line-through">£470</div>
                      <div className="text-xs text-green-600">30% OFF</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>6 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£510</div>
                      <div className="text-xs text-muted-foreground line-through">£850</div>
                      <div className="text-xs font-bold text-orange-500">BEST VALUE - 40% OFF</div>
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

            {/* PRP + Biotin Packages */}
            <Card className="wellness-card text-center flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle className="text-2xl mb-4">PRP + Biotin</CardTitle>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">£156</div>
                    <div className="text-sm text-muted-foreground line-through">£195</div>
                    <div className="text-xs font-medium text-green-600">20% OFF</div>
                  </div>
                  <CardDescription>1 session combo</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="text-left space-y-2 text-sm flex-1">
                  <div className="flex justify-between">
                    <span>3 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£336</div>
                      <div className="text-xs text-muted-foreground line-through">£480</div>
                      <div className="text-xs text-green-600">30% OFF</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>6 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£588</div>
                      <div className="text-xs text-muted-foreground line-through">£980</div>
                      <div className="text-xs font-bold text-orange-500">BEST VALUE - 40% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <BookingForm defaultService="PRP + Biotin Combo">
                    <Button className="w-full">Contact Now</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Microneedling */}
            <Card className="wellness-card text-center flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle className="text-2xl mb-4">Microneedling</CardTitle>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">£90</div>
                    <div className="text-sm text-muted-foreground line-through">£100</div>
                    <div className="text-xs font-medium text-green-600">10% OFF</div>
                  </div>
                  <CardDescription>1 session</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="text-left space-y-2 text-sm flex-1">
                  <div className="flex justify-between">
                    <span>3 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£210</div>
                      <div className="text-xs text-muted-foreground line-through">£280</div>
                      <div className="text-xs text-green-600">25% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <BookingForm defaultService="Microneedling">
                    <Button className="w-full">Contact Now</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Vitamin B12 & Biotin */}
            <Card className="wellness-card text-center flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle className="text-2xl mb-4">Vitamin Injections</CardTitle>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">B12: £25.50</div>
                    <div className="text-sm text-muted-foreground line-through">£30</div>
                    <div className="text-xs font-medium text-green-600">15% OFF</div>
                  </div>
                  <CardDescription>Per injection</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="text-left space-y-2 text-sm flex-1">
                  <div className="flex justify-between">
                    <span>B12 - 3 sessions:</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">£60</div>
                      <div className="text-xs text-muted-foreground line-through">£80</div>
                      <div className="text-xs text-green-600">25% OFF</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Biotin:</span>
                    <div className="text-right">
                      <div className="text-xs font-medium text-blue-600">CONSULTATION</div>
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

      {/* Package Deals */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">🚀 Best Value</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Launch Package Deals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Save more with our bundled packages - perfect for achieving lasting results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="wellness-card relative flex flex-col h-full">
              <CardHeader className="text-center flex-1">
                <div className="flex justify-center mb-4">
                  <Gift className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Starter Taster</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£170</div>
                  <div className="text-sm text-muted-foreground line-through">Regular Price: £195</div>
                  <div className="savings-badge">Save £25</div>
                </div>
                <CardDescription className="text-base">Perfect for first-time clients</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>1 × PRP Treatment</span>
                    <span className="font-semibold">£160</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>1 × Biotin Boost</span>
                    <span className="font-semibold">£35</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Free consultation included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Mobile service convenience
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <BookingForm defaultService="Starter Taster Package">
                    <Button className="w-full">Choose Starter Package</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>

            {/* Transformation Package */}
            <Card className="wellness-card relative border-primary shadow-lg scale-105 flex flex-col h-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center pt-8 flex-1">
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Transformation Pack</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£480</div>
                  <div className="text-sm text-muted-foreground line-through">Regular Price: £585</div>
                  <div className="savings-badge">Save £105</div>
                </div>
                <CardDescription className="text-base">Ideal for visible results</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>3 × PRP Treatments</span>
                    <span className="font-semibold">£480</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>3 × Biotin Boosts</span>
                    <span className="font-semibold">£105</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Free consultation & aftercare
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Flexible scheduling
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <BookingForm defaultService="Transformation Pack">
                    <Button className="w-full">Choose Transformation Pack</Button>
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
                <div className="flex justify-center mb-4">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Ultimate Growth Pack</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">£820</div>
                  <div className="text-sm text-muted-foreground line-through">Regular Price: £1,170</div>
                  <div className="savings-badge">Save £350</div>
                </div>
                <CardDescription className="text-base">Maximum results guaranteed</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>6 × PRP Treatments</span>
                    <span className="font-semibold">£960</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span>6 × Biotin Boosts</span>
                    <span className="font-semibold">£210</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      VIP consultation & support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Priority booking
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <BookingForm defaultService="Ultimate Growth Pack">
                    <Button className="w-full">Choose Ultimate Pack</Button>
                  </BookingForm>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Discounts */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited-Time Launch Discounts</h2>
            <p className="text-xl text-white/90 mb-8">Extra savings on top of our already discounted packages!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">20%</div>
              <div className="text-lg font-semibold mb-2">OFF First Session</div>
              <div className="text-white/80 text-sm">
                New clients only. Cannot be combined with package deals.
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30%</div>
              <div className="text-lg font-semibold mb-2">OFF 3 Sessions</div>
              <div className="text-white/80 text-sm">
                When booking individual sessions. Perfect for steady progress.
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">OFF 6 Sessions</div>
              <div className="text-white/80 text-sm">
                Maximum savings for dedicated wellness journey.
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Claim Your Discount Now
            </Button>
            <p className="text-white/80 text-sm mt-4">
              *Discounts valid for new clients only. Limited time offer. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pricing FAQs
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg">Are there any hidden fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No hidden fees whatsoever. Our prices include consultation, treatment, mobile service, and aftercare support. The only additional cost might be if you're outside our standard service area.
                </p>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept cash, bank transfer, and all major debit/credit cards. Payment is required at the time of service or can be arranged in advance for packages.
                </p>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg">Can I split package payments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! For our larger packages, we offer flexible payment plans. Contact us to discuss payment options that work for your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg">What if I need to cancel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We require 24 hours notice for cancellations. Packages are valid for 6 months from purchase date. Full refund policy available on request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;