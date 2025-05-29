"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#blog", label: "Blog", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("#home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      // Check if user has scrolled past the about section
      const aboutElement = document.getElementById("about")
      if (aboutElement) {
        const aboutTop = aboutElement.offsetTop
        // Show navigation when user scrolls to the about section
        setIsVisible(scrollPosition >= aboutTop)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border md:hidden transition-transform duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.href
          
          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-[60px]",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
} 