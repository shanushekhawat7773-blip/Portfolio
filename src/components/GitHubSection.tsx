"use client";

import { motion } from "framer-motion";
import {
  GitFork,
  Star,
  ExternalLink,
  Code2,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";

export function GitHubSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCloneCmd = (repoName: string, index: number) => {
    navigator.clipboard.writeText(`git clone https://github.com/shanushekhawat7773-blip/${repoName}.git`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="github" className="relative py-28 bg-[#0A0806] overflow-hidden">
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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF9A2E] mb-3"
            >
              <GithubIcon className="w-4 h-4 text-[#FFA843]" />
              <span>Open Source Engineering</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F3EDE4] tracking-tight uppercase"
            >
              CODE ON <span className="text-ember-gradient">GITHUB</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://github.com/shanushekhawat7773-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] hover:from-[#FFA843] hover:to-[#FF6B1F] shadow-[0_0_20px_rgba(255,154,46,0.35)] hover:shadow-[0_0_30px_rgba(255,154,46,0.6)] transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@shanushekhawat7773-blip</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group rounded-2xl bg-[#120F0C] border border-[#261F1A] hover:border-[#FF9A2E]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(255,154,46,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#FFA843]" />
                    <span className="font-mono text-xs text-[#8A8178]">public repo</span>
                  </div>

                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${repo.title} on GitHub`}
                    className="p-1.5 rounded-md text-[#8A8178] hover:text-[#FFA843] hover:bg-[#1A1410] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-[#F3EDE4] group-hover:text-[#FFA843] transition-colors tracking-wide block mb-2"
                >
                  {repo.title}
                </a>

                <p className="text-xs text-[#8A8178] line-clamp-3 leading-relaxed mb-6 font-sans">
                  {repo.description}
                </p>
              </div>

              <div>
                {/* Clone command preview */}
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#0A0806] border border-[#261F1A] font-mono text-[10px] text-[#8A8178] mb-4">
                  <span className="truncate pr-2">git clone .../{repo.title}.git</span>
                  <button
                    onClick={() => copyCloneCmd(repo.title, idx)}
                    className="text-[#FFA843] hover:text-[#FF5A1F] transition-colors cursor-pointer shrink-0"
                    title="Copy git clone command"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-[#38D39F]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#261F1A]">
                  {repo.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#181310] text-[#8A8178] border border-[#261F1A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
