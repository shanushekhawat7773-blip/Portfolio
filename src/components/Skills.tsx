"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  Cloud,
  Wrench,
  Sparkles,
  Check,
} from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolioData";

const ICONS = {
  Languages: Code2,
  "AI & Machine Learning": Cpu,
  "Web & App Engineering": Globe,
  "Cloud, Data & DevOps": Cloud,
  "Tools & Testing": Wrench,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("All Categories");

  const categories = ["All Categories", ...SKILLS_DATA.map((c) => c.category)];

  const displayData =
    activeTab === "All Categories"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.category === activeTab);

  // Marquee list for the dynamic ribbon
  const allHighlightedSkills = [
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Python",
    "TypeScript",
    "Next.js",
    "Google Cloud",
    "NVIDIA",
    "React",
    "MLflow",
    "Scikit-Learn",
    "NestJS",
    "Airflow",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="relative py-28 bg-[#0A0806] overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF9A2E] mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF9A2E]" />
              <span>Technical Arsenal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F3EDE4] tracking-tight uppercase"
            >
              SKILLS & <span className="text-ember-gradient">TOOLCHAIN</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md font-sans text-sm sm:text-base text-[#8A8178] leading-relaxed"
          >
            A high-performance spectrum spanning deep learning research backbones, real-time web engines, distributed cloud deployments, and telemetry.
          </motion.p>
        </div>

        {/* Marquee Ribbon */}
        <div className="relative w-full py-4 mb-14 overflow-hidden border-y border-[#261F1A] bg-[#100D0A]">
          <div className="pointer-events-none absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#0A0806] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#0A0806] to-transparent z-10" />

          <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8">
            {[...allHighlightedSkills, ...allHighlightedSkills].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="font-display text-2xl text-[#8A8178]/60 hover:text-[#FFA843] transition-colors uppercase tracking-wider">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E]/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] text-[#0A0806] font-semibold shadow-[0_0_20px_rgba(255,154,46,0.35)]"
                  : "bg-[#14100C] text-[#8A8178] hover:text-[#F3EDE4] border border-[#261F1A] hover:border-[#FF9A2E]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayData.map((group, groupIdx) => {
            const Icon = ICONS[group.category as keyof typeof ICONS] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className="group relative rounded-2xl bg-[#120F0C] border border-[#261F1A] hover:border-[#FF9A2E]/40 p-6 sm:p-8 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_35px_rgba(255,154,46,0.12)]"
              >
                {/* Header of skill group */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#1C1612] border border-[#FF9A2E]/30 text-[#FFA843] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#F3EDE4] tracking-wide">
                      {group.category}
                    </h3>
                    <p className="font-mono text-xs text-[#8A8178]">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill relative px-3.5 py-1.5 rounded-lg bg-[#181310] border border-[#2E241E] hover:border-[#FF9A2E] hover:bg-[#201712] transition-all duration-300 flex items-center gap-2 cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(255,154,46,0.25)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E]/70 group-hover/pill:bg-[#FF5A1F] transition-colors" />
                      <span className="font-mono text-xs text-[#F3EDE4] font-medium">
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#FF9A2E]/20 text-[#FFA843] border border-[#FF9A2E]/30">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
