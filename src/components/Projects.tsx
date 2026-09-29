"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

const CATEGORIES = ["All Systems", "Computer Vision", "Financial AI", "NLP & Full-Stack", "Recommender"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === "All Systems") return true;
    if (selectedCategory === "Computer Vision") return project.tags.includes("Computer Vision");
    if (selectedCategory === "Financial AI") return project.tags.includes("Fraud Detection") || project.tags.includes("Forecasting");
    if (selectedCategory === "NLP & Full-Stack") return project.tags.includes("NLP") || project.tags.includes("Full-Stack");
    if (selectedCategory === "Recommender") return project.tags.includes("Recommender System");
    return true;
  });

  return (
    <section id="projects" className="relative py-28 bg-[#0A0806] overflow-hidden">
      {/* Scroll-drawing divider line at top */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-[#FF9A2E]/40 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Mask Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF9A2E] mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF9A2E]" />
              <span>Selected AI Architecture</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F3EDE4] tracking-tight uppercase"
            >
              ENGINEERED <span className="text-ember-gradient">SYSTEMS</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md font-sans text-sm sm:text-base text-[#8A8178] leading-relaxed"
          >
            Production machine learning systems spanning real-time video inference, fraud detection, predictive analytics, and conversational intelligence.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] text-[#0A0806] font-semibold shadow-[0_0_20px_rgba(255,154,46,0.4)]"
                  : "bg-[#14100C] text-[#8A8178] hover:text-[#F3EDE4] border border-[#261F1A] hover:border-[#FF9A2E]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Stack */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom GitHub CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/shanushekhawat7773-blip"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider text-[#F3EDE4] bg-[#14100C] hover:bg-[#1D1612] border border-[#FF9A2E]/30 hover:border-[#FF9A2E] shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,154,46,0.3)] transition-all duration-300"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFA843] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
