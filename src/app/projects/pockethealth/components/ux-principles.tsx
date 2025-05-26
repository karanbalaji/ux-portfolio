
import { ExternalLink, Target, Brain, Zap, Smartphone, TrendingUp, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UXPrinciples() {
  const principles = [
    {
      icon: Target,
      title: "Jakob's Law",
      description: "Users spend most of their time on other sites, so they prefer your site to work the same way as all the other sites they already know.",
      application: "Implemented familiar healthcare portal patterns and standard navigation conventions to reduce learning curve.",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Brain,
      title: "Miller's Law",
      description: "The average person can only keep 7±2 items in their working memory at one time.",
      application: "Simplified navigation to 5 main sections and chunked information into digestible pieces to reduce cognitive load.",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: Zap,
      title: "Hick's Law",
      description: "The time it takes to make a decision increases with the number and complexity of choices.",
      application: "Streamlined patient onboarding with progressive disclosure and clear primary actions to speed decision-making.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Smartphone,
      title: "Fitts's Law",
      description: "The time to acquire a target is a function of the distance to and size of the target.",
      application: "Optimized mobile touch targets to 44px minimum and positioned CTAs in thumb-friendly zones for better usability.",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    }
  ]

  return (
    <section id="ux-principles" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            UX Principles & Outcome-Driven Design
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            Applied fundamental UX laws and outcome-driven design principles to create patient-centered 
            experiences that prioritize measurable results over interface aesthetics.
          </p>
        </div>

        <div id="fundamental-laws" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Fundamental UX Laws Applied
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${principle.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                          {principle.title}
                        </h4>
                      </div>
                      
                      <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                        {principle.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="text-xs font-semibold text-grey-900 dark:text-grey-50 uppercase tracking-wide">
                          PocketHealth Application
                        </h5>
                        <p className="text-xs text-grey-600 dark:text-white leading-relaxed">
                          {principle.application}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div id="outcome-driven-design" className="scroll-mt-20">
          <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                    Outcome-Driven Design Approach
                  </h3>
                  <div className="space-y-4 text-sm text-grey-600 dark:text-white">
                    <p>
                                             My approach at PocketHealth aligned with <strong>outcome-driven design</strong> principles, 
                       focusing on measurable patient outcomes rather than just interface aesthetics. This methodology 
                       prioritizes user goals and business results through systematic experimentation and data-driven optimization.
                    </p>
                    <p>
                                           Similar to Netflix&apos;s approach described in Navin Iyengar&apos;s &ldquo;Design Like a Scientist&rdquo; methodology, 
                     I used outcome-based testing to drive design decisions by experimenting with multiple variations 
                     and measuring their impact on patient conversion and engagement metrics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <div className="font-medium text-grey-900 dark:text-grey-50">Key Outcomes Measured</div>
                        <ul className="space-y-1">
                          <li>• Patient sign-up conversion rates</li>
                          <li>• Mobile engagement metrics</li>
                          <li>• Task completion times</li>
                          <li>• User satisfaction scores</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="font-medium text-grey-900 dark:text-grey-50">Design Decisions Based On</div>
                        <ul className="space-y-1">
                          <li>• A/B test results and statistical significance</li>
                          <li>• User behavior analytics and heatmaps</li>
                          <li>• Patient feedback and usability testing</li>
                          <li>• Business impact and ROI metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="references" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            References & Further Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                      Generative UI & Outcome-Oriented Design
                    </h4>
                  </div>
                                     <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                     Nielsen Norman Group&apos;s comprehensive guide on outcome-oriented design and the future 
                     of generative user interfaces that prioritize user goals over interface elements.
                   </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <Link 
                      href="https://www.nngroup.com/articles/generative-ui/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read NN/g Article
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                      <Play className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                      Design Like a Scientist
                    </h4>
                  </div>
                                     <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                     Navin Iyengar&apos;s Netflix talk on outcome-based testing and experimental design methodology 
                     that inspired my conversion-driven design approach at PocketHealth.
                   </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <Link 
                      href="https://youtube.com/watch?v=XRd6Ddn4ZSY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Watch Netflix Talk
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
