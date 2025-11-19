import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Layers, 
  Sparkles, 
  Rocket,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimize your apps for maximum performance with cutting-edge technology and real-time monitoring."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every layer, protecting your data and users 24/7."
    },
    {
      icon: Layers,
      title: "Unified Management",
      description: "Control all your applications from one powerful dashboard with comprehensive analytics."
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and automated optimizations powered by machine learning."
    },
    {
      icon: TrendingUp,
      title: "Scale Effortlessly",
      description: "Grow from prototype to production without infrastructure headaches or performance concerns."
    },
    {
      icon: Rocket,
      title: "Deploy Instantly",
      description: "Push updates in seconds with zero downtime and automatic rollback capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-bold text-foreground">AppMaster</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </a>
              <a href="#cta" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Started
              </a>
            </div>
            <Button variant="hero" size="sm">
              Sign Up Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Master Your App Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build, Deploy, and
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Scale Apps</span> 
              <br />with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The complete platform for modern app development. Streamline your workflow, 
              enhance security, and ship faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outlineHero" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard value="99.9%" label="Uptime Guaranteed" trend="↑ 24/7 Monitoring" />
            <StatCard value="50K+" label="Active Developers" trend="↑ Growing Daily" />
            <StatCard value="2.5M" label="Apps Deployed" trend="↑ This Month" />
            <StatCard value="<100ms" label="Avg Response Time" trend="↑ Lightning Fast" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you build better apps faster, 
              without compromising on quality or security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-12 shadow-card border border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Master Your Apps?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust AppMaster to build, deploy, 
              and scale their applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Start Building Now
                <Rocket className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-primary" />
              <span className="font-semibold text-foreground">AppMaster</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AppMaster. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
