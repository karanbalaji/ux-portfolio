"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface MermaidModalProps {
  isOpen: boolean
  onClose: () => void
  diagram: string
  title: string
  id: string
}

function MermaidModal({ isOpen, onClose, diagram, title, id }: MermaidModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const renderDiagram = async () => {
        try {
          const mermaid = await import('mermaid')
          
          mermaid.default.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
              primaryColor: '#e1f5fe',
              primaryTextColor: '#1a202c',
              primaryBorderColor: '#90cdf4',
              lineColor: '#4a5568',
              secondaryColor: '#f7fafc',
              tertiaryColor: '#edf2f7',
              background: '#ffffff',
              mainBkg: '#ffffff',
              secondBkg: '#f7fafc',
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis'
            }
          })

          if (modalRef.current) {
            modalRef.current.innerHTML = ''
            const { svg } = await mermaid.default.render(`modal-mermaid-${id}`, diagram.trim())
            modalRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering failed:', error)
          if (modalRef.current) {
            modalRef.current.innerHTML = `
              <div class="p-8 text-center text-grey-500">
                <p class="text-lg font-medium mb-2">Diagram could not be rendered</p>
                <p class="text-sm">Please check console for details</p>
              </div>
            `
          }
        }
      }

      renderDiagram()
    }
  }, [isOpen, diagram, id])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-grey-900 rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-grey-200 dark:border-grey-700">
          <h3 className="text-lg font-semibold text-grey-900 dark:text-grey-50">{title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div 
            ref={modalRef}
            className="w-full h-full flex items-center justify-center min-h-[400px]"
          />
        </div>
      </div>
    </div>
  )
}

