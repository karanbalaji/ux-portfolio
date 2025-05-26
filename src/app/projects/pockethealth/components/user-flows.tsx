"use client"

import { ArrowRight, Smartphone, Layout, Target, CheckCircle, AlertCircle, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

export default function UserFlows() {
  const flows = [
    {
      id: "landing-page-optimization",
      title: "Landing Page Optimization",
      description: "Patient-focused conversion optimization with mobile-first approach",
      icon: Target,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      steps: [
        {
          step: "Value Proposition",
          description: "Clear patient-centered messaging and benefits",
          improvements: ["Simplified healthcare language", "Trust indicators", "Patient testimonials"],
          impact: "14% conversion improvement"
        },
        {
          step: "Mobile Layout",
          description: "Optimized for 61% mobile user base",
          improvements: ["Touch-friendly CTAs", "Readable typography", "Fast loading"],
          impact: "23% mobile conversion increase"
        },
        {
          step: "Social Proof",
          description: "Healthcare provider endorsements and patient reviews",
          improvements: ["Provider logos", "Patient success stories", "Security badges"],
          impact: "18% trust indicator uplift"
        },
        {
          step: "Call-to-Action",
          description: "Clear next steps for patient registration",
          improvements: ["Prominent CTA buttons", "Progress indicators", "Benefit reinforcement"],
          impact: "31% click-through increase"
        }
      ]
    },
    {
      id: "landing-pages",
      title: "Landing Page Templates",
      description: "100+ responsive templates for high-traffic campaigns",
      icon: Layout,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      steps: [
        {
          step: "Template System",
          description: "Modular component-based landing page architecture",
          improvements: ["Reusable components", "Dynamic content", "A/B test variants"],
          impact: "75% faster page creation"
        },
        {
          step: "Content Strategy",
          description: "Data-driven content optimization for different audiences",
          improvements: ["Persona-specific messaging", "Dynamic CTAs", "Localized content"],
          impact: "12% average conversion uplift"
        },
        {
          step: "Performance",
          description: "Optimized for speed and SEO across all templates",
          improvements: ["Lazy loading", "Critical CSS", "Image optimization"],
          impact: "40% faster load times"
        },
        {
          step: "Analytics",
          description: "Comprehensive tracking for all template variations",
          improvements: ["Event tracking", "Conversion funnels", "Heatmap integration"],
          impact: "100% tracking coverage"
        }
      ]
    },
    {
      id: "mobile-experience",
      title: "Mobile Experience Design",
      description: "Mobile-first design optimization for 61% mobile user base",
      icon: Smartphone,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      steps: [
        {
          step: "Bottom Navigation",
          description: "Experimented with bottom navigation for better mobile UX",
          improvements: ["Thumb-zone optimization", "Quick access to key features", "Reduced cognitive load"],
          impact: "35% mobile engagement increase"
        },
        {
          step: "Touch Optimization",
          description: "Optimized for mobile touch interactions",
          improvements: ["44px minimum touch targets", "Gesture-friendly design", "Haptic feedback"],
          impact: "28% mobile usability improvement"
        },
        {
          step: "Performance",
          description: "Fast loading for mobile networks and devices",
          improvements: ["Compressed assets", "Lazy loading", "Progressive enhancement"],
          impact: "60% faster mobile load times"
        },
        {
          step: "Mobile Testing",
          description: "Comprehensive testing across mobile devices",
          improvements: ["Real device testing", "Network simulation", "Mobile accessibility"],
          impact: "95% mobile compatibility"
        }
      ]
    }
  ]

  const beforeAfter = [
    {
      category: "Sign-up Conversion",
      before: {
        title: "Before Optimization",
        issues: [
          "7-field registration form",
          "No social proof elements",
          "Generic messaging",
          "Poor mobile experience",
          "No progress indicators"
        ],
        metrics: "2.3% conversion rate"
      },
      after: {
        title: "After Optimization",
        improvements: [
          "3-field simplified form",
          "Trust badges and testimonials",
          "Persona-specific messaging",
          "Mobile-first design",
          "Clear progress indicators"
        ],
        metrics: "3.9% conversion rate (+69%)"
      }
    },
    {
      category: "Page Performance",
      before: {
        title: "Before Optimization",
        issues: [
          "5.2s average load time",
          "Large unoptimized images",
          "Blocking JavaScript",
          "No caching strategy",
          "Poor mobile performance"
        ],
        metrics: "55% Google Lighthouse score"
      },
      after: {
        title: "After Optimization",
        improvements: [
          "2.1s average load time",
          "WebP image format",
          "Deferred JavaScript loading",
          "Aggressive caching",
          "Mobile-optimized assets"
        ],
        metrics: "92% Google Lighthouse score (+67%)"
      }
    },
    {
      category: "SEO Performance",
      before: {
        title: "Before Optimization",
        issues: [
          "500+ broken links",
          "184 language issues",
          "Missing meta descriptions",
          "Poor internal linking",
          "No structured data"
        ],
        metrics: "Limited organic visibility"
      },
      after: {
        title: "After Optimization",
        improvements: [
          "All broken links fixed",
          "Multilingual optimization",
          "Complete meta data",
          "Strategic internal linking",
          "Rich snippets implemented"
        ],
        metrics: "300% organic traffic increase"
      }
    },
    {
      category: "A/B Testing",
      before: {
        title: "Before Testing",
        issues: [
          "No systematic testing",
          "Assumption-based decisions",
          "Limited data collection",
          "No variant tracking",
          "Manual optimization"
        ],
        metrics: "Static conversion rates"
      },
      after: {
        title: "After Testing",
        improvements: [
          "Continuous A/B testing",
          "Data-driven decisions",
          "Comprehensive analytics",
          "Automated variant tracking",
          "Systematic optimization"
        ],
        metrics: "17% monthly improvement rate"
      }
    }
  ]

  const flowMetrics = [
    {
      metric: "Conversion Growth",
      improvement: "+69%",
      description: "Overall sign-up conversion improvement from 650K to 1.1M users",
      icon: TrendingUp
    },
    {
      metric: "Monthly Optimization",
      improvement: "+17%",
      description: "Consistent monthly conversion rate improvements through A/B testing",
      icon: BarChart3
    },
    {
      metric: "Mobile Performance",
      improvement: "+35%",
      description: "Mobile conversion rate increase through responsive design",
      icon: Smartphone
    },
    {
      metric: "Page Speed",
      improvement: "+60%",
      description: "Faster load times through performance optimization",
      icon: Zap
    }
  ]

  return (
    <section id="user-flows" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            User Flows & Optimization
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            Systematic optimization of user journeys through data-driven design decisions, 
            A/B testing, and mobile-first approaches to maximize conversion rates.
          </p>
        </div>

        <div className="space-y-12">
          {flows.map((flow, index) => {
            const IconComponent = flow.icon
            return (
              <div key={index} id={flow.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${flow.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">
                      {flow.title}
                    </h3>
                    <p className="text-grey-600 dark:text-white">
                      {flow.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {flow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative">
                      <HoverShadow
                        as="div"
                        containerClassName="rounded-xl"
                        className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700 h-full"
                        shadowIntensity="medium"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${flow.color} flex items-center justify-center text-sm font-bold`}>
                              {stepIndex + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                              {step.step}
                            </h4>
                          </div>
                          
                          <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-grey-900 dark:text-grey-50 uppercase tracking-wide">
                              Key Improvements
                            </h5>
                            <ul className="space-y-1">
                              {step.improvements.map((improvement, idx) => (
                                <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                            Impact: {step.impact}
                          </div>
                        </div>
                      </HoverShadow>
                      
                      {stepIndex < flow.steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                          <div className="w-4 h-4 bg-white dark:bg-grey-800 border border-grey-200 dark:border-grey-700 rounded-full flex items-center justify-center">
                            <ArrowRight className="h-2 w-2 text-grey-400" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Before vs After Comparison
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {beforeAfter.map((comparison, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
                    {comparison.category}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <h5 className="text-sm font-semibold text-red-600 dark:text-red-400">
                          {comparison.before.title}
                        </h5>
                      </div>
                      <ul className="space-y-1">
                        {comparison.before.issues.map((issue, idx) => (
                          <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            {issue}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-grey-500 dark:text-grey-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                        {comparison.before.metrics}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <h5 className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {comparison.after.title}
                        </h5>
                      </div>
                      <ul className="space-y-1">
                        {comparison.after.improvements.map((improvement, idx) => (
                          <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-grey-500 dark:text-grey-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                        {comparison.after.metrics}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Flow Optimization Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                          {metric.improvement}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-grey-900 dark:text-grey-50">
                          {metric.metric}
                        </div>
                        <div className="text-xs text-grey-600 dark:text-white leading-relaxed">
                          {metric.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 
