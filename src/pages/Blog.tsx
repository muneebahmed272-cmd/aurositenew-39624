import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind PRP Therapy: How Your Blood Can Heal",
      excerpt: "Discover the fascinating science of Platelet Rich Plasma therapy and how your body's own healing mechanisms can be harnessed for natural rejuvenation.",
      category: "PRP Therapy",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Dr. Sarah Mitchell",
      featured: true
    },
    {
      id: 2,
      title: "Biotin vs B12: Understanding Vitamin Injections",
      excerpt: "Learn the differences between Biotin and B12 injections, their unique benefits, and how they can transform your energy levels and overall wellness.",
      category: "Vitamin Therapy",
      date: "March 10, 2024",
      readTime: "4 min read",
      author: "Dr. James Parker",
      featured: false
    },
    {
      id: 3,
      title: "Mobile Healthcare: The Future of Wellness",
      excerpt: "Explore how mobile healthcare services are revolutionizing the way we access professional treatments and why convenience matters for your wellbeing.",
      category: "Healthcare Innovation",
      date: "March 8, 2024",
      readTime: "6 min read",
      author: "Dr. Sarah Mitchell",
      featured: false
    },
    {
      id: 4,
      title: "Hair Loss Solutions: When to Consider PRP Treatment",
      excerpt: "Understanding the signs of hair loss and how PRP therapy can help stimulate natural hair growth for both men and women.",
      category: "Hair Health",
      date: "March 5, 2024",
      readTime: "7 min read",
      author: "Dr. James Parker",
      featured: false
    },
    {
      id: 5,
      title: "Skin Rejuvenation: Natural Anti-Aging with PRP",
      excerpt: "Discover how PRP facial treatments can improve skin texture, reduce fine lines, and give you a natural glow without synthetic fillers.",
      category: "Skin Care",
      date: "March 1, 2024",
      readTime: "5 min read",
      author: "Dr. Sarah Mitchell",
      featured: false
    },
    {
      id: 6,
      title: "Energy Boost: The Benefits of B12 Injections",
      excerpt: "Learn how B12 injections can combat fatigue, improve mental clarity, and support your body's natural energy production systems.",
      category: "Vitamin Therapy",
      date: "February 28, 2024",
      readTime: "4 min read",
      author: "Dr. James Parker",
      featured: false
    }
  ];

  const categories = ["All", "PRP Therapy", "Vitamin Therapy", "Hair Health", "Skin Care", "Healthcare Innovation"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              📚 Wellness Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wellness <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Expert advice, treatment insights, and the latest in mobile wellness healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">⭐ Featured Article</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest Insights
            </h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="wellness-card max-w-4xl mx-auto overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br from-primary to-secondary"></div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                  <CardDescription className="text-lg mb-6">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <User className="mr-2 h-4 w-4" />
                      By {post.author}
                    </div>
                    <Button className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our collection of wellness insights and treatment guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="wellness-card overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="mr-1 h-3 w-3" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Wellness Tips
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get the latest wellness insights, treatment guides, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Join 500+ readers who stay updated with our wellness content
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;