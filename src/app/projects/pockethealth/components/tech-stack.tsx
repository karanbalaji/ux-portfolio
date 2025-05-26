import { BarChart3, TestTube, Palette, Code, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

export default function TechStack() {
  const techCategories = [
    {
      id: "analytics-tools",
      icon: BarChart3,
      title: "Analytics Tools",
      description: "Data tracking and user behavior analysis",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      tools: [
        {
          name: "Google Analytics",
          purpose: "Conversion funnel analysis and user journey tracking",
          impact: "Enabled data-driven optimization decisions"
        },
        {
          name: "Amplitude",
          purpose: "Advanced user behavior analytics and cohort analysis",
          impact: "Improved user segmentation and targeting"
        },
        {
          name: "Hotjar",
          purpose: "Heatmaps, session recordings, and user feedback",
          impact: "Identified UX pain points and optimization opportunities"
        },
        {
          name: "Google Tag Manager",
          purpose: "Event tracking and analytics implementation",
          impact: "Streamlined analytics deployment across 300+ pages"
        }
      ]
    },
    {
      id: "testing-platforms",
      icon: TestTube,
      title: "Testing Platforms",
      description: "A/B testing and experimentation framework",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      tools: [
        {
          name: "Google Optimize",
          purpose: "A/B testing, multivariate testing, and redirect tests",
          impact: "17% monthly conversion rate improvement"
        },
        {
          name: "Figma",
          purpose: "Design prototyping and user testing",
          impact: "Reduced design iteration cycles from weeks to days"
        },
        {
          name: "Ahrefs",
          purpose: "SEO testing and optimization",
          impact: "Improved SEO score from 55% to 92%"
        },
        {
          name: "Google Lighthouse",
          purpose: "Performance testing and optimization",
          impact: "30% improvement in performance scores"
        }
      ]
    },
    {
      id: "design-tools",
      icon: Palette,
      title: "Design Tools",
      description: "Design system and prototyping tools",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      tools: [
        {
          name: "Figma",
          purpose: "End-to-end design process and collaboration",
          impact: "Built 100+ responsive landing page templates"
        },
        {
          name: "Notion",
          purpose: "Kanban project management and documentation",
          impact: "Streamlined agile design sprints"
        },
        {
          name: "Miro",
          purpose: "Collaborative whiteboarding and user journey mapping",
          impact: "Enhanced team collaboration and design thinking"
        },
        {
          name: "Material Design",
          purpose: "Google's design system for consistent UI patterns",
          impact: "Improved accessibility and familiar user interactions"
        }
      ]
    }
  ]

  const metrics = [
    {
      category: "Performance Metrics",
      items: [
        { metric: "Google Lighthouse Score", before: "70%", after: "100%", improvement: "+30%" },
        { metric: "Page Load Speed", before: "3.2s", after: "1.4s", improvement: "+55%" },
        { metric: "Mobile Performance", before: "65%", after: "95%", improvement: "+30%" }
      ]
    },
    {
      category: "SEO Metrics",
      items: [
        { metric: "SEO Health Score", before: "55%", after: "92%", improvement: "+37%" },
        { metric: "Broken Links Fixed", before: "500+", after: "0", improvement: "100%" },
        { metric: "Language Issues", before: "184", after: "0", improvement: "100%" }
      ]
    },
    {
      category: "Conversion Metrics",
      items: [
        { metric: "Sign-up Conversions", before: "650K", after: "1.1M", improvement: "+69%" },
        { metric: "Monthly Conversion Rate", before: "Baseline", after: "+17%", improvement: "17%" },
        { metric: "A/B Test Uplift", before: "N/A", after: "6-14%", improvement: "Avg 10%" }
      ]
    }
  ]

  return (
    <section id="tech-stack" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            Tech Stack & Tools
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            A comprehensive toolkit for growth engineering, combining analytics, testing, and design tools 
            to enable data-driven optimization and rapid experimentation.
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} id={category.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">
                      {category.title}
                    </h3>
                    <p className="text-grey-600 dark:text-white">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <HoverShadow
                      key={toolIndex}
                      as="div"
                      containerClassName="rounded-xl"
                      className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                      shadowIntensity="medium"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${category.color}`}>
                            <Code className="h-4 w-4" />
                          </div>
                          <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                            {tool.name}
                          </h4>
                        </div>
                        <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                          {tool.purpose}
                        </p>
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                          Impact: {tool.impact}
                        </div>
                      </div>
                    </HoverShadow>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Performance Impact
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {metrics.map((metricCategory, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
                    {metricCategory.category}
                  </h4>
                  <div className="space-y-4">
                    {metricCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <div className="text-sm font-medium text-grey-900 dark:text-grey-50">
                          {item.metric}
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-grey-500 dark:text-grey-400">
                            Before: {item.before}
                          </span>
                          <span className="text-grey-500 dark:text-grey-400">
                            After: {item.after}
                          </span>
                        </div>
                        <div className="w-full bg-grey-200 dark:bg-grey-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: '85%' }}
                          ></div>
                        </div>
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 text-center">
                          {item.improvement} improvement
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Database className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                  Technical Implementation Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-grey-600 dark:text-white">
                  <div className="space-y-2">
                    <div className="font-medium text-grey-900 dark:text-grey-50">Analytics Infrastructure</div>
                    <ul className="space-y-1">
                      <li>• Cross-domain tracking setup</li>
                      <li>• Custom event taxonomy design</li>
                      <li>• Real-time dashboard creation</li>
                      <li>• Automated reporting workflows</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-grey-900 dark:text-grey-50">Performance Optimization</div>
                    <ul className="space-y-1">
                      <li>• JavaScript code splitting</li>
                      <li>• Image optimization pipeline</li>
                      <li>• CDN implementation</li>
                      <li>• Critical CSS inlining</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 
