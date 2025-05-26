import ThreeDMarqueeDemoSecond from "@/components/ui/3d-marquee-demo-2"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "3D Marquee Demo | Karan's Portfolio",
  description: "Demo of the enhanced 3D marquee component with Aceternity UI showcase",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-grey-900 dark:text-grey-50">
          3D Marquee Component Demo
        </h1>
        <ThreeDMarqueeDemoSecond />
      </div>
    </div>
  )
} 