import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface Metric {
  label: string;
  value?: string;
  prefix?: string; // e.g., "650K → 1.1M" or just use value for both
  color?: string; // e.g. "green", "blue"
  description?: string;
}

export interface ExecutiveSummaryData {
  title?: string;
  content?: string[]; // Array of paragraphs
  metrics?: Metric[] | string[]; // Array of objects or simple strings
  impact?: string[]; // Array of paragraphs for impact overview
  variant?: "simple" | "card"; // Default to simple
}

export default function ExecutiveSummary({ data }: { data: ExecutiveSummaryData }) {
  const { title = "Executive Summary", content, metrics, impact, variant = "simple" } = data;

  if (variant === "card") {
    return (
      <section id="executive-summary" className="scroll-mt-20">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
              {title}
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
                    {/* Split metrics into two columns roughly */}
                    <div className="space-y-4">
                      {Array.isArray(metrics) && metrics.slice(0, Math.ceil(metrics.length / 2)).map((m, i) => (
                        <MetricItem key={i} metric={m} />
                      ))}
                    </div>
                    <div className="space-y-4">
                      {Array.isArray(metrics) && metrics.slice(Math.ceil(metrics.length / 2)).map((m, i) => (
                        <MetricItem key={i} metric={m} />
                      ))}
                    </div>
                  </div>
                </div>

                {impact && (
                  <div id="impact-overview" className="scroll-mt-20 pt-6 border-t border-grey-200 dark:border-grey-600">
                    <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
                      Impact Overview
                    </h3>
                    <div className="prose prose-grey dark:prose-invert max-w-none">
                      {impact.map((paragraph, i) => (
                        <p key={i} className="text-grey-700 dark:text-grey-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Simple Variant (Fintech Toronto style)
  return (
    <section id="executive-summary" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">{title}</h2>
      <div className="space-y-6 text-grey-600 dark:text-grey-50">
        {content?.map((paragraph, i) => (
          <p key={i} className="text-lg" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
        
        {metrics && metrics.length > 0 && (
          <div className="mt-8 p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <h3 className="text-lg font-semibold mb-4 text-grey-900 dark:text-grey-50">Key Metrics & Expected Outcomes:</h3>
            <ul className="space-y-3 list-disc pl-5">
              {metrics.map((m, i) => (
                <li key={i}>
                  {typeof m === 'string' ? m : (
                    <span>
                      {m.value && <strong>{m.value} </strong>}
                      {m.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function MetricItem({ metric }: { metric: Metric | string }) {
  if (typeof metric === 'string') return <div>{metric}</div>;

  const colorMap: Record<string, string> = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    indigo: "bg-indigo-500",
    pink: "bg-pink-500",
  };
  
  const textColorMap: Record<string, string> = {
    green: "text-green-600 dark:text-green-400",
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    pink: "text-pink-600 dark:text-pink-400",
  };

  const bgClass = colorMap[metric.color || "blue"] || "bg-blue-500";
  const textClass = textColorMap[metric.color || "blue"] || "text-blue-600 dark:text-blue-400";

  return (
    <div className="flex items-center gap-3">
      <div className={cn("w-3 h-3 rounded-full", bgClass)}></div>
      <span className="text-grey-700 dark:text-grey-300">
        {metric.value && <strong className={textClass}>{metric.value} </strong>}
        {metric.label}
      </span>
    </div>
  );
}
