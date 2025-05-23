"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tocItems = [
  { 
    id: "executive-summary", 
    label: "Executive Summary",
    subsections: [
      { id: "key-metrics", label: "Key Metrics" },
      { id: "impact-overview", label: "Impact Overview" }
    ]
  },
  { 
    id: "problem-statement", 
    label: "Problem Statement",
    subsections: [
      { id: "market-analysis", label: "Market Analysis" },
      { id: "user-personas", label: "User Personas" },
      { id: "pain-points", label: "Pain Points" }
    ]
  },
  { 
    id: "design-thinking", 
    label: "Design Process",
    subsections: [
      { id: "empathize-define", label: "Empathize & Define" },
      { id: "ideate", label: "Ideate" },
      { id: "prototype-test", label: "Prototype & Test" },
      { id: "implement", label: "Implement" }
    ]
  },
  { 
    id: "user-flows", 
    label: "User Flows",
    subsections: [
      { id: "content-creation", label: "Content Creation" },
      { id: "event-discovery", label: "Event Discovery" },
      { id: "user-onboarding", label: "User Onboarding" }
    ]
  },
  { 
    id: "features", 
    label: "Features & UX",
    subsections: [
      { id: "ui-patterns", label: "UI Patterns" },
      { id: "accessibility", label: "Accessibility" },
      { id: "mobile-design", label: "Mobile Design" }
    ]
  },
  { 
    id: "ux-principles", 
    label: "UX Principles",
    subsections: [
      { id: "usability-heuristics", label: "Usability Heuristics" },
      { id: "behavioral-economics", label: "Behavioral Economics" }
    ]
  },
  { 
    id: "social-proof", 
    label: "Social Proof",
    subsections: [
      { id: "event-success", label: "Fintech + AI Meetup" },
      { id: "community-impact", label: "Community Impact Metrics" }
    ]
  },
  { 
    id: "tech-stack", 
    label: "Tech Stack",
    subsections: [
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "infrastructure", label: "Infrastructure" }
    ]
  },
]

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.flatMap(item => [
        { id: item.id, element: document.getElementById(item.id), type: 'main' as const },
        ...item.subsections.map(sub => ({ 
          id: sub.id, 
          element: document.getElementById(sub.id), 
          type: 'sub' as const,
          parentId: item.id 
        }))
      ]).filter(section => section.element)

      // Find the section that's currently in view (with better detection)
      let current = null
      
      // First, check if any section is near the top of the viewport
      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 60) {
          current = section
          break
        }
      }
      
      // If no section is in the ideal zone, find the closest one above the fold
      if (!current) {
        const sectionsAboveFold = sections.filter(section => {
          const rect = section.element!.getBoundingClientRect()
          return rect.top <= 120
        })
        
        if (sectionsAboveFold.length > 0) {
          current = sectionsAboveFold[sectionsAboveFold.length - 1]
        }
      }

      // Only highlight, no auto-expansion
      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
      <h3 className="text-lg font-semibold mb-4 text-grey-900 dark:text-grey-50">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              {/* Main Section */}
              <div className="flex items-center">
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
                <button
                  onClick={() => handleScrollToSection(item.id)}
                  className={`text-left flex-1 text-sm transition-colors hover:text-tertiary ${
                    activeSection === item.id 
                      ? 'text-tertiary font-semibold bg-tertiary/10 px-2 py-1 rounded' 
                      : 'text-grey-700 dark:text-grey-300'
                  }`}
                >
                  {item.label}
                </button>
              </div>
              
              {/* Subsections */}
              {expandedSections.has(item.id) && item.subsections && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <button
                        onClick={() => handleScrollToSection(subsection.id)}
                        className={`text-left w-full text-xs transition-colors hover:text-tertiary py-1 px-2 rounded ${
                          activeSection === subsection.id 
                            ? 'text-tertiary font-semibold bg-tertiary/15 border-l-2 border-tertiary' 
                            : 'text-grey-600 dark:text-grey-400 hover:bg-grey-100 dark:hover:bg-grey-700'
                        }`}
                      >
                        {subsection.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-grey-200 dark:border-grey-600">
        <div className="flex justify-between text-xs text-grey-500 mb-2">
          <span>Progress</span>
          <span>
            {Math.round(
              (tocItems.flatMap(item => [item, ...item.subsections])
                .findIndex(item => item.id === activeSection) + 1) / 
              tocItems.flatMap(item => [item, ...item.subsections]).length * 100
            )}%
          </span>
        </div>
        <div className="w-full bg-grey-200 dark:bg-grey-700 rounded-full h-2">
          <div 
            className="bg-tertiary h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(
                (tocItems.flatMap(item => [item, ...item.subsections])
                  .findIndex(item => item.id === activeSection) + 1) / 
                tocItems.flatMap(item => [item, ...item.subsections]).length
              ) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  )
} 