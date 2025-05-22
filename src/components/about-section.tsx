"use client"

import Image from "next/image"
import { Code, Layout, Palette, Award } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const handleDownload = () => {
    // In a real app, this would download a resume file
    alert('Resume download would happen here')
  }

  return (
    <section id="about" className="py-20 bg-muted/20 backdrop-blur-sm border-t border-b border-muted">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
            A passionate UX Engineer with a focus on creating user-centered designs and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed">
              Hi there! I'm a UX Engineer with over 5 years of experience bridging the gap between design and development. 
              I specialize in creating design systems, interactive prototypes, and implementing pixel-perfect UI components.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              My approach combines user-centered design principles with modern front-end technologies to build 
              experiences that are not just beautiful, but also accessible and performant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-2 rounded-md bg-muted/40 backdrop-blur-sm">
                <Code className="h-5 w-5 text-primary" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-muted/40 backdrop-blur-sm">
                <Layout className="h-5 w-5 text-primary" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-muted/40 backdrop-blur-sm">
                <Palette className="h-5 w-5 text-primary" />
                <span>Design Systems</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-muted/40 backdrop-blur-sm">
                <Award className="h-5 w-5 text-primary" />
                <span>Accessibility</span>
              </div>
            </div>

            <Button onClick={handleDownload} className="px-6">
              Download Resume
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/30 bg-muted/30 backdrop-blur-sm">
              {/* Replace with an actual profile image */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-6xl font-bold">
                K
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 