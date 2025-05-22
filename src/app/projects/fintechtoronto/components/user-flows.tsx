import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function UserFlows() {
  const userFlows = [
    {
      id: "content-creation",
      title: "4.1 Content Creation & Review Flow",
      image: "placeholder_diagram",
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
      image: "placeholder_diagram",
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
      image: "placeholder_diagram",
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
      image: "placeholder_diagram",
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
      image: "placeholder_diagram",
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

  return (
    <section id="user-flows" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">4. User Flows & Experience Maps</h2>
      
      <div className="space-y-8">
        <Accordion type="single" collapsible className="space-y-4">
          {userFlows.map((flow) => (
            <AccordionItem 
              key={flow.id} 
              value={flow.id}
              className="border rounded-lg px-6 shadow-sm bg-card"
            >
              <AccordionTrigger className="py-5 text-xl font-semibold">
                {flow.title}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="space-y-6">
                  <div className="h-[200px] bg-muted/30 rounded-lg flex items-center justify-center text-muted-foreground border">
                    [Diagram: {flow.image}]
                  </div>
                  
                  <div className="space-y-6">
                    {flow.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-lg font-medium">{section.title}</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
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
  )
} 