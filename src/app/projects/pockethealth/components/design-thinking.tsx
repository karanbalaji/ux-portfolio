"use client"

import { Search, TestTube, Repeat, Code, BarChart3, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"



export default function DesignThinking() {
  const phases = [
    {
      icon: Search,
      title: "Research & Insights",
      description: "User research, analytics analysis, and competitive benchmarking",
      activities: [
        "Hotjar heatmap analysis of 300+ pages",
        "User interview sessions with healthcare professionals",
        "Conversion funnel analysis using Google Analytics",
        "Competitive analysis of healthcare platforms"
      ],
      outcomes: [
        "Identified 3 key conversion bottlenecks",
        "Mapped user journey pain points",
        "Established baseline metrics"
      ],
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: TestTube,
      title: "A/B Testing Strategy",
      description: "Systematic experimentation framework using Google Optimize",
      activities: [
        "Multivariate test design for landing pages",
        "Redirect tests for user flow optimization",
        "Statistical significance planning",
        "Test prioritization matrix creation"
      ],
      outcomes: [
        "17% monthly conversion rate improvement",
        "6-14% increase across test variants",
        "Data-driven decision framework"
      ],
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: Repeat,
      title: "Iterative Design",
      description: "Rapid prototyping and testing cycles in Figma",
      activities: [
        "Wireframe to high-fidelity prototype pipeline",
        "Mobile-first responsive design system",
        "Cross-functional feedback integration",
        "Design handoff optimization"
      ],
      outcomes: [
        "Reduced design iterations from 4-5 to 1-2",
        "Timeline reduction from weeks to days",
        "100+ reusable component library"
      ],
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Code,
      title: "Implementation",
      description: "Performance optimization and analytics integration",
      activities: [
        "JavaScript deferring for performance",
        "Google Tag Manager implementation",
        "Amplitude analytics setup",
        "SEO optimization using Ahrefs"
      ],
      outcomes: [
        "30% Google Lighthouse score improvement",
        "55% page speed increase",
        "92% SEO score achievement"
      ],
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    }
  ]

  const tools = [
    {
      category: "Research & Analytics",
      items: [
        { name: "Hotjar", purpose: "Heatmaps and user session recordings" },
        { name: "Google Analytics", purpose: "Conversion funnel analysis" },
        { name: "Amplitude", purpose: "Advanced user behavior tracking" },
        { name: "Ahrefs", purpose: "SEO analysis and optimization" }
      ]
    },
    {
      category: "Testing & Optimization",
      items: [
        { name: "Google Optimize", purpose: "A/B and multivariate testing" },
        { name: "Google Tag Manager", purpose: "Event tracking and analytics" },
        { name: "Figma", purpose: "Design prototyping and collaboration" },
        { name: "Notion", purpose: "Kanban project management" }
      ]
    }
  ]

  return (
    <section id="design-thinking" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            Design Process
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            A systematic approach to design engineering combining patient-centered research, mobile-first optimization, 
            and outcome-driven experimentation to improve healthcare accessibility and user experience.
          </p>
        </div>

        <div id="research-insights" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Design Engineering Methodology
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon
              return (
                <HoverShadow
                  key={index}
                  as="div"
                  containerClassName="rounded-xl"
                  className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                  shadowIntensity="medium"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${phase.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                          {phase.title}
                        </h4>
                        <p className="text-sm text-grey-600 dark:text-white">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-grey-900 dark:text-grey-50 mb-2">
                          Key Activities
                        </h5>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-grey-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-grey-900 dark:text-grey-50 mb-2">
                          Outcomes
                        </h5>
                        <ul className="space-y-1">
                          {phase.outcomes.map((outcome, idx) => (
                            <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </HoverShadow>
              )
            })}
          </div>
        </div>

        <div id="ab-testing" className="scroll-mt-20">
          <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                    A/B Testing Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Landing Page Tests</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• 14% conversion improvement</li>
                        <li>• Mobile-first design wins</li>
                        <li>• Simplified form fields</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Multivariate Tests</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• 6-12% uplift across variants</li>
                        <li>• CTA button optimization</li>
                        <li>• Value proposition clarity</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Redirect Tests</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• User flow optimization</li>
                        <li>• Reduced drop-off rates</li>
                        <li>• Improved sign-up completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="iterative-design" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((toolCategory, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
                    {toolCategory.category}
                  </h4>
                  <div className="space-y-3">
                    {toolCategory.items.map((tool, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                          <Target className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-grey-900 dark:text-grey-50 text-sm">
                            {tool.name}
                          </div>
                          <div className="text-xs text-grey-600 dark:text-white">
                            {tool.purpose}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="implementation" className="scroll-mt-20">
          <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                    Key Learnings & Insights
                  </h3>
                  <div className="space-y-3 text-sm text-grey-600 dark:text-white">
                    <p>
                      <strong className="text-grey-900 dark:text-grey-50">Data-Driven Decision Making:</strong> 
                      Implementing comprehensive analytics tracking across 300+ pages enabled evidence-based 
                      optimization decisions, resulting in consistent month-over-month improvements.
                    </p>
                    <p>
                      <strong className="text-grey-900 dark:text-grey-50">Mobile-First Approach:</strong> 
                      Healthcare professionals primarily accessed the platform on mobile devices, making 
                      responsive design and mobile optimization critical for conversion success.
                    </p>
                    <p>
                      <strong className="text-grey-900 dark:text-grey-50">Iterative Improvement:</strong> 
                      Reducing design iteration cycles from weeks to days through streamlined Figma-to-code 
                      workflows enabled rapid testing and optimization of user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 
