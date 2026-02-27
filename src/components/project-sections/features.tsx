"use client"

import { CheckCircle, Target, Brain, Zap, Smartphone, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

interface UXLaw {
  title: string
  description: string
  application: string
  impact?: string
}

interface HeuristicEvaluation {
  heuristic: string
  before: string
  after: string
  improvement: string
}

interface UIComponent {
  component: string
  purpose: string
  ux: string
}

interface Accessibility {
  principle: string
  implementation: string
}

interface MobileFirst {
  feature: string
  description: string
}

interface InteractionPrinciple {
  principle: string
  description: string
}

interface AuthOption {
  component: string
  purpose: string
  ux: string
}

interface AnalyticsFeature {
  feature: string
  description: string
}

interface FeaturesData {
  title?: string
  description?: string
  uxLaws?: UXLaw[]
  heuristicEvaluation?: HeuristicEvaluation[]
  uiComponents?: UIComponent[]
  accessibility?: Accessibility[]
  mobileFirst?: MobileFirst[]
  interactionPrinciples?: InteractionPrinciple[]
  authOptions?: AuthOption[]
  analyticsFeatures?: AnalyticsFeature[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Brain,
  Zap,
  Smartphone,
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
}

const lawColors = ["blue", "green", "purple", "orange"]

export default function Features({ data }: { data: FeaturesData }) {
  const {
    title = "UX Laws & Heuristic Evaluation",
    description,
    uxLaws = [],
    heuristicEvaluation = [],
    uiComponents = [],
    accessibility = [],
    mobileFirst = [],
    interactionPrinciples = [],
    authOptions = [],
    analyticsFeatures = []
  } = data

  return (
    <section id="features" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
          {description && (
            <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* UI Components - for fintechtoronto */}
        {uiComponents.length > 0 && (
          <div id="ui-components" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Core UI Components
            </h3>
            <div className="rounded-lg border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-grey-50 dark:bg-grey-800 font-medium text-sm">
                <div>Component</div>
                <div>Purpose</div>
                <div>UX Considerations</div>
              </div>
              {uiComponents.map((comp, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-t border-grey-200 dark:border-grey-700 text-sm">
                  <div className="font-medium">{comp.component}</div>
                  <div className="text-grey-600 dark:text-grey-300">{comp.purpose}</div>
                  <div className="text-grey-600 dark:text-grey-300">{comp.ux}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accessibility - for fintechtoronto */}
        {accessibility.length > 0 && (
          <div id="accessibility" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Accessibility Implementation
            </h3>
            <div className="rounded-lg border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-grey-50 dark:bg-grey-800 font-medium text-sm">
                <div>WCAG Principle</div>
                <div>Implementation Details</div>
              </div>
              {accessibility.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-t border-grey-200 dark:border-grey-700 text-sm">
                  <div className="font-medium">{item.principle}</div>
                  <div className="text-grey-600 dark:text-grey-300">{item.implementation}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile First - for fintechtoronto */}
        {mobileFirst.length > 0 && (
          <div id="mobile-first" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Mobile-First Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mobileFirst.map((item, index) => (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2">{item.feature}</h4>
                    <p className="text-sm text-grey-600 dark:text-grey-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* UX Laws - for pockethealth */}
        {uxLaws.length > 0 && (
          <div id="ux-laws-applied" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              UX Laws Applied
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uxLaws.map((law, index) => {
                const colorClass = colorMap[lawColors[index % lawColors.length]]
                const IconComponent = iconMap[Object.keys(iconMap)[index % 4]] || Target
                
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
                        <div className={`p-3 rounded-xl ${colorClass}`}>
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
                      
                      {law.impact && (
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                          Impact: {law.impact}
                        </div>
                      )}
                    </div>
                  </HoverShadow>
                )
              })}
            </div>
          </div>
        )}

        {heuristicEvaluation.length > 0 && (
          <div id="heuristic-evaluation" className="scroll-mt-20">
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
        )}

        {/* Interaction Design Principles - for fintechtoronto */}
        {interactionPrinciples.length > 0 && (
          <div id="interaction-principles" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Interaction Design Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interactionPrinciples.map((item, index) => (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2">{item.principle}</h4>
                    <p className="text-xs text-grey-600 dark:text-grey-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Auth Options - for fintechtoronto */}
        {authOptions.length > 0 && (
          <div id="user-auth" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              User Authentication Options
            </h3>
            <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-grey-50 dark:bg-grey-800 font-medium text-sm text-grey-900 dark:text-grey-50">
                <div>Method</div>
                <div>Purpose</div>
                <div>UX Rationale</div>
              </div>
              {authOptions.map((opt, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-t border-grey-200 dark:border-grey-700 text-sm">
                  <div className="font-medium text-grey-900 dark:text-grey-50">{opt.component}</div>
                  <div className="text-grey-600 dark:text-grey-300">{opt.purpose}</div>
                  <div className="text-grey-600 dark:text-grey-300">{opt.ux}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Integration - for fintechtoronto */}
        {analyticsFeatures.length > 0 && (
          <div id="analytics-integration" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Analytics Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analyticsFeatures.map((item, index) => (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2">{item.feature}</h4>
                    <p className="text-sm text-grey-600 dark:text-grey-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {uxLaws.length === 0 && heuristicEvaluation.length === 0 && uiComponents.length === 0 && accessibility.length === 0 && mobileFirst.length === 0 && interactionPrinciples.length === 0 && authOptions.length === 0 && analyticsFeatures.length === 0 && (
          <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <CardContent className="p-6">
              <p className="text-grey-600 dark:text-grey-300">
                Features content coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
