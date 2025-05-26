"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { CalMeetingButton } from "@/components/cal-meeting-button"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-16 sm:py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden bg-grey-50/50 dark:bg-grey-900/30">
      <BackgroundBeams className="absolute inset-0 z-0 h-full w-full" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-block rounded-full bg-grey-100 dark:bg-white/15 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-grey-700 dark:text-white/95 border border-grey-200 dark:border-white/30 mb-4 sm:mb-6 shadow-lg">
          A Design Engineer from Toronto
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-grey-900 dark:text-white">
          <span className="block">Hi, I&apos;m Karan</span>
          <span className="block mt-1 sm:mt-2 text-grey-900 dark:text-white">
            <PointerHighlight
              pointerClassName="text-blue-600 dark:text-blue-400"
              rectangleClassName="border-blue-600 dark:border-blue-400"
            >
              A Design Engineer
            </PointerHighlight>
            {" from Toronto"}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-grey-700 dark:text-white max-w-[600px] mb-8 sm:mb-10 leading-relaxed">
          I design and build conversion-driven digital experiences that bridge user needs 
          with business goals through data-driven design and frontend engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <Button
            size="lg"
            onClick={() => handleScroll("projects")}
            className="gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105 px-6 sm:px-8"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <CalMeetingButton />
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("contact")}
            className="gap-2 w-full sm:w-auto border-grey-300 bg-grey-100 text-grey-700 hover:bg-grey-200 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/25 backdrop-blur-sm shadow-lg transition-all duration-200 transform hover:scale-105 px-6 sm:px-8"
          >
            Contact Me <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 