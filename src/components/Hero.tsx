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
  const textY = useTransform(scrollY, [0, 800], [0, 180]);
  const photoY = useTransform(scrollY, [0, 800], [0, 70]);
  const glowY = useTransform(scrollY, [0, 800], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.35]);

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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0A0806]"
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

      {/* Main Content Area */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center"
      >
        {/* Top Eyebrow Badges: Location & Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14100C]/80 border border-[#FF9A2E]/25 text-[#FFA843] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(255,154,46,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#FF9A2E] animate-pulse" />
            <span>AI/ML Scholar · IIT Jodhpur</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120F0C]/80 border border-[#261F1A] text-[#8A8178] text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#FF7522]" />
            <span>Jaipur, India</span>
          </div>
        </motion.div>

        {/* Central Stage: Giant Text + Ember Glow + Portrait Cutout */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-2 sm:my-4">
          {/* Giant Outlined / Burning Type BEHIND Arun */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            aria-hidden="true"
            className="absolute -top-6 sm:-top-10 md:-top-16 inset-x-0 flex flex-col items-center justify-center select-none pointer-events-none z-0"
          >
            <h1 className="font-display text-[15vw] md:text-[13vw] lg:text-[140px] leading-[0.85] tracking-tight uppercase whitespace-nowrap text-center text-stroke-cinder">
              ARUN SINGH
            </h1>
            <span className="text-[2.2vw] md:text-[1.8vw] lg:text-[18px] font-mono tracking-[0.35em] uppercase text-[#FF9A2E]/25 mt-1">
              INTELLIGENCE · VISION · DEFENSE
            </span>
          </motion.div>

          {/* Slow-Breathing Ember Glow Behind Arun's Shoulders */}
          <motion.div
            style={{ y: glowY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] md:w-[540px] h-[300px] sm:h-[420px] md:h-[540px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/35 via-[#FF9A2E]/25 to-transparent blur-[85px] sm:blur-[110px] pointer-events-none z-1 animate-glow-breathe"
          />

          {/* Secondary Core Rim Glow */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FF7522]/20 blur-[60px] pointer-events-none z-1" />

          {/* Arun's Portrait inside a rounded cinematic frame with amber rim glow */}
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] flex items-center justify-center pt-6 sm:pt-8"
          >
            <div className="relative group w-full flex items-center justify-center">
              {/* Backlit Ember Glow behind frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FF5A1F]/30 via-[#FF9A2E]/20 to-transparent blur-2xl pointer-events-none" />

              {/* Framed Portrait Container */}
              <div className="relative w-full rounded-2xl bg-[#14100C] border border-[#FF9A2E]/40 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden group-hover:border-[#FF9A2E] transition-all duration-500">
                <div className="relative rounded-xl overflow-hidden bg-[#0A0806]">
                  <Image
                    src="/arun-original.jpg"
                    alt="Portrait of Arun Singh"
                    width={360}
                    height={465}
                    priority
                    unoptimized
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Cinematic dark vignette & amber rim light overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.7)_95%)]" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_35px_rgba(255,154,46,0.35)]" />

                  {/* Grain Overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25 bg-[radial-gradient(#FF9A2E_1px,transparent_1px)] [background-size:12px_12px]"
                  />

                  {/* Technical corner brackets */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#FF9A2E]" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#FF9A2E]" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#FF9A2E]" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#FF9A2E]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rotating Role Line */}
        <div className="relative z-20 flex items-center justify-center gap-2 mt-4 sm:mt-6 h-9 overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8178]">
            Specialization:
          </span>
          <div className="relative h-7 min-w-[280px] sm:min-w-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute font-display text-xl sm:text-2xl text-ember-gradient tracking-wide uppercase"
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 max-w-2xl font-sans text-base sm:text-lg text-[#F3EDE4]/90 font-light mt-2 sm:mt-3 leading-relaxed"
        >
          &ldquo;{PERSONAL_DATA.tagline}&rdquo;
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="relative z-20 flex flex-wrap items-center justify-center gap-4 mt-7"
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
        </motion.div>

        {/* Badge Pills Row Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-20 w-full max-w-4xl mt-12 pt-6 border-t border-[#261F1A]/80"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8A8178]">
              Credentials & Affiliations
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {PERSONAL_DATA.badges.map((badge) => (
                <div
                  key={badge.title}
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120F0C] border border-[#FF9A2E]/20 hover:border-[#FF9A2E]/60 hover:bg-[#1A1410] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E] group-hover:scale-125 transition-transform" />
                  <span className="font-mono text-xs text-[#F3EDE4]/90 group-hover:text-[#FFA843] transition-colors">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
