import { Card, CardContent } from "@/components/ui/card"

interface ProblemStatementData {
  title: string;
  description: string;
  [key: string]: any;
}

export default function ProblemStatement({ data }: { data: ProblemStatementData }) {
  return (
    <section id="problem-statement" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
          <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
            {data.description}
          </p>
        </div>

        {/* Render other dynamic content here */}
        {data.challenges && (
          <div>
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Key Challenges
            </h3>
            {/* Challenge cards will go here */}
          </div>
        )}

        {data.personas && (
          <div>
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              User Personas
            </h3>
            {/* Persona cards will go here */}
          </div>
        )}
      </div>
    </section>
  );
}
