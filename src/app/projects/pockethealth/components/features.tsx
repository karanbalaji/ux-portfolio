import { CheckCircle, Target, Smartphone, BarChart3, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

export default function Features() {
  const uxLaws = [
    {
      icon: Target,
      title: "Jakob's Law",
      description: "Users spend most of their time on other sites, so they prefer your site to work the same way",
      application: "Implemented familiar healthcare portal patterns and standard navigation conventions",
      impact: "Reduced learning curve for patients accessing medical records",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Miller's Law",
      description: "The average person can only keep 7±2 items in their working memory",
      application: "Simplified navigation to 5 main sections and chunked information into digestible pieces",
      impact: "Improved information processing and reduced cognitive overload",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: Zap,
      title: "Hick's Law",
      description: "The time it takes to make a decision increases with the number of alternatives",
      application: "Streamlined patient onboarding with progressive disclosure and clear primary actions",
      impact: "Faster decision-making and improved conversion rates",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Smartphone,
      title: "Fitts's Law",
      description: "The time to acquire a target is a function of the distance to and size of the target",
      application: "Optimized mobile touch targets to 44px minimum and positioned CTAs in thumb-friendly zones",
      impact: "Improved mobile usability and reduced interaction errors",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    }
  ]

  const heuristicEvaluation = [
    {
      heuristic: "Visibility of System Status",
      before: "No loading indicators or progress feedback",
      after: "Clear loading states and progress indicators throughout",
      improvement: "25% reduction in user confusion"
    },
    {
      heuristic: "Match Between System and Real World",
      before: "Technical medical jargon and complex terminology",
      after: "Patient-friendly language and familiar healthcare concepts",
      improvement: "30% improvement in comprehension"
    },
    {
      heuristic: "User Control and Freedom",
      before: "Limited navigation options and no clear exit paths",
      after: "Clear breadcrumbs, back buttons, and escape routes",
      improvement: "40% reduction in user frustration"
    },
    {
      heuristic: "Consistency and Standards",
      before: "Inconsistent button styles and navigation patterns",
      after: "Unified design system with consistent interactions",
      improvement: "35% improvement in usability scores"
    }
  ]

  return (
    <section id="features" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            UX Laws & Heuristic Evaluation
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                      <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            Applied fundamental UX laws and conducted systematic heuristic evaluation to improve 
            PocketHealth&apos;s usability and patient experience.
          </p>
        </div>

        <div id="conversion-optimization" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            UX Laws Applied
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uxLaws.map((law, index) => {
              const IconComponent = law.icon
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
                      <div className={`p-3 rounded-xl ${law.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                        {law.title}
                      </h4>
                    </div>
                    
                    <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                      {law.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold text-grey-900 dark:text-grey-50 uppercase tracking-wide">
                        Application
                      </h5>
                      <p className="text-xs text-grey-600 dark:text-white leading-relaxed">
                        {law.application}
                      </p>
                    </div>
                    
                    <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                      Impact: {law.impact}
                    </div>
                  </div>
                </HoverShadow>
              )
            })}
          </div>
        </div>

        <div id="analytics-tracking" className="scroll-mt-20">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
            Heuristic Evaluation Results
          </h3>
          <div className="space-y-4">
            {heuristicEvaluation.map((item, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-3">
                        {item.heuristic}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                          Before
                        </h5>
                        <p className="text-sm text-grey-600 dark:text-white">
                          {item.before}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                          After
                        </h5>
                        <p className="text-sm text-grey-600 dark:text-white">
                          {item.after}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                          {item.improvement}
                        </div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">
                          Improvement
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="performance-improvements" className="scroll-mt-20">
          <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-3">
                    Overall UX Improvements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-grey-600 dark:text-white">
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Usability Metrics</div>
                      <ul className="space-y-1">
                        <li>• 92% SUS (System Usability Scale) score</li>
                        <li>• 35% reduction in task completion time</li>
                        <li>• 40% decrease in user errors</li>
                        <li>• 25% improvement in user satisfaction</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-grey-900 dark:text-grey-50">Patient Experience</div>
                      <ul className="space-y-1">
                        <li>• Simplified medical record access</li>
                        <li>• Mobile-optimized patient portal</li>
                        <li>• Clear healthcare terminology</li>
                        <li>• Improved accessibility compliance</li>
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
