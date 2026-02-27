"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize2, X, ArrowRight, Target, Layout, Smartphone, CheckCircle, AlertCircle, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Step {
  step: string
  description: string
  improvements?: string[]
  impact?: string
}

interface FlowSection {
  title: string
  content: string[]
}

interface Flow {
  title: string
  description: string
  steps?: Step[]
  mermaidDiagram?: string
  sections?: FlowSection[]
}

interface BeforeAfter {
  category: string
  before: { title: string; issues: string[]; metrics: string }
  after: { title: string; improvements: string[]; metrics: string }
}

interface FlowMetric {
  metric: string
  improvement: string
  description: string
}

interface UserFlowsData {
  title?: string
  description?: string
  flows?: Flow[]
  beforeAfter?: BeforeAfter[]
  flowMetrics?: FlowMetric[]
}

// ─── Mermaid Modal ────────────────────────────────────────────────────────────

interface MermaidModalProps {
  isOpen: boolean
  onClose: () => void
  diagram: string
  title: string
  id: string
}

function MermaidModal({ isOpen, onClose, diagram, title, id }: MermaidModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const renderDiagram = async () => {
        try {
          const mermaid = await import("mermaid")
          mermaid.default.initialize({
            startOnLoad: false,
            theme: "base",
            themeVariables: {
              primaryColor: "#e1f5fe",
              primaryTextColor: "#1a202c",
              primaryBorderColor: "#90cdf4",
              lineColor: "#4a5568",
              secondaryColor: "#f7fafc",
              tertiaryColor: "#edf2f7",
              background: "#ffffff",
              mainBkg: "#ffffff",
              secondBkg: "#f7fafc",
            },
            flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
          })
          if (modalRef.current) {
            modalRef.current.innerHTML = ""
            const { svg } = await mermaid.default.render(`modal-mermaid-${id}`, diagram.trim())
            modalRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error("Mermaid modal rendering failed:", error)
          if (modalRef.current) {
            modalRef.current.innerHTML = `<div class="p-8 text-center text-grey-500"><p class="text-lg font-medium mb-2">Diagram could not be rendered</p></div>`
          }
        }
      }
      renderDiagram()
    }
  }, [isOpen, diagram, id])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-grey-900 rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-grey-200 dark:border-grey-700">
          <h3 className="text-lg font-semibold text-grey-900 dark:text-grey-50">{title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div
            ref={modalRef}
            className="w-full h-full flex items-center justify-center min-h-[400px]"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Mermaid Inline Diagram ───────────────────────────────────────────────────

function MermaidDiagram({
  diagram,
  id,
  onViewFull,
}: {
  diagram: string
  id: string
  onViewFull: () => void
}) {
  const [svgContent, setSvgContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const renderDiagram = async () => {
      if (!isMounted) return
      setIsLoading(true)
      setError(null)
      try {
        const mermaid = await import("mermaid")
        if (!isMounted) return
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: "#e1f5fe",
            primaryTextColor: "#1a202c",
            primaryBorderColor: "#90cdf4",
            lineColor: "#4a5568",
            secondaryColor: "#f7fafc",
            tertiaryColor: "#edf2f7",
            background: "#ffffff",
            mainBkg: "#ffffff",
            secondBkg: "#f7fafc",
          },
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
        })
        if (!isMounted) return
        const uniqueId = `mermaid-${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        const result = await mermaid.default.render(uniqueId, diagram.trim())
        if (isMounted) {
          setSvgContent(result.svg)
          setIsLoading(false)
        }
      } catch (err) {
        console.error(`Mermaid rendering failed for ${id}:`, err)
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Rendering failed")
          setIsLoading(false)
        }
      }
    }
    const timer = setTimeout(renderDiagram, 100)
    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [diagram, id])

  return (
    <div className="relative">
      <div className="w-full overflow-x-auto">
        <div className="bg-white dark:bg-grey-900 p-4 rounded-lg border border-grey-200 dark:border-grey-700 min-h-[300px] flex items-center justify-center">
          {isLoading && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-grey-500">Loading diagram...</p>
            </div>
          )}
          {!isLoading && error && (
            <div className="w-full p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Diagram Preview Unavailable
              </h4>
              <p className="text-sm text-yellow-600 dark:text-yellow-300 mb-4">
                This diagram can be viewed in fullscreen mode
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={onViewFull}
                className="bg-yellow-600 text-white hover:bg-yellow-700 border-yellow-600"
              >
                View Full Diagram
              </Button>
            </div>
          )}
          {!isLoading && !error && svgContent && (
            <div
              className="w-full mermaid-svg-container"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          )}
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onViewFull}
          className="bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm border border-grey-200 dark:border-grey-700 hover:bg-white dark:hover:bg-grey-800"
        >
          <Maximize2 className="h-4 w-4 mr-1" />
          View Full
        </Button>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const flowColors = ["green", "blue", "purple"]
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Layout,
  Smartphone,
}
const colorMap: Record<string, string> = {
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
}

export default function UserFlows({ data }: { data: UserFlowsData }) {
  const { title = "User Flows", description, flows = [], beforeAfter = [], flowMetrics = [] } = data

  const [modalState, setModalState] = useState<{
    isOpen: boolean
    diagram: string
    title: string
    id: string
  }>({ isOpen: false, diagram: "", title: "", id: "" })

  // Separate flows that have Mermaid diagrams from those that use the step-card format
  const mermaidFlows = flows.filter((f) => f.mermaidDiagram)
  const stepFlows = flows.filter((f) => !f.mermaidDiagram && f.steps && f.steps.length > 0)

  return (
    <>
      <section id="user-flows" className="scroll-mt-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
              {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
            {description && (
              <p className="text-lg text-grey-600 dark:text-white max-w-3xl">{description}</p>
            )}
          </div>

          {/* Section-level tab switcher for mermaid flows (fintechtoronto) */}
          {mermaidFlows.length > 0 && (
            <Tabs defaultValue="diagrams" className="w-full">
              {/* Tab bar sits right after the description */}
              <TabsList className="mb-6 bg-grey-100 dark:bg-grey-900 border border-grey-200 dark:border-grey-700">
                <TabsTrigger
                  value="diagrams"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-grey-800 data-[state=active]:text-grey-900 dark:data-[state=active]:text-grey-50 text-grey-600 dark:text-grey-400"
                >
                  Flow Diagrams
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-grey-800 data-[state=active]:text-grey-900 dark:data-[state=active]:text-grey-50 text-grey-600 dark:text-grey-400"
                >
                  Details
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: All flows as accordions with Mermaid diagrams */}
              <TabsContent value="diagrams">
                <Accordion type="single" collapsible className="space-y-4">
                  {mermaidFlows.map((flow) => {
                    const flowId = flow.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
                    return (
                      <AccordionItem
                        key={flow.title}
                        value={flow.title}
                        className="border border-grey-200 dark:border-grey-700 rounded-xl px-6 shadow-sm bg-white dark:bg-grey-800"
                      >
                        <AccordionTrigger className="py-5 text-xl font-semibold text-grey-900 dark:text-grey-50 hover:no-underline">
                          {flow.title}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-6">
                          <MermaidDiagram
                            diagram={flow.mermaidDiagram!}
                            id={flowId}
                            onViewFull={() =>
                              setModalState({
                                isOpen: true,
                                diagram: flow.mermaidDiagram!,
                                title: flow.title,
                                id: flowId,
                              })
                            }
                          />
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </TabsContent>

              {/* Tab 2: All flows as readable cards */}
              <TabsContent value="details">
                <div className="space-y-8">
                  {mermaidFlows.map((flow, flowIndex) => (
                    <div key={flowIndex}>
                      <h3 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
                        {flow.title}
                      </h3>
                      {flow.sections && flow.sections.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {flow.sections.map((section, idx) => (
                            <Card
                              key={idx}
                              className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-900"
                            >
                              <CardContent className="p-5">
                                <h4 className="text-sm font-semibold text-grey-900 dark:text-grey-50 mb-3 pb-2 border-b border-grey-200 dark:border-grey-700">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.content.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-xs text-grey-600 dark:text-grey-300 flex items-start gap-2 leading-relaxed"
                                    >
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}

          {/* Step-card flows (pockethealth format) */}
          {stepFlows.length > 0 &&
            stepFlows.map((flow, flowIndex) => {
              const colorClass = colorMap[flowColors[flowIndex % flowColors.length]]
              const IconComponent = iconMap[Object.keys(iconMap)[flowIndex % 3]] || Target

              return (
                <div key={flowIndex} className="space-y-6">
                  <div
                    id={flow.title.toLowerCase().replace(/\s+/g, "-")}
                    className="scroll-mt-20"
                  >
                    <HoverShadow
                      as="div"
                      containerClassName="rounded-xl"
                      className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                      shadowIntensity="medium"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl ${colorClass}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50">
                            {flow.title}
                          </h3>
                          {flow.description && (
                            <p className="text-sm text-grey-600 dark:text-white">{flow.description}</p>
                          )}
                        </div>
                      </div>

                      {flow.steps && flow.steps.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                          {flow.steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="relative p-4 rounded-lg bg-grey-50 dark:bg-grey-900 border border-grey-200 dark:border-grey-700"
                            >
                              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {stepIndex + 1}
                              </div>
                              <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2 ml-2">
                                {step.step}
                              </h4>
                              <p className="text-xs text-grey-600 dark:text-grey-300 mb-3 ml-2">
                                {step.description}
                              </p>
                              {step.improvements && step.improvements.length > 0 && (
                                <div className="space-y-1 mb-3 ml-2">
                                  <p className="text-xs font-medium text-grey-900 dark:text-grey-50">
                                    Key Improvements:
                                  </p>
                                  {step.improvements.map((imp, idx) => (
                                    <p
                                      key={idx}
                                      className="text-xs text-green-600 dark:text-green-400 flex items-start gap-1"
                                    >
                                      <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                      {imp}
                                    </p>
                                  ))}
                                </div>
                              )}
                              {step.impact && (
                                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded ml-2">
                                  Impact: {step.impact}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </HoverShadow>
                  </div>
                </div>
              )
            })}

          {/* Before/After Comparison */}
          {beforeAfter.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
                Before vs After Comparison
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {beforeAfter.map((comparison, index) => (
                  <Card
                    key={index}
                    className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
                        {comparison.category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <h5 className="text-sm font-semibold text-red-600 dark:text-red-400">
                              {comparison.before.title}
                            </h5>
                          </div>
                          <ul className="space-y-1">
                            {comparison.before.issues.map((issue, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-grey-600 dark:text-white flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                {issue}
                              </li>
                            ))}
                          </ul>
                          <div className="text-xs text-grey-500 dark:text-grey-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                            {comparison.before.metrics}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <h5 className="text-sm font-semibold text-green-600 dark:text-green-400">
                              {comparison.after.title}
                            </h5>
                          </div>
                          <ul className="space-y-1">
                            {comparison.after.improvements.map((improvement, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-grey-600 dark:text-white flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                {improvement}
                              </li>
                            ))}
                          </ul>
                          <div className="text-xs text-grey-500 dark:text-grey-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                            {comparison.after.metrics}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Flow Metrics */}
          {flowMetrics.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
                Flow Optimization Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flowMetrics.map((metric, index) => {
                  const icons = [TrendingUp, BarChart3, Smartphone, Zap]
                  const IconComponent = icons[index % 4]
                  return (
                    <Card
                      key={index}
                      className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800"
                    >
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                              {metric.improvement}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-grey-900 dark:text-grey-50">
                              {metric.metric}
                            </div>
                            <div className="text-xs text-grey-600 dark:text-white leading-relaxed">
                              {metric.description}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {flows.length === 0 && beforeAfter.length === 0 && flowMetrics.length === 0 && (
            <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
              <CardContent className="p-6">
                <p className="text-grey-600 dark:text-grey-300">User flows content coming soon.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <MermaidModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        diagram={modalState.diagram}
        title={modalState.title}
        id={modalState.id}
      />
    </>
  )
}
