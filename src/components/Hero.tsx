"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  FileDown,
  Sparkles,
  MapPin,
  Mail,
  Award,
  ShieldCheck,
  Cpu,
  Cloud,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { EmberCanvas } from "./EmberCanvas";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();

  // Parallax layers
  const textY = useTransform(scrollY, [0, 800], [0, 90]);
  const photoY = useTransform(scrollY, [0, 800], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.3]);

  // Rotating role text
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_DATA.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#0A0806]"
    >
      {/* Ambient Rising Ember Canvas */}
      <EmberCanvas />

      {/* Side Rail Socials (Desktop) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#FF9A2E]/40" />
        <a
          href={PERSONAL_DATA.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-full text-[#8A8178] hover:text-[#FFA843] hover:bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 transition-all duration-300"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href={PERSONAL_DATA.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2.5 rounded-full text-[#8A8178] hover:text-[#FFA843] hover:bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 transition-all duration-300"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${PERSONAL_DATA.links.email}`}
          aria-label="Send Email"
          className="p-2.5 rounded-full text-[#8A8178] hover:text-[#FFA843] hover:bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#FF9A2E]/40" />
      </div>

      {/* Main Content Area: Split 2-Column Layout */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Typography, Roles, Actions & Badges */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
            {/* Top Eyebrow Badges: Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14100C]/90 border border-[#FF9A2E]/30 text-[#FFA843] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(255,154,46,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#FF9A2E] animate-pulse" />
                <span>BS in Applied AI & Data Science · IIT Jodhpur</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120F0C]/80 border border-[#261F1A] text-[#8A8178] text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#FF7522]" />
                <span>Jaipur, India</span>
              </div>
            </motion.div>

            {/* Giant Title: ARUN SINGH */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight uppercase text-[#F3EDE4]"
            >
              ARUN <span className="text-ember-gradient">SINGH</span>
            </motion.h1>

            {/* Rotating Role Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 my-4 h-9 overflow-hidden">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8178]">
                Role:
              </span>
              <div className="relative h-7 min-w-[260px] sm:min-w-[320px] flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute font-display text-2xl sm:text-3xl text-ember-gradient tracking-wide uppercase"
                  >
                    {PERSONAL_DATA.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-lg sm:text-xl text-[#F3EDE4]/90 font-light leading-relaxed max-w-xl"
            >
              &ldquo;{PERSONAL_DATA.tagline}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-sm sm:text-base text-[#8A8178] leading-relaxed max-w-lg mt-2 font-light"
            >
              Building full-stack AI products across computer vision, fraud prevention, recommendation engines, and mental wellness. From deep learning model to cloud deployment.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <MagneticButton strength={0.25}>
                <button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FFA843] via-[#FF9A2E] to-[#FF5A1F] shadow-[0_0_25px_rgba(255,154,46,0.5)] hover:shadow-[0_0_40px_rgba(255,154,46,0.8)] transition-all duration-300 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href="/resume.pdf"
                  download="Arun_Singh_AI_ML_Resume.pdf"
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#F3EDE4] bg-[#14100C] hover:bg-[#1D1612] border border-[#FF9A2E]/30 hover:border-[#FF9A2E] shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,154,46,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-[#FFA843] group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href={PERSONAL_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#FFA843] bg-[#14100C] hover:bg-[#1D1612] border border-[#FF9A2E]/30 hover:border-[#FF9A2E] transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Badge Pills Row Underneath */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="w-full mt-10 pt-6 border-t border-[#261F1A]/80"
            >
              <div className="flex flex-col items-center lg:items-start gap-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8A8178]">
                  Verified Affiliations & Credentials
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {PERSONAL_DATA.badges.map((badge) => (
                    <div
                      key={badge.title}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120F0C] border border-[#FF9A2E]/20 hover:border-[#FF9A2E]/60 hover:bg-[#1A1410] transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E]" />
                      <span className="font-mono text-xs text-[#F3EDE4]/90 group-hover:text-[#FFA843] transition-colors">
                        {badge.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Arun's Seamless Cutout (NO borders, NO boxes, Clean Amber Rim Glow) */}
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center relative z-10"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] flex items-center justify-center">
              {/* Backlit slow-breathing amber aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/35 via-[#FF9A2E]/25 to-transparent blur-[80px] pointer-events-none z-0 animate-glow-breathe" />

              {/* Seamless Cutout Image without ANY bounding boxes or line borders */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <Image
                  src="/arun-cutout.png"
                  alt="Portrait of Arun Singh"
                  width={440}
                  height={560}
                  priority
                  unoptimized
                  className="w-auto h-auto max-h-[480px] sm:max-h-[560px] object-contain drop-shadow-[0_0_35px_rgba(255,154,46,0.45)] drop-shadow-[6px_-6px_20px_rgba(255,90,31,0.5)] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
