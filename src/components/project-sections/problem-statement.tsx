"use client"

import { AlertTriangle, Users, TrendingDown, Code, Target, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

interface Challenge {
  title: string
  description: string
  impact: string
}

interface Persona {
  name: string
  description: string
  painPoints: string[]
  goals: string[]
}

interface TechnicalDebt {
  performanceIssues?: string[]
  seoProblems?: string[]
  analyticsGaps?: string[]
}

interface CompetitorLimitation {
  solution: string
  limitations: string
}

interface MarketAnalysis {
  context?: string
  competitorLimitations?: CompetitorLimitation[]
}

interface UserNeed {
  category: string
  stat: string
  detail: string
}

interface UserNeedsData {
  description?: string
  needs?: UserNeed[]
}

interface ProblemStatementData {
  title?: string
  description?: string
  challenges?: Challenge[]
  personas?: Persona[]
  technicalDebt?: TechnicalDebt
  marketAnalysis?: MarketAnalysis
  userNeeds?: UserNeedsData
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingDown,
  Code,
  Target,
}

const colorMap: Record<string, string> = {
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
}

const challengeColors = ["red", "orange", "blue"]

export default function ProblemStatement({ data }: { data: ProblemStatementData }) {
  const { title = "Problem Statement", description, challenges = [], personas = [], technicalDebt, marketAnalysis, userNeeds } = data

  return (
    <section id="problem-statement" className="scroll-mt-20">
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

        {marketAnalysis && (
          <div id="market-analysis" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
              Market Analysis
            </h3>
            {marketAnalysis.context && (
              <p className="text-grey-600 dark:text-white mb-6 text-base leading-relaxed">
                {marketAnalysis.context}
              </p>
            )}
            {marketAnalysis.competitorLimitations && marketAnalysis.competitorLimitations.length > 0 && (
              <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-4 bg-grey-50 dark:bg-grey-800 font-medium text-sm text-grey-900 dark:text-grey-50">
                  <div>Existing Solution</div>
                  <div>Limitations</div>
                </div>
                {marketAnalysis.competitorLimitations.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 p-4 border-t border-grey-200 dark:border-grey-700 text-sm">
                    <div className="font-medium text-grey-900 dark:text-grey-50">{item.solution}</div>
                    <div className="text-grey-600 dark:text-grey-300">{item.limitations}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {userNeeds && (
          <div id="pain-points" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
              User Research Findings
            </h3>
            {userNeeds.description && (
              <p className="text-grey-600 dark:text-white mb-6 text-base leading-relaxed">
                {userNeeds.description}
              </p>
            )}
            {userNeeds.needs && userNeeds.needs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userNeeds.needs.map((need, idx) => {
                  const colorClass = colorMap[challengeColors[idx % challengeColors.length]]
                  const statColorMap: Record<string, string> = {
                    red: "text-red-600 dark:text-red-400",
                    orange: "text-orange-600 dark:text-orange-400",
                    blue: "text-blue-600 dark:text-blue-400",
                  }
                  const colorKey = challengeColors[idx % challengeColors.length]
                  return (
                    <div key={idx} className="p-5 rounded-xl border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${colorClass} flex-shrink-0`}>
                          <BarChart3 className="h-4 w-4" />
                        </div>
                        <span className={`text-3xl font-bold ${statColorMap[colorKey]}`}>
                          {need.stat}
                        </span>
                      </div>
                      <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-1 text-sm">{need.category}</h4>
                      <p className="text-xs text-grey-600 dark:text-white leading-relaxed">{need.detail}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {challenges.length > 0 && (
          <div id="conversion-challenges" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Key Challenges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => {
                const colorClass = colorMap[challengeColors[index % challengeColors.length]]
                const IconComponent = iconMap[Object.keys(iconMap)[index % 3]] || TrendingDown
                
                return (
                  <HoverShadow
                    key={index}
                    as="div"
                    containerClassName="rounded-xl"
                    className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                    shadowIntensity="medium"
                  >
                    <div className="space-y-4">
                      <div className={`p-3 rounded-xl ${colorClass} w-fit`}>
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
        )}

        {personas.length > 0 && (
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
        )}

        {technicalDebt && (technicalDebt.performanceIssues || technicalDebt.seoProblems || technicalDebt.analyticsGaps) && (
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
                      {technicalDebt.performanceIssues && technicalDebt.performanceIssues.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-medium text-grey-900 dark:text-grey-50">Performance Issues</div>
                          <ul className="space-y-1 text-grey-600 dark:text-white">
                            {technicalDebt.performanceIssues.map((issue, idx) => (
                              <li key={idx}>• {issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technicalDebt.seoProblems && technicalDebt.seoProblems.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-medium text-grey-900 dark:text-grey-50">SEO Problems</div>
                          <ul className="space-y-1 text-grey-600 dark:text-white">
                            {technicalDebt.seoProblems.map((problem, idx) => (
                              <li key={idx}>• {problem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technicalDebt.analyticsGaps && technicalDebt.analyticsGaps.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-medium text-grey-900 dark:text-grey-50">Analytics Gaps</div>
                          <ul className="space-y-1 text-grey-600 dark:text-white">
                            {technicalDebt.analyticsGaps.map((gap, idx) => (
                              <li key={idx}>• {gap}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {challenges.length === 0 && personas.length === 0 && !technicalDebt && !marketAnalysis && !userNeeds && (
          <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <CardContent className="p-6">
              <p className="text-grey-600 dark:text-grey-300">
                Problem statement content coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}