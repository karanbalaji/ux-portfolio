import dynamic from 'next/dynamic'
import { HeroSection } from "@/components/hero-section"
// import { AboutSection } from "@/components/about-section" 
// import { ProjectsSection } from "@/components/projects-section" 
// import { StaticBlogSection } from "@/components/static-blog-section"
// import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { BottomNavigation } from "@/components/bottom-navigation"

const AboutSection = dynamic(() => import('@/components/about-section').then(mod => mod.AboutSection))
const ProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => mod.ProjectsSection))
const StaticBlogSection = dynamic(() => import('@/components/static-blog-section').then(mod => mod.StaticBlogSection))
const ContactSection = dynamic(() => import('@/components/contact-section').then(mod => mod.ContactSection))
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer))
const BottomNavigation = dynamic(() => import('@/components/bottom-navigation').then(mod => mod.BottomNavigation))

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
