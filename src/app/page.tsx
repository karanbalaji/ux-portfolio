import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section" 
import { ProjectsSection } from "@/components/projects-section" 
import { BlogSectionServer } from "@/components/blog-section-server"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSectionServer />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
