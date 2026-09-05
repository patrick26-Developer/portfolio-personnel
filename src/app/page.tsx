import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Courses } from "@/components/sections/courses";
import { DataScience } from "@/components/sections/data-science";
import { DesktopApps } from "@/components/sections/desktop-apps";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GithubHighlights } from "@/components/sections/github-highlights";
import { Hero } from "@/components/sections/hero";
import { MobileApps } from "@/components/sections/mobile-apps";
import { Skills } from "@/components/sections/skills";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <MobileApps />
        <DesktopApps />
        <GithubHighlights />
        <DataScience />
        <Skills />
        <Certifications />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
