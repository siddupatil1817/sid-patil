import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { ArrowRight, Calendar, Users, Sparkles, Zap } from 'lucide-react';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Connect with startup founders worldwide
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Where Founders{' '}
              <span className="gradient-text">Meet & Build</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join a thriving community of startup founders. Discover events, share expertise, and find your next co-founder or advisor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-lg px-8 h-14 shadow-glow" asChild>
                <Link to={user ? '/events' : '/auth?mode=signup'}>
                  {user ? 'Browse Events' : 'Get Started Free'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link to="/founders">Explore Founders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Network
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Built for founders, by founders. Connect, collaborate, and grow together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Events & Meetups</h3>
              <p className="text-muted-foreground">
                Join virtual and in-person events. From pitch nights to coffee chats, find your tribe.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Founder Directory</h3>
              <p className="text-muted-foreground">
                Browse profiles by skills, stage, and industry. Find co-founders, mentors, or collaborators.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Rich Profiles</h3>
              <p className="text-muted-foreground">
                Showcase your startup, skills, and what you're looking for. Make meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl bg-card border border-border shadow-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Connect?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Join thousands of founders building the next big thing.
              </p>
              <Button size="lg" className="text-lg px-8 h-14 shadow-glow" asChild>
                <Link to={user ? '/events' : '/auth?mode=signup'}>
                  {user ? 'Browse Events' : 'Join the Community'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FounderHub. Built for founders, by founders.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
