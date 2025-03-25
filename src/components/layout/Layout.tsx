
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="app-container">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className={`main-content ${isMobile ? "" : "md:pl-64"}`}>
        <main className="page-container">
          {children}
        </main>
      </div>
      
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-surface-25 border-t border-surface-200 px-6 py-3 flex justify-between items-center z-10">
          <MobileNavItem icon="home" href="/" label="Home" active />
          <MobileNavItem icon="bot" href="/ai-mentor" label="AI Mentor" />
          <MobileNavItem icon="dollar-sign" href="/finance" label="Finance" />
          {/* <MobileNavItem icon="shopping-bag" href="/marketplace" label="Market" /> */}
          <MobileNavItem icon="user" href="/profile" label="Profile" />
        </nav>
      )}
    </div>
  );
};

interface MobileNavItemProps {
  icon: string;
  href: string;
  label: string;
  active?: boolean;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ 
  icon, 
  href, 
  label, 
  active = false 
}) => {
  // Import icons dynamically based on icon name
  const iconMap: Record<string, React.ReactNode> = {
    home: <HomeIcon className={active ? "text-primary" : "text-foreground/70"} />,
    bot: <BotIcon className="text-foreground/70" />,
    "dollar-sign": <DollarSignIcon className="text-foreground/70" />,
    "shopping-bag": <ShoppingBagIcon className="text-foreground/70" />,
    user: <UserIcon className="text-foreground/70" />,
  };
  
  return (
    <a 
      href={href} 
      className={`flex flex-col items-center justify-center ${
        active ? "text-primary" : "text-foreground/70"
      }`}
    >
      <div className="w-6 h-6 mb-1">
        {iconMap[icon]}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
};

// Import icons only once at the top level
import { 
  Home as HomeIcon, 
  Bot as BotIcon, 
  DollarSign as DollarSignIcon, 
  ShoppingBag as ShoppingBagIcon, 
  User as UserIcon 
} from "lucide-react";

export default Layout;
