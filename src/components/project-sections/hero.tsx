import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
  coverImage: string;
}

export default function Hero({ data }: { data: HeroData }) {
  // Determine gradient colors based on project
  const isFintech = data.title.includes("Fintech");
  const gradientClass = isFintech
    ? "text-tertiary"
    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600";

  const badgeClass = isFintech
    ? "bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-50 border-grey-200 dark:border-grey-700"
    : "bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700";

  const buttonClass = isFintech
    ? "bg-primary hover:bg-primary/90 text-white dark:bg-white dark:hover:bg-grey-100 dark:text-grey-900"
    : "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white";

  return (
    <section className="relative py-28 bg-gradient-to-b from-grey-50 via-background to-background dark:from-grey-900/50 dark:via-background dark:to-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link href="/#projects" passHref>
          <Button variant="ghost" size="sm" className="mb-8 gap-2 hover:bg-grey-100 dark:hover:bg-grey-800">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-4">
          <div className={`inline-block px-4 py-1.5 rounded-full border text-sm font-semibold mb-2 ${badgeClass}`}>
            {data.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-grey-900 dark:text-grey-50">
            {data.title.split(": ").map((part, index) => (
              <span key={index}>
                {index > 0 && ": "}
                {index === data.title.split(": ").length - 1 ? (
                  <>
                    <br className="hidden md:block" />
                    <span className={gradientClass}>{part}</span>
                  </>
                ) : (
                  part
                )}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-grey-600 dark:text-white max-w-3xl mt-4">
            {data.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Button
            size="lg"
            className={`${buttonClass} px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
            asChild
          >
            <Link
              href={data.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              {data.ctaText}
            </Link>
          </Button>
        </div>

        <div className="mt-12 relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden bg-grey-50 dark:bg-grey-800 border border-grey-200 dark:border-grey-700 shadow-lg">
          <Image
            src={data.coverImage}
            alt={`${data.title} platform interface`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 4rem), 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
