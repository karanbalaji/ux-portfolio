import { AlertTriangle, Users, TrendingDown, Code, Target, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

export default function ProblemStatement() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Conversion Bottlenecks",
      description: "Sign-up conversion rates were plateauing at 650K with declining month-over-month growth",
      impact: "Limited user acquisition growth",
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
    },
    {
      icon: Code,
      title: "Technical Debt",
      description: "Legacy landing pages with poor performance, slow load times, and SEO issues",
      impact: "55% SEO score, poor Lighthouse metrics",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      icon: Target,
      title: "Lack of Data-Driven Insights",
      description: "Limited A/B testing infrastructure and analytics tracking across 300+ pages",
      impact: "Decisions based on assumptions",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    }
  ]

  const personas = [
    {
      name: "Patients (Primary Focus)",
      description: "Individuals seeking easy access to their medical imaging and health records",
      painPoints: ["Complex mobile navigation", "Confusing sign-up process", "Poor mobile experience", "Lack of clear value proposition"],
      goals: ["Simple mobile registration", "Easy record access", "Trust and security", "Mobile-friendly interface"]
    },
    {
      name: "Healthcare Providers",
      description: "Medical practices and clinics wanting to onboard PocketHealth for their patients",
      painPoints: ["Complex onboarding process", "Integration challenges", "Staff training requirements"],
      goals: ["Streamlined onboarding", "Easy patient enrollment", "Reliable platform integration"]
    }
  ]

  return (
    <section id="problem-statement" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            Problem Statement
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            PocketHealth faced significant growth challenges with conversion optimization, technical performance, 
            and data-driven decision making that were limiting their ability to scale user acquisition effectively.
          </p>
        </div>

        <div id="conversion-challenges" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Key Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <HoverShadow
                  key={index}
                  as="div"
                  containerClassName="rounded-xl"
                  className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                  shadowIntensity="medium"
                >
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl ${challenge.color} w-fit`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-grey-600 dark:text-white text-sm leading-relaxed mb-3">
                        {challenge.description}
                      </p>
                      <div className="text-xs font-medium text-grey-500 dark:text-grey-400 bg-grey-50 dark:bg-grey-700 px-3 py-2 rounded-lg">
                        Impact: {challenge.impact}
                      </div>
                    </div>
                  </div>
                </HoverShadow>
              )
            })}
          </div>
        </div>

        <div id="user-personas" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            User Personas & Pain Points
          </h3>
          <div className="space-y-6">
            {personas.map((persona, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                          <Users className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                          {persona.name}
                        </h4>
                      </div>
                      <p className="text-grey-600 dark:text-white text-sm leading-relaxed">
                        {persona.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Pain Points
                        </h5>
                        <ul className="space-y-1">
                          {persona.painPoints.map((point, idx) => (
                            <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Goals
                        </h5>
                        <ul className="space-y-1">
                          {persona.goals.map((goal, idx) => (
                            <li key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="technical-debt" className="scroll-mt-20">
          <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                    Technical Debt Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Performance Issues</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• Slow page load times</li>
                        <li>• Poor mobile experience</li>
                        <li>• Unoptimized JavaScript</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">SEO Problems</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• 500+ broken links</li>
                        <li>• Poor metadata</li>
                        <li>• 184 language issues</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Analytics Gaps</div>
                      <ul className="space-y-1 text-grey-600 dark:text-white">
                        <li>• Limited tracking</li>
                        <li>• No A/B testing</li>
                        <li>• Poor data insights</li>
                      </ul>
                    </div>
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
