import { Card, CardContent } from "@/components/ui/card"

interface TechItem {
  tech: string
  value: string
}

interface ComponentLibraries {
  shadcn?: string[]
  radix?: string[]
  magicUI?: string[]
}

interface FrontendData {
  coreTechnologies?: TechItem[]
  testingDevOps?: TechItem[]
  componentLibraries?: ComponentLibraries
}

interface BackendData {
  databaseAuth?: TechItem[]
  apiArchitecture?: TechItem[]
  performance?: TechItem[]
  integrations?: TechItem[]
}

interface FuturePlan {
  challenge?: string
  enhancement?: string
  description?: string
  solutions?: string[]
  features?: string[]
}

interface FuturePlansData {
  userMotivation?: FuturePlan
  contentModeration?: FuturePlan
  collaboration?: FuturePlan
}

interface TechCategory {
  title: string
  tools?: Array<{ name: string; purpose: string }>
}

interface TechStackData {
  title: string
  description?: string
  // PocketHealth format
  categories?: TechCategory[]
  // FintechToronto format
  frontend?: FrontendData
  backend?: BackendData
  futurePlans?: FuturePlansData
}

function TechItemList({ items }: { items: TechItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-2 text-sm">
          <span className="font-medium text-grey-900 dark:text-grey-50 min-w-[130px] flex-shrink-0">{item.tech}:</span>
          <span className="text-grey-600 dark:text-grey-300">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function TechStack({ data }: { data: TechStackData }) {
  return (
    <section id="tech-stack" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
          {data.description && (
            <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
              {data.description}
            </p>
          )}
        </div>

        {/* PocketHealth format: flat categories array */}
        {data.categories && Array.isArray(data.categories) && data.categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.categories.map((category, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
                    {category.title}
                  </h3>
                  {category.tools && Array.isArray(category.tools) && (
                    <ul className="space-y-2">
                      {category.tools.map((tool, idx) => (
                        <li key={idx} className="text-sm text-grey-600 dark:text-grey-300">
                          <strong>{tool.name}:</strong> {tool.purpose}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* FintechToronto format: nested frontend/backend/futurePlans */}
        {data.frontend && (
          <div id="frontend" className="scroll-mt-20 space-y-4">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">
              Frontend Technologies
            </h3>

            {data.frontend.coreTechnologies && data.frontend.coreTechnologies.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Core Technologies</h4>
                  <TechItemList items={data.frontend.coreTechnologies} />
                </CardContent>
              </Card>
            )}

            {data.frontend.testingDevOps && data.frontend.testingDevOps.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Testing & DevOps</h4>
                  <TechItemList items={data.frontend.testingDevOps} />
                </CardContent>
              </Card>
            )}

            {data.frontend.componentLibraries && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Component Libraries</h4>
                  <div className="space-y-4">
                    {data.frontend.componentLibraries.shadcn && data.frontend.componentLibraries.shadcn.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-grey-700 dark:text-grey-300 mb-2">shadcn/ui Components</h5>
                        <div className="flex flex-wrap gap-2">
                          {data.frontend.componentLibraries.shadcn.map((item, idx) => (
                            <span key={idx} className="text-xs bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-300 px-2 py-1 rounded">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {data.frontend.componentLibraries.radix && data.frontend.componentLibraries.radix.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-grey-700 dark:text-grey-300 mb-2">Radix UI Primitives</h5>
                        <div className="flex flex-wrap gap-2">
                          {data.frontend.componentLibraries.radix.map((item, idx) => (
                            <span key={idx} className="text-xs bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-300 px-2 py-1 rounded">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {data.frontend.componentLibraries.magicUI && data.frontend.componentLibraries.magicUI.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-grey-700 dark:text-grey-300 mb-2">Magic UI Components</h5>
                        <div className="flex flex-wrap gap-2">
                          {data.frontend.componentLibraries.magicUI.map((item, idx) => (
                            <span key={idx} className="text-xs bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-300 px-2 py-1 rounded">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {data.backend && (
          <div id="backend" className="scroll-mt-20 space-y-4">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">
              Backend & Infrastructure
            </h3>

            {data.backend.databaseAuth && data.backend.databaseAuth.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Database & Authentication</h4>
                  <TechItemList items={data.backend.databaseAuth} />
                </CardContent>
              </Card>
            )}

            {data.backend.apiArchitecture && data.backend.apiArchitecture.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">API Architecture</h4>
                  <TechItemList items={data.backend.apiArchitecture} />
                </CardContent>
              </Card>
            )}

            {data.backend.performance && data.backend.performance.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Performance Optimization</h4>
                  <TechItemList items={data.backend.performance} />
                </CardContent>
              </Card>
            )}

            {data.backend.integrations && data.backend.integrations.length > 0 && (
              <Card className="border border-grey-200 dark:border-grey-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">Integrations</h4>
                  <TechItemList items={data.backend.integrations} />
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {data.futurePlans && (
          <div id="infrastructure" className="scroll-mt-20 space-y-4">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">
              Future Plans & Roadmap
            </h3>
            {Object.values(data.futurePlans).map((plan, index) => (
              <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2">
                    {plan.challenge || plan.enhancement}
                  </h4>
                  {plan.description && (
                    <p className="text-sm text-grey-600 dark:text-grey-300 mb-3">{plan.description}</p>
                  )}
                  {(plan.solutions || plan.features) && (
                    <ul className="space-y-1">
                      {(plan.solutions || plan.features || []).map((item: string, idx: number) => (
                        <li key={idx} className="text-xs text-grey-600 dark:text-grey-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
