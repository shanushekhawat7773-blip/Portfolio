"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  FileDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { MagneticButton } from "./MagneticButton";

const NAV_ITEMS = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Recognition", href: "#recognition" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "projects", "about", "skills", "recognition", "github", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A0806]/85 backdrop-blur-xl border-b border-[#FF9A2E]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 group-hover:border-[#FF9A2E] group-hover:shadow-[0_0_15px_rgba(255,154,46,0.4)] transition-all duration-300">
            <span className="font-display text-xl text-[#FF9A2E] group-hover:scale-110 transition-transform">
              A
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF5A1F] shadow-[0_0_6px_#FF5A1F]" />
          </span>

          <div className="flex flex-col">
            <span className="font-display text-lg tracking-wider text-[#F3EDE4] group-hover:text-[#FF9A2E] transition-colors leading-tight">
              ARUN SINGH
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8178]">
              Applied AI & Data Science · IIT Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#14100C]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#FF9A2E]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-300 rounded-full cursor-pointer ${
                  isActive ? "text-[#FFA843]" : "text-[#8A8178] hover:text-[#F3EDE4]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#FF9A2E]/15 border border-[#FF9A2E]/40 shadow-[0_0_12px_rgba(255,154,46,0.3)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Socials & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-[#261F1A] pr-3">
            <a
              href={PERSONAL_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-[#8A8178] hover:text-[#FFA843] hover:bg-[#1A1410] border border-transparent hover:border-[#FF9A2E]/30 transition-all duration-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-[#8A8178] hover:text-[#FFA843] hover:bg-[#1A1410] border border-transparent hover:border-[#FF9A2E]/30 transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.links.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-[#8A8178] hover:text-[#FFA843] hover:bg-[#1A1410] border border-transparent hover:border-[#FF9A2E]/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <MagneticButton strength={0.2}>
            <a
              href="/resume.pdf"
              download="Arun_Singh_AI_ML_Resume.pdf"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-[#F3EDE4] bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] hover:from-[#FFA843] hover:to-[#FF6B1F] shadow-[0_0_20px_rgba(255,154,46,0.35)] hover:shadow-[0_0_30px_rgba(255,154,46,0.6)] transition-all duration-300 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download="Arun_Singh_AI_ML_Resume.pdf"
            aria-label="Resume"
            className="p-2 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 text-[#FFA843]"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 text-[#F3EDE4] hover:text-[#FFA843] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0D0A08]/98 backdrop-blur-2xl border-b border-[#FF9A2E]/25 px-5 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center justify-between py-2 text-left font-mono text-sm uppercase tracking-wider text-[#F3EDE4] hover:text-[#FFA843] border-b border-[#261F1A]/60"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#FF9A2E]">→</span>
                </button>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_DATA.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 text-[#FFA843]"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_DATA.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 text-[#FFA843]"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_DATA.links.email}`}
                    className="p-2.5 rounded-lg bg-[#14100C] border border-[#FF9A2E]/30 text-[#FFA843]"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href="/resume.pdf"
                  download="Arun_Singh_AI_ML_Resume.pdf"
                  className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F]"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
