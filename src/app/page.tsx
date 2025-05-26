import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section" 
import { ProjectsSection } from "@/components/projects-section" 
import { StaticBlogSection } from "@/components/static-blog-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StaticBlogSection />
        <ContactSection />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
