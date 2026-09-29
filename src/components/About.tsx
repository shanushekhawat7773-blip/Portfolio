"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Flame,
  Award,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 bg-[#0D0907] overflow-hidden">
      {/* Scroll-drawing divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-[#FF9A2E]/40 to-transparent"
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF9A2E] mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF9A2E]" />
            <span>Profile & Ethos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F3EDE4] tracking-tight uppercase"
          >
            THE MIND BEHIND <span className="text-ember-gradient">THE CODE</span>
          </motion.h2>
        </div>

        {/* Content Grid: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Backlit Ember Glow behind frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FF5A1F]/30 via-[#FF9A2E]/20 to-transparent blur-2xl pointer-events-none" />

              {/* Framed Cinematic Card */}
              <div className="relative rounded-2xl bg-[#14100C] border border-[#FF9A2E]/30 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden group">
                {/* Photo with ember rim light & seamless blend */}
                <div className="relative rounded-xl overflow-hidden bg-transparent flex justify-center">
                  <Image
                    src="/arun-cutout.png"
                    alt="Portrait of Arun Singh"
                    width={400}
                    height={480}
                    unoptimized
                    className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(255,154,46,0.35)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card footer details */}
                <div className="mt-4 pt-3 border-t border-[#261F1A] flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-[#F3EDE4]">ARUN SINGH</h3>
                    <p className="font-mono text-[11px] text-[#FFA843]">IIT JODHPUR · AI/ML</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1711] border border-[#FF9A2E]/30 text-xs font-mono text-[#8A8178]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF9A2E]" />
                    <span>Jaipur, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              <h3 className="font-display text-2xl sm:text-3xl text-[#FFA843] tracking-wide">
                &ldquo;ENGINEERING ROBUST INTELLIGENCE FOR PHYSICAL & DIGITAL SAFETY.&rdquo;
              </h3>

              {PERSONAL_DATA.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="font-sans text-base sm:text-lg text-[#F3EDE4]/85 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}

              {/* Institution badge */}
              <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-[#14100C] border border-[#FF9A2E]/25">
                <div className="p-2.5 rounded-lg bg-[#1F1711] border border-[#FF9A2E]/40 text-[#FFA843]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-[#F3EDE4]">
                    Indian Institute of Technology Jodhpur
                  </h4>
                  <p className="font-mono text-xs text-[#FFA843]">
                    BS in Applied AI and Data Science
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3 Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#261F1A]"
            >
              {/* Counter 1: Projects 5+ */}
              <div className="p-5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/40 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8178]">
                    Production Work
                  </span>
                  <Flame className="w-4 h-4 text-[#FF9A2E] group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-display text-4xl sm:text-5xl text-[#F3EDE4] group-hover:text-ember-gradient transition-colors">
                  5+
                </div>
                <p className="font-mono text-xs text-[#8A8178] mt-1">
                  Full-stack AI systems & computer vision repos
                </p>
              </div>

              {/* Counter 2: Programs & Badges 5 */}
              <div className="p-5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/40 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8178]">
                    Recognitions
                  </span>
                  <Award className="w-4 h-4 text-[#FFA843] group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-display text-4xl sm:text-5xl text-[#F3EDE4] group-hover:text-ember-gradient transition-colors">
                  5
                </div>
                <p className="font-mono text-xs text-[#8A8178] mt-1">
                  Google Cloud, NVIDIA, Google Maps, ISP Partner
                </p>
              </div>

              {/* Counter 3: Core Stack Areas 3 */}
              <div className="p-5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/40 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8178]">
                    Stack Areas
                  </span>
                  <Cpu className="w-4 h-4 text-[#FF5A1F] group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-display text-4xl sm:text-5xl text-[#F3EDE4] group-hover:text-ember-gradient transition-colors">
                  3
                </div>
                <p className="font-mono text-xs text-[#8A8178] mt-1">
                  AI/ML · Full-Stack · Cloud Architecture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
