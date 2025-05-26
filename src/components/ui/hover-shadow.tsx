"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface HoverShadowProps {
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  shadowIntensity?: "light" | "medium" | "strong";
}

export function HoverShadow<T extends React.ElementType = "button">({
  children,
  containerClassName,
  className,
  as,
  shadowIntensity = "medium",
  ...props
}: HoverShadowProps & 
  Omit<React.ComponentPropsWithoutRef<T>, keyof HoverShadowProps>) {
  
  const Tag = as || "button";
  
  const shadowVariants = {
    light: {
      base: "shadow-sm",
      hover: "hover:shadow-md",
      dark: "dark:shadow-grey-900/20"
    },
    medium: {
      base: "shadow-md",
      hover: "hover:shadow-lg hover:shadow-grey-900/10 dark:hover:shadow-grey-900/30",
      dark: "dark:shadow-grey-900/30"
    },
    strong: {
      base: "shadow-lg",
      hover: "hover:shadow-xl hover:shadow-grey-900/15 dark:hover:shadow-grey-900/40",
      dark: "dark:shadow-grey-900/40"
    }
  };

  const selectedShadow = shadowVariants[shadowIntensity];

  return (
    <Tag
      className={cn(
        "transition-all duration-300 ease-out",
        "transform hover:-translate-y-1",
        selectedShadow.base,
        selectedShadow.hover,
        selectedShadow.dark,
        "border border-grey-200/50 dark:border-grey-700/50",
        "hover:border-grey-300/60 dark:hover:border-grey-600/60",
        containerClassName
      )}
      {...props}
    >
      <div className={cn(className)}>
        {children}
      </div>
    </Tag>
  );
} 