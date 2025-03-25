
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Bot, 
  DollarSign, 
  ShoppingBag, 
  BarChart, 
  GraduationCap, 
  Users, 
  Settings, 
  HelpCircle, 
  Globe
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "AI Business Mentor", href: "/ai-mentor", icon: Bot },
    { name: "Financial Literacy", href: "/finance", icon: DollarSign },
    // { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { name: "Analytics", href: "/analytics", icon: BarChart },
    { name: "Training & Skills", href: "/training", icon: GraduationCap },
    { name: "Community", href: "/community", icon: Users },
  ];

  const sidebarClasses = isMobile
    ? `fixed inset-y-0 left-0 z-50 w-72 ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`
    : "fixed inset-y-0 left-0 z-50 w-64 hidden md:block";

  return (
    <>
      {/* Overlay */}
      {isMobile && open && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`${sidebarClasses} bg-surface-25 border-r border-surface-200`}>
        <div className="h-full flex flex-col">
          {/* Mobile header with close button */}
          {isMobile && (
            <div className="h-16 px-4 flex items-center justify-between border-b border-surface-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">GS</span>
                </div>
                <span className="font-semibold text-lg">GrowthSphere</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}
          
          {/* Nav links */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-surface-100"
              >
                <item.icon className="h-5 w-5 mr-3 text-foreground/70" />
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Bottom menu */}
          <div className="p-4 border-t border-surface-200">
            <div className="space-y-1">
              <a
                href="/settings"
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-surface-100"
              >
                <Settings className="h-5 w-5 mr-3 text-foreground/70" />
                Settings
              </a>
              <a
                href="/help"
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-surface-100"
              >
                <HelpCircle className="h-5 w-5 mr-3 text-foreground/70" />
                Help Center
              </a>
            </div>
            
            {/* Language selector */}
            <div className="mt-6">
              <div className="flex items-center px-3 py-2">
                <Globe className="h-5 w-5 mr-3 text-foreground/70" />
                <select
                  className="bg-transparent text-sm focus:ring-0 focus:outline-none border-none p-0"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="sw">Swahili</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
