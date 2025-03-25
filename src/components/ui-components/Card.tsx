
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "glass" | "subtle";
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  variant = "default",
  hoverEffect = false,
}) => {
  const baseClasses = "rounded-lg overflow-hidden transition-all duration-200";
  
  const variantClasses = {
    default: "bg-white border border-surface-200 shadow-sm",
    glass: "glass-card",
    subtle: "bg-surface-50 border border-surface-100",
  };
  
  const hoverClasses = hoverEffect
    ? "hover:shadow-md hover:translate-y-[-2px]"
    : "";
  
  const clickableClasses = onClick
    ? "cursor-pointer"
    : "";
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-b border-surface-100", className)}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return <div className={cn("px-6 py-4", className)}>{children}</div>;
};

export const CardFooter: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-t border-surface-100", className)}>
      {children}
    </div>
  );
};

export default Card;
