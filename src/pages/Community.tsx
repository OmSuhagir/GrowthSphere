
import React from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import Button from "@/components/ui-components/Button";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Heart, 
  Share2, 
  ChevronRight, 
  Search, 
  ThumbsUp, 
  MessageCircle, 
  HelpCircle 
} from "lucide-react";

// Sample discussion data
const discussions = [
  {
    id: 1,
    title: "What are the best social media strategies for local businesses?",
    content: "I run a small bakery and I'm looking to improve my social media presence. What platforms and strategies have worked best for other local businesses?",
    author: "Maria Garcia",
    authorRole: "Bakery Owner",
    date: "2 days ago",
    tags: ["marketing", "social media"],
    likes: 24,
    comments: 18,
    views: 142,
  },
  {
    id: 2,
    title: "Managing cash flow during seasonal business fluctuations",
    content: "My business has significant seasonal variations. I'd appreciate advice on managing cash flow during slow periods while preparing for busy seasons.",
    author: "John Mwangi",
    authorRole: "Tour Operator",
    date: "5 days ago",
    tags: ["finance", "cash flow"],
    likes: 32,
    comments: 26,
    views: 203,
  },
  {
    id: 3,
    title: "Tips for hiring and retaining local talent?",
    content: "As my business grows, I need to hire more staff. What strategies have worked for finding and keeping good employees in rural areas?",
    author: "Sarah Chen",
    authorRole: "Farm Owner",
    date: "1 week ago",
    tags: ["hiring", "team management"],
    likes: 19,
    comments: 14,
    views: 167,
  },
];

// Sample expert data
const experts = [
  {
    id: 1,
    name: "Dr. Emma Williams",
    expertise: "Financial Planning",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    topics: ["Business Finance", "Investment"],
    followers: 1245,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    expertise: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    topics: ["SEO", "Content Strategy"],
    followers: 978,
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    expertise: "Supply Chain Management",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    topics: ["Logistics", "Inventory"],
    followers: 867,
  },
];

// Sample events data
const events = [
  {
    id: 1,
    title: "Local Business Networking Breakfast",
    date: "June 15, 2023",
    time: "8:00 AM - 10:00 AM",
    location: "Community Center, Downtown",
    attendees: 42,
  },
  {
    id: 2,
    title: "Workshop: Securing Small Business Loans",
    date: "June 22, 2023",
    time: "2:00 PM - 4:30 PM",
    location: "Virtual Event",
    attendees: 87,
  },
];

const Community = () => {
  return (
    <Layout>
      <div className="mt-4 fade-in">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 slide-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <h1 className="heading-lg mb-2">Community & Support</h1>
            <p className="paragraph">Connect with fellow entrepreneurs and get expert advice</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" />
              Start a Discussion
            </Button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
            <input
              type="search"
              placeholder="Search discussions, experts, or topics..."
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface-50 border-surface-200 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Discussions Section */}
            <section className="slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-sm">Recent Discussions</h2>
                <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  View all discussions <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <DiscussionCard key={discussion.id} discussion={discussion} />
                ))}
              </div>
            </section>
            
            {/* Q&A Section */}
            <section className="slide-up" style={{ animationDelay: "0.25s" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-sm">Popular Questions</h2>
                <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  View all questions <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              
              <Card variant="subtle">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <QuestionItem
                      question="How do I create a business plan for a small farm?"
                      answers={7}
                      views={156}
                    />
                    <QuestionItem
                      question="What are the best practices for inventory management for a retail store?"
                      answers={12}
                      views={243}
                    />
                    <QuestionItem
                      question="How do I market my products to customers outside my local area?"
                      answers={9}
                      views={189}
                    />
                    <QuestionItem
                      question="What financing options are available for expanding my business?"
                      answers={14}
                      views={278}
                    />
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Events Section */}
            <section className="slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-sm">Upcoming Community Events</h2>
                <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
                  View all events <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Featured Experts */}
            <section className="slide-up" style={{ animationDelay: "0.35s" }}>
              <h2 className="heading-sm mb-4">Featured Experts</h2>
              <Card variant="default">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {experts.map((expert) => (
                      <ExpertCard key={expert.id} expert={expert} />
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-primary flex items-center justify-center gap-1 hover:text-primary/80">
                      View all experts <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Support Section */}
            <section className="slide-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="heading-sm mb-4">Support & Resources</h2>
              <Card variant="glass">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Need Help?</h3>
                      <p className="text-sm text-foreground/70">Get personalized support</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-100 transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Chat with Support</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-100 transition-colors">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Book an Advisor Session</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-100 transition-colors">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Community Support</span>
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <Button fullWidth>
                      Submit a Support Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface DiscussionCardProps {
  discussion: {
    id: number;
    title: string;
    content: string;
    author: string;
    authorRole: string;
    date: string;
    tags: string[];
    likes: number;
    comments: number;
    views: number;
  };
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ discussion }) => {
  return (
    <Card variant="default" hoverEffect>
      <CardContent className="p-5">
        <div className="flex gap-4">
          <div className="hidden sm:block">
            <div className="h-10 w-10 rounded-full bg-surface-200 flex items-center justify-center">
              <span className="text-sm font-medium">{discussion.author.charAt(0)}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">{discussion.title}</h3>
            <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
              {discussion.content}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {discussion.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-surface-50 text-foreground/70 py-0.5 px-2 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <span>{discussion.author}</span>
                <span>•</span>
                <span>{discussion.date}</span>
              </div>
              
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <button className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-xs">{discussion.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">{discussion.comments}</span>
                </button>
                <button className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface QuestionItemProps {
  question: string;
  answers: number;
  views: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answers, views }) => {
  return (
    <div className="pb-6 border-b border-surface-100 last:border-0 last:pb-0">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-orange-500" />
          </div>
        </div>
        <div>
          <h3 className="text-base font-medium mb-2">{question}</h3>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{answers} answers</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{views} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExpertCardProps {
  expert: {
    id: number;
    name: string;
    expertise: string;
    image: string;
    topics: string[];
    followers: number;
  };
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-surface-50 rounded-lg transition-colors">
      <img 
        src={expert.image} 
        alt={expert.name} 
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium">{expert.name}</h3>
        <p className="text-xs text-foreground/60">{expert.expertise}</p>
        <div className="flex items-center gap-1 mt-1">
          <Users className="h-3 w-3 text-foreground/50" />
          <span className="text-xs text-foreground/60">{expert.followers} followers</span>
        </div>
      </div>
      <Button variant="outline" size="sm">Follow</Button>
    </div>
  );
};

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card variant="default" hoverEffect>
      <CardContent className="p-5">
        <h3 className="text-lg font-medium mb-3">{event.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-foreground/60" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-foreground/60" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-foreground/60" />
            <span className="text-sm">{event.attendees} attendees</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Join Event</Button>
          <Button variant="outline" size="sm">Add to Calendar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Community;