export default function UserFlows() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    diagram: string
    title: string
    id: string
  }>({
    isOpen: false,
    diagram: '',
    title: '',
    id: ''
  })

  const userFlows = [
    {
      id: "content-creation",
      title: "4.1 Content Creation & Review Flow",
      mermaidDiagram: `
        flowchart TD
          A[User has content idea] --> B[Access dashboard editor]
          B --> C[Create/write content]
          C --> D[Auto-save drafts]
          D --> E[Preview content]
          E --> F[Submit for review]
          F --> G[Status tracking interface]
          G --> H{Review decision}
          H -->|Approved| I[Publication notification]
          H -->|Needs revision| J[Revision request with feedback]
          J --> K[Edit content]
          K --> E
          I --> L[Content goes live]
          L --> M[Community engagement]
          
          style A fill:#e1f5fe
          style I fill:#c8e6c9
          style J fill:#ffecb3
          style L fill:#c8e6c9
      `,
      sections: [
        {
          title: "User Journey",
          content: [
            "From idea conception to published content",
            "Touchpoint 1: Dashboard content editor",
            "Touchpoint 2: Preview and submission form",
            "Touchpoint 3: Status tracking interface",
            "Touchpoint 4: Revision requests (if needed)",
            "Touchpoint 5: Publication notifications"
          ]
        },
        {
          title: "Emotional Journey Mapping",
          content: [
            "Initial excitement when creating content",
            "Potential anxiety during review waiting period",
            "Satisfaction and pride upon publication",
            "Engagement fulfillment from community feedback"
          ]
        },
        {
          title: "UX Considerations",
          content: [
            "Auto-save functionality reduces anxiety about losing work",
            "Clear status indicators maintain transparency",
            "Constructive feedback templates for rejected submissions",
            "Social sharing integration for amplifying published content"
          ]
        }
      ]
    },
    {
      id: "event-discovery",
      title: "4.2 Event Discovery & Registration Flow",
      mermaidDiagram: `
        flowchart TD
          A[User browses platform] --> B[Personalized event recommendations]
          B --> C[Event discovery page]
          C --> D[Filter by interests/location]
          D --> E[View event details]
          E --> F{Interest level}
          F -->|High| G[Check attendee profiles]
          F -->|Low| H[Continue browsing]
          G --> I[Social proof validation]
          I --> J[Registration form]
          J --> K[Calendar integration]
          K --> L[Confirmation & payment]
          L --> M[Email confirmation]
          M --> N[Pre-event reminders]
          N --> O[Event attendance]
          O --> P[Post-event feedback]
          H --> B
          
          style A fill:#e1f5fe
          style G fill:#fff3e0
          style L fill:#c8e6c9
          style O fill:#c8e6c9
      `,
      sections: [
        {
          title: "User Journey",
          content: [
            "From discovery to attendance",
            "Touchpoint 1: Personalized event recommendations",
            "Touchpoint 2: Detailed event page with social proof",
            "Touchpoint 3: Streamlined registration form",
            "Touchpoint 4: Calendar integration",
            "Touchpoint 5: Pre-event reminders and materials"
          ]
        },
        {
          title: "Emotional Journey Mapping",
          content: [
            "Curiosity during browsing phase",
            "Decision-making considerations (time, value, logistics)",
            "Confirmation satisfaction after registration",
            "Anticipation building through reminders",
            "Post-event reflection and feedback"
          ]
        },
        {
          title: "UX Considerations",
          content: [
            "Location-based recommendations reduce decision fatigue",
            "Transparent attendee information builds social proof",
            "One-click calendar integration simplifies planning",
            "Smart reminders with contextual information enhance experience"
          ]
        }
      ]
    },
    {
      id: "newsletter-subscription",
      title: "4.3 Newsletter Subscription Flow",
      mermaidDiagram: `
        flowchart TD
          A[User visits platform] --> B{First-time visitor?}
          B -->|Yes| C[Newsletter prompt banner]
          B -->|No| D[Account preferences]
          C --> E[Minimalist signup form]
          D --> E
          E --> F[Email validation]
          F --> G[Preference selection]
          G --> H[Double opt-in email]
          H --> I[Confirmation click]
          I --> J[Welcome sequence]
          J --> K[Personalized content delivery]
          K --> L[Engagement tracking]
          L --> M{User engagement}
          M -->|High| N[Maintain frequency]
          M -->|Low| O[Adjust preferences]
          O --> P[Re-engagement campaign]
          
          style A fill:#e1f5fe
          style E fill:#fff3e0
          style I fill:#c8e6c9
          style K fill:#c8e6c9
      `,
      sections: [
        {
          title: "Implementation Details",
          content: [
            "Progressive disclosure of preference options",
            "Seamless database integration (Supabase + Novu)",
            "Double opt-in process for compliance",
            "Preference management center"
          ]
        },
        {
          title: "UX Considerations",
          content: [
            "Minimalist initial form to reduce friction",
            "Clear expectation setting (frequency, content types)",
            "Immediate confirmation with next steps",
            "Easy unsubscribe process"
          ]
        }
      ]
    },
    {
      id: "admin-moderation",
      title: "4.4 Admin Moderation Flow",
      mermaidDiagram: `
        flowchart TD
          A[Content submitted] --> B[Automated pre-screening]
          B --> C{ML content check}
          C -->|Pass| D[Admin queue]
          C -->|Flag| E[Priority review queue]
          D --> F[Admin dashboard]
          E --> F
          F --> G[Batch review interface]
          G --> H[Content preview]
          H --> I{Review decision}
          I -->|Approve| J[Publish content]
          I -->|Reject| K[Feedback template]
          I -->|Edit needed| L[Revision request]
          J --> M[Notify submitter]
          K --> N[Rejection notification]
          L --> O[Edit suggestions]
          O --> P[Return to submitter]
          M --> Q[Analytics tracking]
          N --> Q
          
          style A fill:#e1f5fe
          style C fill:#fff3e0
          style J fill:#c8e6c9
          style K fill:#ffcdd2
          style L fill:#ffecb3
      `,
      sections: [
        {
          title: "User Journey",
          content: [
            "From submission review to decision",
            "Touchpoint 1: Unified dashboard with submission queue",
            "Touchpoint 2: Content preview with context",
            "Touchpoint 3: Review tools and templates",
            "Touchpoint 4: Publishing controls",
            "Touchpoint 5: Analytics and insights"
          ]
        },
        {
          title: "UX Considerations",
          content: [
            "Batch processing capabilities for efficiency",
            "Consistent evaluation criteria templates",
            "Integrated communication with submitters",
            "Version history and audit trails"
          ]
        }
      ]
    },
    {
      id: "user-onboarding",
      title: "4.5 User Onboarding Flow",
      mermaidDiagram: `
        flowchart TD
          A[Landing page visit] --> B{Authentication choice}
          B -->|LinkedIn| C[OAuth LinkedIn]
          B -->|Email| D[Email signup]
          B -->|Magic link| E[Email magic link]
          
          C --> F[Auto-fill profile data]
          D --> G[Manual profile entry]
          E --> G
          
          F --> H[Step 1: Core Profile]
          G --> H
          H --> I[Name, photo, bio, interests]
          I --> J[Progress: 33%]
          J --> K[Step 2: Professional Info]
          K --> L[Company search autocomplete]
          L --> M[Sector selection]
          M --> N[Progress: 66%]
          N --> O[Step 3: Community Connections]
          O --> P[Search existing communities]
          P --> Q[Algorithmic recommendations]
          Q --> R[Progress: 100%]
          R --> S[Welcome dashboard]
          S --> T[Guided feature tour]
          T --> U[First content recommendation]
          
          style A fill:#e1f5fe
          style H fill:#fff3e0
          style K fill:#fff3e0
          style O fill:#fff3e0
          style S fill:#c8e6c9
      `,
      sections: [
        {
          title: "Overview",
          content: [
            "Our research indicated that lengthy signup processes result in 67% abandonment rates for fintech platforms (Forrester, 2024). To address this, we designed a streamlined, value-forward onboarding flow."
          ]
        },
        {
          title: "Authentication Options",
          content: [
            "LinkedIn Integration: One-click signup with automatic profile data import (photo, title, work history)",
            "Email/Password: Traditional signup with progressive disclosure",
            "Magic Link: Passwordless authentication option"
          ]
        },
        {
          title: "3-Step Progressive Onboarding",
          content: [
            "Step 1: Core Profile - Name, username, profile photo (pre-filled from LinkedIn when available), brief bio/tagline, professional interests selection",
            "Step 2: Professional Affiliation - Company search with autocomplete (database of 5,000+ fintech companies), company type/sector selection, option to create new company listing, independent professional designation option",
            "Step 3: Community Connections - Search-based community discovery, algorithmic community recommendations, option to create new community, connection to existing networks"
          ]
        },
        {
          title: "UX Considerations",
          content: [
            "Progress visualization (step indicators + completion percentage)",
            "Option to skip non-essential steps with later completion prompts",
            "Contextual help tooltips at potential friction points",
            "Value demonstration between steps (e.g., \"Now you'll be able to...\")",
            "Immediate access to core functionality after Step 1 completion"
          ]
        },
        {
          title: "Results",
          content: [
            "User research showed this optimized flow increased completion rates by an estimated 34% compared to industry benchmarks, with 72% of users completing all three steps during initial signup."
          ]
        }
      ]
    }
  ]

  const MermaidDiagram = ({ diagram, id }: { diagram: string; id: string }) => {
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      let isMounted = true
      
      const renderDiagram = async () => {
        if (!isMounted) return

        setIsLoading(true)
        setError(null)

        try {
          const mermaid = await import('mermaid')
          
          if (!isMounted) return
          
          // Initialize mermaid with fresh config
          mermaid.default.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
              primaryColor: '#e1f5fe',
              primaryTextColor: '#1a202c',
              primaryBorderColor: '#90cdf4',
              lineColor: '#4a5568',
              secondaryColor: '#f7fafc',
              tertiaryColor: '#edf2f7',
              background: '#ffffff',
              mainBkg: '#ffffff',
              secondBkg: '#f7fafc',
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis'
            }
          })

          if (!isMounted) return

          // Render to string without DOM manipulation
          const uniqueId = `mermaid-${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          const result = await mermaid.default.render(uniqueId, diagram.trim())
          
          if (isMounted) {
            setSvgContent(result.svg)
            setIsLoading(false)
          }
          
        } catch (err) {
          console.error(`Mermaid rendering failed for ${id}:`, err)
          
          if (isMounted) {
            setError(err instanceof Error ? err.message : 'Rendering failed')
            setIsLoading(false)
          }
        }
      }

      const timer = setTimeout(renderDiagram, 100)
      
      return () => {
        isMounted = false
        clearTimeout(timer)
      }
    }, [diagram, id])

    return (
      <div className="relative" data-flow-id={id}>
        <div className="w-full overflow-x-auto">
          <div className="bg-white dark:bg-grey-900 p-4 rounded-lg border border-tertiary/20 min-h-[300px] flex items-center justify-center">
            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tertiary mx-auto mb-2"></div>
                <p className="text-sm text-grey-500">Loading diagram...</p>
              </div>
            )}
            
            {!isLoading && error && (
              <div className="w-full p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Diagram Preview Unavailable</h4>
                  <p className="text-sm text-yellow-600 dark:text-yellow-300">This diagram can be viewed in fullscreen mode</p>
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setModalState({
                      isOpen: true,
                      diagram,
                      title: userFlows.find(f => f.id === id)?.title || '',
                      id
                    })}
                    className="bg-yellow-600 text-white hover:bg-yellow-700 border-yellow-600"
                  >
                    View Full Diagram
                  </Button>
                </div>
              </div>
            )}
            
            {!isLoading && !error && svgContent && (
              <div 
                className="w-full mermaid-svg-container"
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            )}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setModalState({
              isOpen: true,
              diagram,
              title: userFlows.find(f => f.id === id)?.title || '',
              id
            })}
            className="view-full-btn bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm border border-tertiary/20 hover:bg-white dark:hover:bg-grey-800"
          >
            <Maximize2 className="h-4 w-4 mr-1" />
            View Full
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <section id="user-flows" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">4. User Flows & Experience Maps</h2>
        
        <div className="space-y-8">
          <Accordion type="single" collapsible className="space-y-4">
            {userFlows.map((flow) => (
              <AccordionItem 
                key={flow.id} 
                value={flow.id}
                className="border border-tertiary/20 rounded-lg px-6 shadow-sm bg-card"
              >
                <AccordionTrigger className="py-5 text-xl font-semibold text-grey-900 dark:text-grey-50">
                  {flow.title}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <div className="space-y-6">
                    <div className="relative">
                      <MermaidDiagram diagram={flow.mermaidDiagram} id={flow.id} />
                    </div>
                    
                    <div className="space-y-6">
                      {flow.sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-lg font-medium text-grey-900 dark:text-grey-50">{section.title}</h4>
                          <ul className="list-disc pl-5 space-y-2 text-grey-600 dark:text-grey-50">
                            {section.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <MermaidModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        diagram={modalState.diagram}
        title={modalState.title}
        id={modalState.id}
      />
    </>
  )
} 
