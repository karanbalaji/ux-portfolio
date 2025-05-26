"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

// Enhanced UX design images from Aceternity UI showcase
const uxDesignImages = [
  // Aceternity UI Components - Perfect for UX showcase
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  
  // Mixed with UX-focused Unsplash images
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center", // Design system components
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop&crop=center", // UI components layout
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center", // Design tokens and colors
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&crop=center", // Typography system
  "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=400&fit=crop&crop=center", // User journey mapping
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center", // Wireframes and sketches
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center", // Mobile app interface
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center", // Web application
]

export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-16 sm:py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Enhanced 3D Marquee Background - Full visibility */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={uxDesignImages}
      />
      
      {/* Reduced overlay for better 3D marquee visibility */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/70 dark:bg-black/55" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center relative z-20">
        <div className="inline-block rounded-full bg-white/25 dark:bg-white/15 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/95 border border-white/30 mb-4 sm:mb-6 shadow-lg">
          UX Engineer & Designer
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white">
          <span className="block">Hi, I&apos;m Karan</span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            UX Engineer & Designer
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-[600px] mb-8 sm:mb-10 leading-relaxed">
          I design and build beautiful, responsive, and accessible digital experiences 
          that solve real user problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <Button
            size="lg"
            onClick={() => handleScroll("projects")}
            className="gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105 px-6 sm:px-8"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("contact")}
            className="gap-2 w-full sm:w-auto border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 shadow-lg transition-all duration-200 transform hover:scale-105 px-6 sm:px-8"
          >
            Contact Me <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 