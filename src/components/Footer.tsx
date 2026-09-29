"use client";

import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070504] pt-20 pb-0 overflow-hidden border-t border-[#1C1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#14100C] border border-[#FF9A2E]/40 text-[#FFA843] font-display text-lg">
                A
              </span>
              <span className="font-display text-2xl tracking-wider text-[#F3EDE4]">
                ARUN SINGH
              </span>
            </div>
            <p className="font-sans text-sm text-[#8A8178] max-w-sm leading-relaxed font-light">
              Engineering autonomous AI systems across computer vision, fraud prevention, and predictive intelligence at IIT Jodhpur.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-[#120F0C] border border-[#261F1A] text-[#8A8178] hover:text-[#FFA843] hover:border-[#FF9A2E]/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-[#120F0C] border border-[#261F1A] text-[#8A8178] hover:text-[#FFA843] hover:border-[#FF9A2E]/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DATA.links.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-[#120F0C] border border-[#261F1A] text-[#8A8178] hover:text-[#FFA843] hover:border-[#FF9A2E]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF9A2E]">
              Navigation
            </span>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider text-[#8A8178]">
              <li>
                <a href="#projects" className="hover:text-[#F3EDE4] transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3EDE4] transition-colors">
                  Biography & Profile
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F3EDE4] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#recognition" className="hover:text-[#F3EDE4] transition-colors">
                  Global Recognition
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-[#F3EDE4] transition-colors">
                  GitHub Repos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3EDE4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Status and Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF9A2E] block mb-3 md:text-right">
                Status
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120F0C] border border-[#FF9A2E]/30 text-xs font-mono text-[#FFA843]">
                <span className="w-2 h-2 rounded-full bg-[#38D39F] animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 text-[#8A8178] hover:text-[#FFA843] transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-8 pb-10 border-t border-[#1C1612] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A8178]">
          <p>© 2026 Arun Singh. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted for AI/ML excellence at IIT Jodhpur</span>
          </p>
        </div>
      </div>

      {/* Oversized "ARUN SINGH" wordmark bleeding off the bottom */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none -mb-4 sm:-mb-8 md:-mb-12">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070504] to-transparent z-10" />
        <h2 className="font-display text-[19vw] leading-[0.75] tracking-tight uppercase text-center text-stroke-cinder whitespace-nowrap opacity-40 hover:opacity-75 transition-opacity">
          ARUN SINGH
        </h2>
      </div>
    </footer>
  );
}
