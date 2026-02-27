"use client"

import { ExternalLink, Target, Brain, Zap, Smartphone, TrendingUp, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Principle {
  title: string
  description: string
  application: string
}

interface OutcomeDriven {
  description?: string
  outcomes?: string[]
  decisions?: string[]
}

interface Heuristic {
  title: string
  description: string
}

interface BehavioralEconomics {
  principle: string
  description: string
}

interface UXPrinciplesData {
  title?: string
  description?: string
  principles?: Principle[]
  outcomeDriven?: OutcomeDriven
  heuristics?: Heuristic[]
  behavioralEconomics?: BehavioralEconomics[]
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

const principleColors = ["blue", "green", "purple", "orange"]

export default function UXPrinciples({ data }: { data: UXPrinciplesData }) {
  const { title = "UX Principles & Outcome-Driven Design", description, principles = [], outcomeDriven, heuristics = [], behavioralEconomics = [] } = data

  return (
    <section id="ux-principles" className="scroll-mt-20">
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

        {principles.length > 0 && (
          <div id="fundamental-laws" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Fundamental UX Laws Applied
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => {
                const colorClass = colorMap[principleColors[index % principleColors.length]]
                const IconComponent = iconMap[Object.keys(iconMap)[index % 4]] || Target
                
                return (
                  <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl ${colorClass}`}>
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
                            Application
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
        )}

        {outcomeDriven && (
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
                      {outcomeDriven.description && (
                        <p>
                          {outcomeDriven.description}
                        </p>
                      )}
                      
                      {outcomeDriven.outcomes && outcomeDriven.outcomes.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <div className="font-medium text-grey-900 dark:text-grey-50">Key Outcomes Measured</div>
                            <ul className="space-y-1">
                              {outcomeDriven.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {outcomeDriven.decisions && outcomeDriven.decisions.length > 0 && (
                            <div className="space-y-2">
                              <div className="font-medium text-grey-900 dark:text-grey-50">Design Decisions Based On</div>
                              <ul className="space-y-1">
                                {outcomeDriven.decisions.map((decision, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>{decision}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {heuristics.length > 0 && (
          <div id="usability-heuristics" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Nielsen&apos;s Usability Heuristics Applied
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {heuristics.map((heuristic, index) => {
                const colorClass = colorMap[principleColors[index % principleColors.length]]
                const IconComponent = iconMap[Object.keys(iconMap)[index % 4]] || Target
                return (
                  <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${colorClass} flex-shrink-0`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-grey-900 dark:text-grey-50 mb-1">
                            {heuristic.title}
                          </h4>
                          <p className="text-xs text-grey-600 dark:text-white leading-relaxed">
                            {heuristic.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {behavioralEconomics.length > 0 && (
          <div id="behavioral-economics" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Behavioral Economics Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {behavioralEconomics.map((item, index) => {
                const colorClass = colorMap[principleColors[(index + 2) % principleColors.length]]
                return (
                  <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className={`px-2 py-1 rounded text-xs font-bold ${colorClass} flex-shrink-0 whitespace-nowrap`}>
                          {item.principle}
                        </div>
                        <p className="text-xs text-grey-600 dark:text-white leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {principles.length === 0 && !outcomeDriven && heuristics.length === 0 && behavioralEconomics.length === 0 && (
          <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <CardContent className="p-6">
              <p className="text-grey-600 dark:text-grey-300">
                UX principles content coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
