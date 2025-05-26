"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Information Architecture Component with Multiple Visual Representations
function InformationArchitecture() {
  const [activeView, setActiveView] = useState<'overview' | 'detailed'>('overview')

  // Simplified overview diagram
  const OverviewDiagram = () => {
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)

    const overviewDiagram = `
graph TD
    A[FintechToronto.com] --> B[Homepage]
    A --> C[Content Hub]
    A --> D[Events]
    A --> E[Community]
    A --> F[Resources]
    A --> G[About]
    A --> H[User Dashboard]
    A --> I[Admin Panel]
    
    style A fill:#1a365d,stroke:#2b77ad,stroke-width:3px,color:#fff
    style B fill:#2563eb,stroke:#1e40af,stroke-width:2px,color:#fff
    style C fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style D fill:#dc2626,stroke:#b91c1c,stroke-width:2px,color:#fff
    style E fill:#7c3aed,stroke:#6d28d9,stroke-width:2px,color:#fff
    style F fill:#ea580c,stroke:#c2410c,stroke-width:2px,color:#fff
    style G fill:#4b5563,stroke:#374151,stroke-width:2px,color:#fff
    style H fill:#0891b2,stroke:#0e7490,stroke-width:2px,color:#fff
    style I fill:#be185d,stroke:#9d174d,stroke-width:2px,color:#fff
    `

    useEffect(() => {
      let isMounted = true
      
      const renderDiagram = async () => {
        if (!isMounted) return

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

          const uniqueId = `ia-overview-${Date.now()}`
          const result = await mermaid.default.render(uniqueId, overviewDiagram.trim())
          
          if (isMounted) {
            setSvgContent(result.svg)
            setIsLoading(false)
          }
          
        } catch (err) {
          console.error('Overview diagram render failed:', err)
          setIsLoading(false)
        }
      }

      const timer = setTimeout(renderDiagram, 100)
      
      return () => {
        isMounted = false
        clearTimeout(timer)
      }
    }, [overviewDiagram])

    return (
      <div className="bg-white dark:bg-grey-900 p-6 rounded-lg border border-tertiary/20 min-h-[300px] flex items-center justify-center">
        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tertiary mx-auto mb-2"></div>
            <p className="text-sm text-grey-500">Loading overview...</p>
          </div>
        ) : svgContent ? (
          <div 
            className="w-full mermaid-svg-container"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <p className="text-grey-500">Overview diagram unavailable</p>
        )}
      </div>
    )
  }

  // Detailed tree structure as cards
  const DetailedStructure = () => {
    const sections = [
      {
        name: 'Homepage',
        color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
        items: ['Hero Section', 'Featured Content', 'Upcoming Events', 'Community Highlights', 'Newsletter Signup']
      },
      {
        name: 'Content Hub',
        color: 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800',
        items: ['All Articles', 'Categories', 'Featured Stories', 'Submit Content'],
        subcategories: ['News & Updates', 'Industry Analysis', 'Company Spotlights', 'Product Launches', 'Research Reports', 'Thought Leadership']
      },
      {
        name: 'Events',
        color: 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800',
        items: ['Event Calendar', 'Event Categories', 'Past Events', 'Submit Event'],
        subcategories: ['Networking Meetups', 'Industry Conferences', 'Workshops & Training', 'Panel Discussions', 'Product Demos']
      },
      {
        name: 'Community',
        color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800',
        items: ['Member Directory', 'Organizations', 'Discussion Forums', 'User Profiles'],
        subcategories: ['Startups', 'Financial Institutions', 'Government Agencies', 'Investment Firms', 'Service Providers']
      },
      {
        name: 'Resources',
        color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800',
        items: ['Industry Reports', 'Tool Recommendations', 'Career Resources', 'Regulatory Updates', 'Market Data']
      },
      {
        name: 'User Dashboard',
        color: 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-800',
        items: ['My Profile', 'My Content', 'Saved Items', 'Event History', 'Preferences', 'Notifications']
      }
    ]

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${section.color}`}>
              <h5 className="font-semibold mb-3 text-foreground">{section.name}</h5>
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">• {item}</li>
                ))}
              </ul>
              {section.subcategories && (
                <div className="mt-3 pt-3 border-t border-current/20">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Categories:</p>
                  <div className="flex flex-wrap gap-1">
                    {section.subcategories.map((subcat, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-white/60 dark:bg-grey-800/60 rounded">
                        {subcat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="my-8">
      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={activeView === 'overview' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveView('overview')}
        >
          Site Overview
        </Button>
        <Button
          variant={activeView === 'detailed' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveView('detailed')}
        >
          Detailed Structure
        </Button>
      </div>

      {/* Content based on active view */}
      {activeView === 'overview' ? <OverviewDiagram /> : <DetailedStructure />}

      {/* Architecture Summary */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h5 className="font-medium text-foreground mb-4">Information Architecture Summary</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h6 className="font-medium text-foreground mb-2">Structure</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li>• 8 main sections</li>
              <li>• 3-level hierarchy maximum</li>
              <li>• Cross-cutting user areas</li>
              <li>• Scalable organization</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-foreground mb-2">Navigation</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Clear category boundaries</li>
              <li>• Consistent naming conventions</li>
              <li>• Breadcrumb support</li>
              <li>• Search accessibility</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-foreground mb-2">Content Strategy</h6>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Topic-based organization</li>
              <li>• User-generated content flow</li>
              <li>• Time-sensitive prioritization</li>
              <li>• Cross-category tagging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DesignThinking() {
  return (
    <section id="design-thinking" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">3. Design Thinking Process</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.1 Empathize & Define</h3>
          <div className="text-muted-foreground space-y-4">
            <p>Our research methodology combined:</p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">In-depth interviews:</span> 42 stakeholders across fintech startups, financial institutions, government agencies, and venture capital</li>
              <li><span className="font-medium">Contextual inquiry:</span> Observing users navigate existing information sources</li>
              <li><span className="font-medium">Competitive analysis:</span> Evaluating 14 fintech community platforms globally</li>
              <li><span className="font-medium">Surveys:</span> 215 responses from Toronto fintech community members</li>
              <li><span className="font-medium">Heuristic evaluation:</span> Analysis of existing solutions against Nielsen&apos;s usability heuristics</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Insights:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Users often missed relevant events due to information being scattered across platforms</li>
                <li>Content discovery was highly inefficient with poor categorization and search functionality</li>
                <li>Community members felt disconnected despite geographic proximity</li>
                <li>Mobile experiences were consistently poor across existing solutions</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Jobs-to-be-Done Framework:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>&ldquo;Help me stay informed about local fintech developments without excessive research time&rdquo;</li>
                <li>&ldquo;Allow me to share my expertise and build my professional profile&rdquo;</li>
                <li>&ldquo;Connect me with relevant community members and opportunities&rdquo;</li>
                <li>&ldquo;Keep me updated on events that match my specific interests&rdquo;</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.2 Ideate</h3>
          <div className="text-muted-foreground space-y-4">
            <p>
              We conducted 3 structured ideation workshops with cross-functional teams using techniques including:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Crazy Eights:</span> Rapid sketching of potential solutions</li>
              <li><span className="font-medium">How Might We:</span> Reframing problems as opportunities</li>
              <li><span className="font-medium">Impact/Effort Matrix:</span> Prioritizing features based on user value and implementation complexity</li>
              <li><span className="font-medium">Card Sorting:</span> Organizing content categories and information architecture</li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-foreground">Information Architecture</h4>
              <p className="mb-4">
                Based on our card sorting sessions with 24 participants and tree testing with 156 users, we developed 
                a hierarchical information architecture that balances content discoverability with mental model alignment:
              </p>
              
              <InformationArchitecture />
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Solutions:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Unified Content Hub:</span> Centralized, categorized repository of news, insights, and resources</li>
                <li><span className="font-medium">Community Profiles:</span> Professional profiles highlighting expertise and contributions</li>
                <li><span className="font-medium">Smart Event Calendar:</span> Personalized event recommendations based on interests</li>
                <li><span className="font-medium">Content Submission System:</span> Streamlined process for community contributions</li>
                <li><span className="font-medium">Notification Engine:</span> Customizable alerts across multiple channels</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.3 Prototype & Test</h3>
          <div className="text-muted-foreground space-y-4">
            <p>We created progressive fidelity prototypes:</p>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li><span className="font-medium">Low-fidelity wireframes:</span> Paper sketches for initial concept validation</li>
              <li><span className="font-medium">Mid-fidelity wireframes:</span> Detailed user flows in Figma</li>
              <li><span className="font-medium">High-fidelity interactive prototype:</span> Functional prototype with visual design</li>
            </ol>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Testing Methodology:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>5 rounds of usability testing with 8-10 participants per round</li>
                <li>A/B tests of critical flows (content submission, event registration)</li>
                <li>Accessibility testing with screen readers and keyboard navigation</li>
                <li>Performance testing on various devices and connection speeds</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Findings & Iterations:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Initial content submission flow was too complex; simplified from 7 to 4 steps</li>
                <li>Event registration abandonment decreased 47% after redesigning the confirmation flow</li>
                <li>Newsletter signup conversion improved 32% after implementing social proof elements</li>
                <li>Admin moderation interface required significant simplification after testing</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.4 Implement</h3>
          <div className="text-muted-foreground space-y-4">
            <p>Our implementation roadmap followed a phased approach:</p>
            
            <div className="rounded-lg border overflow-hidden my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Phase</TableHead>
                    <TableHead>Focus</TableHead>
                    <TableHead>Key Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">1: Foundation</TableCell>
                    <TableCell>Core platform, content management</TableCell>
                    <TableCell>Content hub, user profiles, admin panel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2: Community</TableCell>
                    <TableCell>Engagement features, notifications</TableCell>
                    <TableCell>Comments, likes, personalized feeds</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">3: Events</TableCell>
                    <TableCell>Event management, registration</TableCell>
                    <TableCell>Calendar, registration, reminders</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">4: Growth</TableCell>
                    <TableCell>Analytics, optimization</TableCell>
                    <TableCell>Dashboard, A/B testing framework</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Development Approach:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Component-driven development with storybook documentation</li>
                <li>Weekly user testing of new features</li>
                <li>Continuous integration and deployment</li>
                <li>Feature flagging for gradual rollouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
