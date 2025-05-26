import { TrendingUp, Gauge, Search, Target, BarChart3, Award, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

export default function SocialProof() {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Conversion Growth",
      metric: "650K → 1.1M",
      description: "Sign-up conversions increased by 69% through systematic optimization",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      details: [
        "17% monthly conversion rate improvement",
        "6-14% uplift across A/B test variants",
        "Consistent month-over-month growth"
      ]
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      metric: "+30%",
      description: "Google Lighthouse score improvement through technical optimization",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      details: [
        "55% page speed increase",
        "JavaScript deferring implementation",
        "Mobile performance optimization"
      ]
    },
    {
      icon: Search,
      title: "SEO Excellence",
      metric: "55% → 92%",
      description: "SEO health score improvement using Ahrefs optimization",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      details: [
        "500+ broken links fixed",
        "184 language issues resolved",
        "Multilingual metadata optimization"
      ]
    },
    {
      icon: Target,
      title: "Analytics Implementation",
      metric: "300+",
      description: "Pages with comprehensive analytics tracking and event monitoring",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      details: [
        "Google Tag Manager setup",
        "Custom event taxonomy",
        "Cross-domain tracking"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "The growth engineering work transformed our conversion funnel. The data-driven approach and systematic A/B testing delivered measurable results that directly impacted our business goals.",
      author: "Growth Team Lead",
      role: "PocketHealth",
      impact: "17% monthly conversion improvement"
    },
    {
      quote: "The mobile-first design approach and performance optimizations significantly improved our user experience. Healthcare professionals can now access the platform seamlessly on any device.",
      author: "Product Manager",
      role: "PocketHealth",
      impact: "30% performance improvement"
    },
    {
      quote: "The analytics infrastructure and tracking implementation provided unprecedented insights into user behavior, enabling data-driven decision making across all product initiatives.",
      author: "Engineering Manager",
      role: "PocketHealth",
      impact: "300+ pages tracked"
    }
  ]

  const metrics = [
    {
      category: "Conversion Metrics",
      icon: BarChart3,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      stats: [
        { label: "Total Conversions", value: "1.1M", change: "+69%" },
        { label: "Monthly Growth", value: "17%", change: "Consistent" },
        { label: "A/B Test Uplift", value: "6-14%", change: "Average 10%" }
      ]
    },
    {
      category: "Performance Gains",
      icon: Zap,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      stats: [
        { label: "Lighthouse Score", value: "100%", change: "+30%" },
        { label: "Page Speed", value: "1.4s", change: "+55%" },
        { label: "Mobile Performance", value: "95%", change: "+30%" }
      ]
    },
    {
      category: "SEO Improvements",
      icon: Award,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      stats: [
        { label: "SEO Health Score", value: "92%", change: "+37%" },
        { label: "Broken Links Fixed", value: "500+", change: "100%" },
        { label: "Language Issues", value: "0", change: "184 fixed" }
      ]
    }
  ]

  const timeline = [
    {
      phase: "Month 1",
      title: "Research & Analysis",
      achievements: [
        "Baseline metrics established",
        "User research completed",
        "Analytics infrastructure setup"
      ]
    },
    {
      phase: "Month 2",
      title: "Testing & Optimization",
      achievements: [
        "A/B testing framework implemented",
        "First conversion improvements",
        "Performance optimization started"
      ]
    },
    {
      phase: "Month 3",
      title: "Scale & Results",
      achievements: [
        "100+ landing page templates",
        "SEO score improvement to 92%",
        "650K → 1.1M conversion milestone"
      ]
    }
  ]

  return (
    <section id="social-proof" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            Results & Impact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            Measurable outcomes from systematic growth engineering, demonstrating the impact of 
            data-driven optimization and user-centered design on business metrics.
          </p>
        </div>

        <div id="conversion-metrics" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
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
                      <div className={`p-3 rounded-xl ${achievement.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                          {achievement.title}
                        </h4>
                        <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                          {achievement.metric}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="space-y-1">
                      {achievement.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverShadow>
              )
            })}
          </div>
        </div>

        <div id="performance-gains" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${metric.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                        {metric.category}
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {metric.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-grey-900 dark:text-grey-50">
                              {stat.label}
                            </span>
                            <span className="text-sm font-bold text-grey-900 dark:text-grey-50">
                              {stat.value}
                            </span>
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                            {stat.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div id="seo-improvements" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Project Timeline & Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((phase, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {phase.phase}
                      </div>
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                        {phase.title}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {phase.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-sm text-grey-600 dark:text-white flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Team Feedback
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-sm text-grey-600 dark:text-white leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </div>
                    <div className="border-t border-grey-200 dark:border-grey-600 pt-4">
                      <div className="text-sm font-semibold text-grey-900 dark:text-grey-50">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-grey-500 dark:text-grey-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs font-medium text-green-600 dark:text-green-400 mt-2">
                        Impact: {testimonial.impact}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                  Business Impact Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-grey-600 dark:text-white">
                  <div className="space-y-2">
                    <div className="font-medium text-grey-900 dark:text-grey-50">Growth Metrics</div>
                    <ul className="space-y-1">
                      <li>• 69% increase in total conversions</li>
                      <li>• 17% monthly conversion rate improvement</li>
                      <li>• Consistent month-over-month growth</li>
                      <li>• Scalable optimization framework</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-grey-900 dark:text-grey-50">Technical Excellence</div>
                    <ul className="space-y-1">
                      <li>• 92% SEO health score achievement</li>
                      <li>• 30% performance improvement</li>
                      <li>• 100+ reusable landing page templates</li>
                      <li>• Comprehensive analytics infrastructure</li>
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
