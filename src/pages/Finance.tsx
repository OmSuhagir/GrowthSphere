
import React from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import Button from "@/components/ui-components/Button";
import { 
  DollarSign, 
  BookOpen, 
  Play,
  CreditCard,
  ChevronRight,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart
} from "lucide-react";

const Finance = () => {
  return (
    <Layout>
      <div className="mt-4 fade-in">
        <h1 className="heading-lg mb-8">Financial Literacy & Microfinance</h1>
        
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 slide-up" style={{ animationDelay: "0.1s" }}>
          {/* Financial Health Card */}
          <Card variant="glass" className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="heading-md mb-4">Your Financial Health</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium">Cash Flow</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-semibold">Positive</span>
                    <span className="text-green-500 text-sm ml-2">+8%</span>
                  </div>
                </div>
                <div className="bg-surface-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm font-medium">Finance Score</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-semibold">B+</span>
                    <span className="text-blue-500 text-sm ml-2">Good</span>
                  </div>
                </div>
              </div>
              <Button fullWidth>
                View Full Financial Report
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Microfinance Card */}
          <Card variant="glass" className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="heading-md mb-4">Microfinance Options</h2>
              <p className="paragraph mb-6">
                Access to loans and financial products tailored for small businesses and entrepreneurs.
              </p>
              <div className="flex gap-3">
                <Button variant="primary">
                  <CreditCard className="h-4 w-4" />
                  Apply for Loan
                </Button>
                <Button variant="outline">
                  View Eligibility
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Courses Section */}
        <section className="mb-10 slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-sm">Financial Literacy Courses</h2>
            <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
              View all courses <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Cards */}
            <CourseCard
              title="Business Budgeting Basics"
              description="Learn how to create and manage an effective budget for your small business."
              imageSrc="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              duration="1h 30min"
              level="Beginner"
              progress={100}
              completed
            />
            
            <CourseCard
              title="Cash Flow Management"
              description="Strategies to maintain healthy cash flow and plan for financial stability."
              imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              duration="2h 15min"
              level="Intermediate"
              progress={45}
            />
            
            <CourseCard
              title="Tax Planning for SMEs"
              description="Essential tax knowledge to optimize your business finances and compliance."
              imageSrc="https://images.unsplash.com/photo-1586486942353-d2a594313adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              duration="3h"
              level="Advanced"
              progress={0}
            />
          </div>
        </section>
        
        {/* Financial Tools Section */}
        <section className="mb-6 slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="heading-sm mb-6">Financial Tools</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ToolCard 
              title="Budget Calculator" 
              icon={DollarSign} 
              description="Create detailed business budgets" 
              iconBg="bg-green-50"
              iconColor="text-green-500"
            />
            <ToolCard 
              title="Loan Estimator" 
              icon={CreditCard} 
              description="Calculate loan amounts and payments" 
              iconBg="bg-blue-50"
              iconColor="text-blue-500"
            />
            <ToolCard 
              title="Profit Analyzer" 
              icon={BarChart} 
              description="Track and analyze profit margins" 
              iconBg="bg-purple-50"
              iconColor="text-purple-500"
            />
            <ToolCard 
              title="Invoice Generator" 
              icon={BookOpen} 
              description="Create professional invoices" 
              iconBg="bg-orange-50"
              iconColor="text-orange-500"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const CourseCard = ({ 
  title, 
  description, 
  imageSrc, 
  duration, 
  level,
  progress,
  completed = false
}: {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
  level: string;
  progress: number;
  completed?: boolean;
}) => {
  return (
    <Card variant="default" hoverEffect>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium py-1 px-2.5 rounded-full flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {duration}
        </div>
        {completed && (
          <div className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium py-1 px-2.5 rounded-full flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </div>
        )}
      </div>
      
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium bg-blue-50 text-blue-600 py-0.5 px-2 rounded-full">
            {level}
          </span>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 text-foreground/60 mr-1" />
            <span className="text-xs text-foreground/60">8 lessons</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-foreground/70">Progress</span>
            <span className="text-xs font-medium">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <Button variant={completed ? "outline" : "primary"} fullWidth>
          {completed ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Review Course
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              {progress > 0 ? "Continue" : "Start"} Course
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

const ToolCard = ({ 
  title, 
  icon: Icon, 
  description, 
  iconBg, 
  iconColor 
}: { 
  title: string; 
  icon: React.ElementType; 
  description: string; 
  iconBg: string; 
  iconColor: string;
}) => {
  return (
    <Card variant="default" hoverEffect className="flex flex-col justify-between h-full">
      <CardContent>
        <div className={`h-12 w-12 rounded-lg ${iconBg} flex items-center justify-center mb-3`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="text-base font-medium mb-1.5">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">
          {description}
        </p>
        <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80 mt-auto">
          Open tool <ChevronRight className="h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  );
};

export default Finance;
