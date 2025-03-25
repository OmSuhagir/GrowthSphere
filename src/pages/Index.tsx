
import React from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import Button from "@/components/ui-components/Button";
import { 
  Bot, 
  DollarSign, 
  ShoppingBag, 
  BarChart, 
  GraduationCap, 
  Users,
  TrendingUp,
  BookOpen,
  MessageSquare,
  ChevronRight
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="mt-4 fade-in">
        {/* Hero Section */}
        <section className="py-8">
          <div className="slide-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="heading-xl mb-3">Welcome to GrowthSphere</h1>
            <p className="paragraph max-w-3xl mb-8">
              Your AI-powered platform for business growth, financial literacy, and community support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 slide-up" style={{ animationDelay: "0.2s" }}>
            <Card variant="glass" className="md:col-span-2 relative overflow-hidden">
              <CardContent className="p-8 flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="max-w-xl">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium py-1 px-2.5 rounded-full mb-4">New</span>
                  <h2 className="heading-md mb-4">AI Business Mentor</h2>
                  <p className="paragraph mb-6">
                    Get personalized business advice, financial planning, and market insights from our AI assistant.
                  </p>
                  <Button>
                    Start a conversation <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-subtle">
                    <Bot className="h-20 w-20 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Quick Access Section */}
        <section className="mb-12 slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="heading-sm mb-6">Quick Access</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <QuickAccessCard
              title="AI Mentor"
              icon={Bot}
              href="/ai-mentor"
              color="bg-blue-50"
              iconColor="text-blue-500"
            />
            <QuickAccessCard
              title="Finance"
              icon={DollarSign}
              href="/finance"
              color="bg-green-50"
              iconColor="text-green-500"
            />
            {/* <QuickAccessCard
              title="Marketplace"
              icon={ShoppingBag}
              href="/marketplace"
              color="bg-purple-50"
              iconColor="text-purple-500"
            /> */}
            <QuickAccessCard
              title="Analytics"
              icon={BarChart}
              href="/analytics"
              color="bg-orange-50"
              iconColor="text-orange-500"
            />
            <QuickAccessCard
              title="Training"
              icon={GraduationCap}
              href="/training"
              color="bg-pink-50"
              iconColor="text-pink-500"
            />
            <QuickAccessCard
              title="Community"
              icon={Users}
              href="/community"
              color="bg-indigo-50"
              iconColor="text-indigo-500"
            />
          </div>
        </section>
        
        {/* Business Insights Section */}
        <section className="mb-12 slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="heading-sm mb-6">Business Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" hoverEffect>
              <CardContent>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-sm text-green-600 font-medium">+12%</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Sales Growth</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  Your sales are growing faster than last month
                </p>
                <a href="/analytics" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  View analytics <ChevronRight className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            
            <Card variant="default" hoverEffect>
              <CardContent>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-sm text-foreground/70 font-medium">4 new</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Finance Courses</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  New courses on budget planning and cash flow
                </p>
                <a href="/finance" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  Browse courses <ChevronRight className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            
            <Card variant="default" hoverEffect>
              <CardContent>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="text-sm text-foreground/70 font-medium">8 unread</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Community Posts</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  New discussions from entrepreneurs in your network
                </p>
                <a href="/community" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  Join conversation <ChevronRight className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Recommended Section */}
        <section className="mb-6 slide-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="heading-sm mb-6">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="subtle" hoverEffect>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Planning" 
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-medium bg-blue-50 text-blue-600 py-0.5 px-2 rounded-full">
                    Course
                  </span>
                  <span className="text-xs text-foreground/60">45 min</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Financial Planning for Small Businesses</h3>
                <p className="text-sm text-foreground/70">
                  Learn how to create a financial plan that will help your business grow and thrive.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="subtle" hoverEffect>
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing" 
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-medium bg-green-50 text-green-600 py-0.5 px-2 rounded-full">
                    Workshop
                  </span>
                  <span className="text-xs text-foreground/60">July 15, 2023</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Digital Marketing Strategies</h3>
                <p className="text-sm text-foreground/70">
                  Effective strategies to reach more customers and grow your online presence.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="subtle" hoverEffect className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Networking Event" 
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-medium bg-purple-50 text-purple-600 py-0.5 px-2 rounded-full">
                    Event
                  </span>
                  <span className="text-xs text-foreground/60">Next Week</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Entrepreneur Networking Meetup</h3>
                <p className="text-sm text-foreground/70">
                  Connect with other business owners and share experiences and opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Quick Access Card Component
const QuickAccessCard = ({ 
  title, 
  icon: Icon, 
  href, 
  color, 
  iconColor 
}: { 
  title: string; 
  icon: React.ElementType; 
  href: string; 
  color: string; 
  iconColor: string;
}) => {
  return (
    <a 
      href={href} 
      className="flex flex-col items-center justify-center p-4 rounded-lg border border-surface-100 bg-white hover:shadow-md transition-all"
    >
      <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center mb-3`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </a>
  );
};

export default Index;
