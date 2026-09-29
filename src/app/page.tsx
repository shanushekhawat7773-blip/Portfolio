import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Recognition } from "@/components/Recognition";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#0A0806] text-[#F3EDE4]">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Hero Signature Moment */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Recognition Section */}
      <Recognition />

      {/* GitHub Repositories Section */}
      <GitHubSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer with Bleeding Wordmark */}
      <Footer />
    </main>
  );
}
