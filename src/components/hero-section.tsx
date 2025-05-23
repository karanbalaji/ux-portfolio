"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Background beams effect */}
      <BackgroundBeams className="opacity-40" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-block rounded-full bg-grey-100 dark:bg-grey-800 backdrop-blur-sm px-4 py-2 text-sm text-grey-700 dark:text-grey-300 border border-grey-200 dark:border-grey-700 mb-6">
          UX Engineer & Designer
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="block text-grey-900 dark:text-grey-50">Hi, I'm Karan</span>
          <span className="text-primary block mt-2">UX Engineer & Designer</span>
        </h1>
        <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px] mb-10">
          I design and build beautiful, responsive, and accessible digital experiences 
          that solve real user problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button
            size="lg"
            variant="tertiary"
            onClick={() => handleScroll("projects")}
            className="gap-2 w-full sm:w-auto"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("contact")}
            className="gap-2 w-full sm:w-auto backdrop-blur-sm"
          >
            Contact Me <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 