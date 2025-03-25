
import React from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import Button from "@/components/ui-components/Button";
import { 
  GraduationCap, 
  Calendar, 
  Users, 
  Clock, 
  BookOpen, 
  Award, 
  ChevronRight, 
  Play,
  Laptop,
  FileText,
  Video,
  CheckCircle
} from "lucide-react";

// Sample course data
const courses = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    description: "Learn the essentials of digital marketing for small businesses",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Maria Johnson",
    instructorRole: "Digital Marketing Expert",
    duration: "4 weeks",
    level: "Beginner",
    students: 842,
    modules: 6,
    progress: 0,
    featured: true,
    category: "marketing",
  },
  {
    id: 2,
    title: "Financial Planning for Entrepreneurs",
    description: "Master business finances and create sustainable growth",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "David Chen",
    instructorRole: "Financial Advisor",
    duration: "6 weeks",
    level: "Intermediate",
    students: 567,
    modules: 8,
    progress: 35,
    featured: true,
    category: "finance",
  },
  {
    id: 3,
    title: "Supply Chain Management",
    description: "Optimize your business operations and logistics",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Sarah Ahmed",
    instructorRole: "Operations Specialist",
    duration: "5 weeks",
    level: "Advanced",
    students: 324,
    modules: 7,
    progress: 0,
    featured: false,
    category: "operations",
  },
  {
    id: 4,
    title: "Business Leadership Skills",
    description: "Develop essential leadership skills for growing your team",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Michael Reynolds",
    instructorRole: "Leadership Coach",
    duration: "4 weeks",
    level: "Intermediate",
    students: 756,
    modules: 5,
    progress: 80,
    featured: false,
    category: "leadership",
  },
];

// Upcoming webinars
const webinars = [
  {
    id: 1,
    title: "E-commerce Growth Strategies",
    date: "May 15, 2023",
    time: "2:00 PM - 3:30 PM",
    speaker: "Alex Morgan",
    attendees: 156,
  },
  {
    id: 2,
    title: "Tax Planning for Small Businesses",
    date: "May 18, 2023",
    time: "11:00 AM - 12:30 PM",
    speaker: "Rahim Karim",
    attendees: 214,
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity",
    date: "May 22, 2023",
    time: "3:00 PM - 4:00 PM",
    speaker: "Lisa Chen",
    attendees: 189,
  },
];

// Course categories
const categories = [
  { name: "All", count: 42 },
  { name: "Marketing", count: 12 },
  { name: "Finance", count: 9 },
  { name: "Operations", count: 6 },
  { name: "Leadership", count: 8 },
  { name: "Sales", count: 7 },
];

