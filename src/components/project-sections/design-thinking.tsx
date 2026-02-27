"use client"

import { Search, TestTube, Repeat, Code, BarChart3, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

interface Phase {
  title: string
  description: string
  activities: string[]
  outcomes: string[]
}

interface DesignThinkingData {
  title?: string
  description?: string
  phases?: Phase[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  TestTube,
  Repeat,
  Code,
  BarChart3,
  Target,
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
}

const phaseColors = ["blue", "green", "purple", "orange"]

export default function DesignThinking({ data }: { data: DesignThinkingData }) {
  const { title = "Design Process", description, phases = [] } = data

  return (
    <section id="design-thinking" className="scroll-mt-20">
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

        {phases.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phases.map((phase, index) => {
              const colorClass = colorMap[phaseColors[index % phaseColors.length]]
              const IconComponent = iconMap[Object.keys(iconMap)[index % 4]] || Search
              
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
                      <div>
                        <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                          {phase.title}
                        </h4>
                        <p className="text-sm text-grey-600 dark:text-white">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    {phase.activities && phase.activities.length > 0 && (
                      <div className="space-y-3">
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
                    )}

                    {phase.outcomes && phase.outcomes.length > 0 && (
                      <div className="space-y-3">
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
                    )}
                  </div>
                </HoverShadow>
              )
            })}
          </div>
        )}

        {phases.length === 0 && (
          <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <CardContent className="p-6">
              <p className="text-grey-600 dark:text-grey-300">
                Design thinking content coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
