
import React from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Zap,
  RefreshCw,
} from "lucide-react";

// Sample data
const salesData = [
  { name: "Jan", sales: 4000, target: 5000 },
  { name: "Feb", sales: 6000, target: 5000 },
  { name: "Mar", sales: 8000, target: 6000 },
  { name: "Apr", sales: 7500, target: 6000 },
  { name: "May", sales: 9500, target: 7000 },
  { name: "Jun", sales: 8500, target: 7000 },
  { name: "Jul", sales: 12000, target: 8000 },
];

const customerData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1400 },
  { name: "Mar", value: 1800 },
  { name: "Apr", value: 2000 },
  { name: "May", value: 2200 },
  { name: "Jun", value: 2600 },
  { name: "Jul", value: 3000 },
];

const productData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 15 },
  { name: "Others", value: 5 },
];

const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f97316"];

const Analytics = () => {
  return (
    <Layout>
      <div className="mt-4 fade-in">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 slide-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <h1 className="heading-lg mb-2">Business Analytics</h1>
            <p className="paragraph">Track your performance and growth</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-surface-50 hover:bg-surface-100 px-4 py-2 rounded-lg transition-colors">
              <Calendar className="h-4 w-4" />
              Last 30 days
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>
        
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 slide-up" style={{ animationDelay: "0.15s" }}>
          <MetricCard
            title="Total Revenue"
            value="$45,231"
            change="+12.5%"
            icon={DollarSign}
            iconBg="bg-blue-50"
            iconColor="text-blue-500"
            positive
          />
          <MetricCard
            title="Total Orders"
            value="324"
            change="+8.2%"
            icon={ShoppingBag}
            iconBg="bg-purple-50"
            iconColor="text-purple-500"
            positive
          />
          <MetricCard
            title="New Customers"
            value="156"
            change="+24.5%"
            icon={Users}
            iconBg="bg-green-50"
            iconColor="text-green-500"
            positive
          />
          <MetricCard
            title="Avg. Order Value"
            value="$139.58"
            change="-3.2%"
            icon={TrendingUp}
            iconBg="bg-red-50"
            iconColor="text-red-500"
            positive={false}
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Performance Chart */}
          <div className="lg:col-span-2 slide-up" style={{ animationDelay: "0.2s" }}>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium mb-1">Sales Performance</h2>
                    <p className="text-sm text-foreground/60">Monthly revenue vs target</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-xs text-foreground/70">Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                      <span className="text-xs text-foreground/70">Target</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salesData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#64748b" }} 
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#64748b" }} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          border: "none"
                        }} 
                      />
                      <Bar dataKey="target" fill="#93c5fd" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Customer Growth */}
          <div className="lg:col-span-1 slide-up" style={{ animationDelay: "0.25s" }}>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium mb-1">Customer Growth</h2>
                    <p className="text-sm text-foreground/60">Monthly new customers</p>
                  </div>
                </div>
                
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={customerData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#64748b" }} 
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#64748b" }} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          border: "none"
                        }} 
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#8b5cf6" }}
                        activeDot={{ r: 7, fill: "#8b5cf6" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Additional Charts and AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Performance */}
          <div className="lg:col-span-1 slide-up" style={{ animationDelay: "0.3s" }}>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium mb-1">Product Performance</h2>
                    <p className="text-sm text-foreground/60">Sales distribution by product</p>
                  </div>
                </div>
                
                <div className="h-[260px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {productData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          border: "none"
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {productData.slice(0, 4).map((product, index) => (
                      <div key={product.name} className="flex items-center gap-2">
                        <div 
                          className="h-3 w-3 rounded-full" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="text-xs text-foreground/80">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* AI Insights */}
          <div className="lg:col-span-2 slide-up" style={{ animationDelay: "0.35s" }}>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium mb-1">AI Business Insights</h2>
                    <p className="text-sm text-foreground/60">Personalized recommendations for growth</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <InsightCard 
                    title="Increase your digital marketing spend on weekends"
                    description="Based on your customer activity patterns, weekend marketing shows 34% higher conversion rates."
                    icon={Lightbulb}
                    iconBg="bg-yellow-50"
                    iconColor="text-yellow-500"
                  />
                  
                  <InsightCard 
                    title="Focus on Product B inventory management"
                    description="Sales for Product B have increased by 42% this month. Consider increasing inventory levels to meet growing demand."
                    icon={Zap}
                    iconBg="bg-purple-50"
                    iconColor="text-purple-500"
                  />
                  
                  <InsightCard 
                    title="Customer retention opportunity"
                    description="65% of your one-time customers could be converted to repeat buyers with a targeted email campaign."
                    icon={Users}
                    iconBg="bg-blue-50"
                    iconColor="text-blue-500"
                  />
                </div>
                
                <div className="mt-6">
                  <a href="#" className="text-sm text-primary flex items-center justify-center gap-1 hover:text-primary/80">
                    View all insights <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  positive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  iconBg, 
  iconColor, 
  positive 
}) => {
  return (
    <Card variant="default">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-foreground/60 mb-1">{title}</p>
            <h3 className="text-2xl font-semibold mb-2">{value}</h3>
            <div className={`inline-flex items-center gap-1 text-xs font-medium ${
              positive ? "text-green-600" : "text-red-600"
            }`}>
              <span>{change}</span>
              <span className="text-xs text-foreground/60">from last month</span>
            </div>
          </div>
          <div className={`h-10 w-10 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  iconBg, 
  iconColor 
}) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-surface-50">
      <div className={`h-10 w-10 rounded-lg ${iconBg} flex-shrink-0 flex items-center justify-center`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

export default Analytics;
