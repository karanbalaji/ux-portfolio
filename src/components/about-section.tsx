"use client"

import Image from "next/image"
import { Download, Code, Layout, Palette, Award } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export function AboutSection() {
  const handleDownload = () => {
    // Simulate download action
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Karan-UX-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 bg-grey-50/50 dark:bg-grey-900/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">About Me</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px]">
            Passionate about creating seamless user experiences through design and code.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed text-grey-700 dark:text-grey-200">
              Hi there! I'm a UX Engineer with over 5 years of experience bridging the gap between design and development. 
              I specialize in creating design systems, interactive prototypes, and implementing pixel-perfect UI components.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-grey-700 dark:text-grey-200">
              My approach combines user-centered design principles with modern front-end technologies to build 
              experiences that are not just beautiful, but also accessible and performant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
              >
                <Code className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Frontend Development</span>
              </HoverBorderGradient>
              
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
              >
                <Layout className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>UI/UX Design</span>
              </HoverBorderGradient>
              
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
              >
                <Palette className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Design Systems</span>
              </HoverBorderGradient>
              
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
              >
                <Award className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Accessibility</span>
              </HoverBorderGradient>
            </div>

            <Button onClick={handleDownload} variant="ghost" className="px-6 gap-2 hover:bg-grey-100 dark:hover:bg-grey-800">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <HoverBorderGradient
              as="div"
              containerClassName="rounded-full"
              className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden bg-grey-100 dark:bg-grey-800 shadow-lg"
            >
              {/* Replace with an actual profile image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-grey-200 to-grey-100 dark:from-grey-700 dark:to-grey-800 text-grey-600 dark:text-grey-400 text-6xl font-bold">
                K
              </div>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  )
} 