const Training = () => {
  return (
    <Layout>
      <div className="mt-4 fade-in">
        <div className="mb-8 slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="heading-lg mb-2">Skills Development & Training</h1>
          <p className="paragraph">Grow your business skills with expert-led courses and training</p>
        </div>
        
        {/* Featured Courses */}
        <section className="mb-12 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="mb-8">
            <h2 className="heading-sm mb-2">Featured Courses</h2>
            <p className="text-foreground/70">Top courses selected for you based on your business profile</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.filter(course => course.featured).map(course => (
              <FeaturedCourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        
        {/* Course Categories and All Courses */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 slide-up" style={{ animationDelay: "0.2s" }}>
            <Card variant="subtle">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm hover:bg-surface-100">
                        <span>{category.name}</span>
                        <span className="text-xs font-medium bg-surface-100 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-surface-200">
                  <h3 className="text-sm font-medium mb-4">Filter By</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-beginner"
                        className="rounded text-primary focus:ring-primary/25 h-4 w-4"
                      />
                      <label htmlFor="filter-beginner" className="text-sm ml-2">
                        Beginner Level
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-intermediate"
                        className="rounded text-primary focus:ring-primary/25 h-4 w-4"
                      />
                      <label htmlFor="filter-intermediate" className="text-sm ml-2">
                        Intermediate Level
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-advanced"
                        className="rounded text-primary focus:ring-primary/25 h-4 w-4"
                      />
                      <label htmlFor="filter-advanced" className="text-sm ml-2">
                        Advanced Level
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-certificate"
                        className="rounded text-primary focus:ring-primary/25 h-4 w-4"
                      />
                      <label htmlFor="filter-certificate" className="text-sm ml-2">
                        Includes Certificate
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Course List */}
          <div className="lg:col-span-3 slide-up" style={{ animationDelay: "0.25s" }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">All Courses</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground/60">Sort by:</span>
                <select className="text-sm bg-surface-50 border-surface-200 rounded-md px-2 py-1 focus:ring-primary/25 focus:border-primary">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline">
                Load More Courses
              </Button>
            </div>
          </div>
        </section>
        
        {/* Upcoming Webinars */}
        <section className="mb-8 slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="heading-sm mb-2">Upcoming Webinars</h2>
              <p className="text-foreground/70">Live training sessions with industry experts</p>
            </div>
            <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
              View all webinars <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </div>
        </section>
        
        {/* Certifications */}
        <section className="mb-6 slide-up" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="heading-sm mb-2">Certification Programs</h2>
              <p className="text-foreground/70">Industry-recognized certificates to boost your credentials</p>
            </div>
            <a href="#" className="text-sm text-primary flex items-center gap-1 hover:text-primary/80">
              Browse all certificates <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CertificationCard
              title="Business Management Professional"
              organization="GrowthSphere Academy"
              duration="12 weeks"
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <CertificationCard
              title="Digital Marketing Specialist"
              organization="GrowthSphere Academy"
              duration="8 weeks"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <CertificationCard
              title="Financial Analysis Expert"
              organization="GrowthSphere Academy"
              duration="10 weeks"
              image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface FeaturedCourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
    instructor: string;
    instructorRole: string;
    duration: string;
    level: string;
    students: number;
    modules: number;
    progress: number;
  };
}

const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({ course }) => {
  return (
    <Card variant="default" hoverEffect className="overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-2/5">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 p-6 flex flex-col">
          <div className="mb-2">
            <span className="inline-block text-xs font-medium bg-blue-50 text-blue-600 py-0.5 px-2 rounded-full mb-2">
              Featured
            </span>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
              {course.description}
            </p>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-foreground/60 mr-1" />
              <span className="text-xs text-foreground/60">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-foreground/60 mr-1" />
              <span className="text-xs text-foreground/60">{course.modules} modules</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-foreground/60 mr-1" />
              <span className="text-xs text-foreground/60">{course.students} students</span>
            </div>
          </div>
          
          {course.progress > 0 ? (
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-foreground/70">Progress</span>
                <span className="text-xs font-medium">{course.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <Button fullWidth>
                <Play className="h-4 w-4" />
                Continue Learning
              </Button>
            </div>
          ) : (
            <Button fullWidth className="mt-auto">
              <Play className="h-4 w-4" />
              Start Learning
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
    instructor: string;
    instructorRole: string;
    duration: string;
    level: string;
    students: number;
    modules: number;
    progress: number;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card variant="default" hoverEffect>
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium py-1 px-2.5 rounded-full flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {course.duration}
        </div>
      </div>
      
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium bg-blue-50 text-blue-600 py-0.5 px-2 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-foreground/60 mr-1" />
            <span className="text-xs text-foreground/60">{course.students} students</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2">{course.title}</h3>
        <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-surface-200 flex items-center justify-center">
            <span className="text-xs">{course.instructor.charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-medium">{course.instructor}</p>
            <p className="text-xs text-foreground/60">{course.instructorRole}</p>
          </div>
        </div>
        
        {course.progress > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-foreground/70">Progress</span>
              <span className="text-xs font-medium">{course.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <Button fullWidth>
              <Play className="h-4 w-4" />
              Continue
            </Button>
          </div>
        ) : (
          <Button fullWidth>
            <Play className="h-4 w-4" />
            Start Course
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

interface WebinarCardProps {
  webinar: {
    id: number;
    title: string;
    date: string;
    time: string;
    speaker: string;
    attendees: number;
  };
}

const WebinarCard: React.FC<WebinarCardProps> = ({ webinar }) => {
  return (
    <Card variant="default" hoverEffect>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary rounded-lg p-2 flex items-center justify-center h-12 w-12 flex-shrink-0">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">{webinar.title}</h3>
            <div className="text-sm mb-4">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 text-foreground/60 mr-2" />
                <span className="text-foreground/80">{webinar.date}</span>
              </div>
              <div className="flex items-center mb-1">
                <Clock className="h-4 w-4 text-foreground/60 mr-2" />
                <span className="text-foreground/80">{webinar.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-foreground/60 mr-2" />
                <span className="text-foreground/80">{webinar.attendees} attending</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Register Now</Button>
              <Button variant="outline" size="sm">Add to Calendar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CertificationCardProps {
  title: string;
  organization: string;
  duration: string;
  image: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  organization, 
  duration, 
  image 
}) => {
  return (
    <Card variant="default" hoverEffect>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      />
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
            <Award className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium">{organization}</p>
            <p className="text-xs text-foreground/60">Certification</p>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-foreground/60 mr-1" />
            <span className="text-xs text-foreground/60">{duration}</span>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-foreground/60 mr-1" />
            <span className="text-xs text-foreground/60">6 assessments</span>
          </div>
          <div className="flex items-center">
            <Laptop className="h-4 w-4 text-foreground/60 mr-1" />
            <span className="text-xs text-foreground/60">Online</span>
          </div>
        </div>
        
        <Button fullWidth>Learn More</Button>
      </CardContent>
    </Card>
  );
};

export default Training;
