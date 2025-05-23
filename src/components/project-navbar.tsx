"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Figma } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

interface ProjectNavbarProps {
  projectTitle: string
  projectUrl?: string
  figmaUrl?: string
  githubUrl?: string
}

export function ProjectNavbar({ projectTitle, projectUrl, figmaUrl, githubUrl }: ProjectNavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex h-16 items-center justify-between">
        
        {/* Left side - Back to Portfolio */}
        <div className="flex items-center gap-4">
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="hidden md:block h-4 w-px bg-border" />
          <h1 className="hidden md:block font-semibold text-lg truncate max-w-[200px]">
            {projectTitle}
          </h1>
        </div>

        {/* Right side - Project Links & Theme Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Project Links */}
          <div className="flex items-center gap-2">
            {projectUrl && (
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <Link
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Site"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
            
            {figmaUrl && (
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <Link
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Figma Design"
                >
                  <Figma className="h-4 w-4" />
                </Link>
              </Button>
            )}
            
            {githubUrl && (
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub Repository"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* Divider */}
          {(projectUrl || figmaUrl || githubUrl) && (
            <div className="h-4 w-px bg-border" />
          )}
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 