import { Card, CardContent } from "@/components/ui/card"

interface TechStackData {
  title: string;
  description?: string;
  [key: string]: any;
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

        {/* Render tech stack content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.categories && Array.isArray(data.categories) && data.categories.map((category: any, index: number) => (
            <Card key={index} className="border border-grey-200 dark:border-grey-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-4">
                  {category.title}
                </h3>
                {category.tools && Array.isArray(category.tools) && (
                  <ul className="space-y-2">
                    {category.tools.map((tool: any, idx: number) => (
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
      </div>
    </section>
  );
}
