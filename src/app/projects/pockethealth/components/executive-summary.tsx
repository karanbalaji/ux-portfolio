import { Card, CardContent } from "@/components/ui/card"

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="scroll-mt-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            Executive Summary
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
        </div>

        <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-white via-grey-50/50 to-blue-50/30 dark:from-grey-900 dark:via-grey-800/50 dark:to-blue-900/10 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div id="key-metrics" className="scroll-mt-20">
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
                  Key Metrics & Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-green-600 dark:text-green-400">650K → 1.1M</strong> sign-up conversions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-blue-600 dark:text-blue-400">+17%</strong> monthly conversion rate improvement
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-purple-600 dark:text-purple-400">55% → 92%</strong> SEO score improvement
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-orange-600 dark:text-orange-400">+30%</strong> Google Lighthouse performance
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-indigo-600 dark:text-indigo-400">300+</strong> pages with analytics tracking
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-grey-700 dark:text-grey-300">
                        <strong className="text-pink-600 dark:text-pink-400">100+</strong> responsive landing page templates
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="impact-overview" className="scroll-mt-20 pt-6 border-t border-grey-200 dark:border-grey-600">
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
                  Impact Overview
                </h3>
                <div className="prose prose-grey dark:prose-invert max-w-none">
                  <p className="text-grey-700 dark:text-grey-300 leading-relaxed">
                    As a <strong>Design Engineer on the Growth Team</strong> at PocketHealth (Series B), I led patient-centered 
                    UX optimization initiatives that transformed the platform&apos;s conversion funnel. Through mobile-first design, 
                    outcome-driven optimization, and systematic A/B testing, I delivered measurable growth that directly 
                    contributed to the company&apos;s expansion goals.
                  </p>
                  <p className="text-grey-700 dark:text-grey-300 leading-relaxed">
                    My work focused heavily on the patient persona, spanning mobile-first design optimization, UX heuristic 
                    evaluation, and outcome-driven testing. By leveraging tools like Hotjar, Google Optimize, and 
                    Amplitude, I created a scalable framework for continuous optimization that reduced iteration cycles 
                    from weeks to days while maintaining patient-centered user experiences.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 
