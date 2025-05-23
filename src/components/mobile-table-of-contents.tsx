"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TocItem {
  id: string
  label: string
  subsections?: Array<{
    id: string
    label: string
  }>
}

interface MobileTableOfContentsProps {
  items: TocItem[]
  activeSection?: string
}

export function MobileTableOfContents({ items, activeSection }: MobileTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      
      setIsOpen(false) // Close the menu after navigation
    }
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  return (
    <div className="lg:hidden sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border mb-8">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Simple collapsible without external dependency */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between py-4 text-left font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              Case Study Navigation
            </span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          
          {isOpen && (
            <div className="pb-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="space-y-1">
                    {/* Main Section */}
                    <div className="flex items-center">
                      {item.subsections && item.subsections.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSection(item.id)}
                          className="h-6 w-6 p-0 mr-2 flex-shrink-0"
                        >
                          {expandedSections.has(item.id) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                        </Button>
                      )}
                      <button
                        onClick={() => handleScrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === item.id
                            ? 'bg-primary/15 text-primary font-semibold border-l-2 border-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {item.label}
                      </button>
                    </div>
                    
                    {/* Subsections */}
                    {expandedSections.has(item.id) && item.subsections && (
                      <div className="ml-8 space-y-1">
                        {item.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => handleScrollToSection(subsection.id)}
                            className={`w-full text-left px-3 py-1 rounded-md text-xs transition-colors ${
                              activeSection === subsection.id
                                ? 'bg-primary/20 text-primary font-semibold border-l-2 border-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                          >
                            {subsection.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Progress indicator for mobile */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Reading Progress</span>
                  <span>
                    {Math.round(
                      (items.flatMap(item => [item, ...(item.subsections || [])])
                        .findIndex(item => item.id === activeSection) + 1) / 
                      items.flatMap(item => [item, ...(item.subsections || [])]).length * 100
                    )}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(
                        (items.flatMap(item => [item, ...(item.subsections || [])])
                          .findIndex(item => item.id === activeSection) + 1) / 
                        items.flatMap(item => [item, ...(item.subsections || [])]).length
                      ) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 