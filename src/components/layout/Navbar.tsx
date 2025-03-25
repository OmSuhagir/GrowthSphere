import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 right-0 left-0 bg-surface-25/80 backdrop-blur-lg border-b border-surface-200 z-20">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Button
              size="icon"
              variant="ghost"
              onClick={onMenuClick}
              className="md:hidden"
            >                                                                                                                
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-semibold text-sm">GS</span>
            </div>
            <span className="font-semibold text-lg hidden md:block">
              GrowthSphere
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-w-xs w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-surface-100 border-none focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
            />
          </div>
          <Button
            size="icon"
            variant="ghost"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-surface-200 flex items-center justify-center">
            <span className="text-foreground/70 font-medium text-sm">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
