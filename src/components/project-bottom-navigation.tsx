"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, Menu, ArrowLeft, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ProjectBottomNavigationProps {
  tocItems: Array<{
    id: string
    label: string
    subsections?: Array<{
      id: string
      label: string
    }>
  }>
  projectUrl?: string
}

export function ProjectBottomNavigation({ tocItems, projectUrl }: ProjectBottomNavigationProps) {
  const [activeSection, setActiveSection] = useState("")
  const [showToc, setShowToc] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.flatMap(item => [
        item.id,
        ...(item.subsections?.map(sub => sub.id) || [])
      ])
      
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [tocItems])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setShowToc(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <>
      {/* Table of Contents Overlay */}
      {showToc && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setShowToc(false)}>
          <div className="fixed bottom-16 left-0 right-0 bg-background border-t border-border max-h-[60vh] overflow-y-auto">
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                Table of Contents
              </h3>
              <div className="space-y-1">
                {tocItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </button>
                    {item.subsections && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => handleNavClick(subsection.id)}
                            className={cn(
                              "w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors",
                              activeSection === subsection.id
                                ? "bg-primary/20 text-primary font-medium"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            {subsection.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          
          {/* Back to Portfolio */}
          <Link 
            href="/#projects"
            className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px] text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <ArrowLeft className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Back</span>
          </Link>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px] text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <ChevronUp className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Top</span>
          </button>

          {/* Table of Contents */}
          <button
            onClick={() => setShowToc(!showToc)}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px]",
              showToc
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <Menu className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Menu</span>
          </button>

          {/* Live Site */}
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px] text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <ExternalLink className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Live</span>
            </Link>
          )}

          {/* Scroll to Bottom */}
          <button
            onClick={scrollToBottom}
            className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px] text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <ChevronDown className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Bottom</span>
          </button>

        </div>
      </nav>
    </>
  )
} 