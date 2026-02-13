import { Clock, Users, Zap, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

interface Fact {
  label: string;
  value: string;
  description: string;
  icon: string;
}

interface QuickFactsData {
  facts: Fact[];
  tags: string[];
}

const iconMap: Record<string, any> = {
  Clock,
  Users,
  Zap,
  TrendingUp
};

const colorMap: Record<string, string> = {
  Clock: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  Users: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  Zap: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  TrendingUp: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
};

export default function QuickFacts({ data }: { data: QuickFactsData }) {
  return (
    <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-white via-grey-50/50 to-primary/5 dark:from-grey-900 dark:via-grey-800/50 dark:to-primary/10 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-6 lg:mb-8">
          <h3 className="text-lg lg:text-xl font-bold text-grey-900 dark:text-grey-50 mb-2">
            Project Overview
          </h3>
          <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Mobile Layout - Compact Horizontal */}
        <div className="block lg:hidden space-y-3">
          {data.facts.map((fact, index) => {
            const IconComponent = iconMap[fact.icon]
            const color = colorMap[fact.icon]

            return (
              <div key={index} className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${color} flex-shrink-0`}>
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="text-lg font-bold text-grey-900 dark:text-grey-50 truncate">
                        {fact.value}
                      </div>
                      <div className="text-xs font-medium text-grey-700 dark:text-white uppercase tracking-wide flex-shrink-0">
                        {fact.label}
                      </div>
                    </div>
                    <div className="text-xs text-grey-500 dark:text-grey-400 mt-1">
                      {fact.description}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop Layout - Original Cards */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {data.facts.map((fact, index) => {
            const IconComponent = iconMap[fact.icon]
            const color = colorMap[fact.icon]

            return (
              <div key={index} className="group">
                <HoverShadow
                  as="div"
                  containerClassName="rounded-xl"
                  className="bg-white dark:bg-grey-800 p-6 rounded-xl"
                  shadowIntensity="medium"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                        {fact.value}
                      </div>
                      <div className="text-sm font-medium text-grey-700 dark:text-white uppercase tracking-wide">
                        {fact.label}
                      </div>
                      <div className="text-xs text-grey-500 dark:text-grey-400 leading-relaxed">
                        {fact.description}
                      </div>
                    </div>
                  </div>
                </HoverShadow>
              </div>
            )
          })}
        </div>

        <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-grey-200 dark:border-grey-600">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 text-xs text-grey-500 dark:text-grey-400">
            {data.tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-tertiary'}`}></div>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
