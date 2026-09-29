"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ShieldAlert,
  Activity,
  Layers,
  Sparkles,
  Eye,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative rounded-2xl bg-[#120F0C] border border-[#261F1A] hover:border-[#FF9A2E]/50 transition-all duration-500 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_50px_rgba(255,154,46,0.15)] flex flex-col lg:flex-row"
    >
      {/* Amber Edge Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF9A2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Visual / Abstract UI Mockup Side */}
      <div className="relative w-full lg:w-[48%] min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] bg-[#0E0B09] border-b lg:border-b-0 lg:border-r border-[#261F1A] flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F1914_1px,transparent_1px),linear-gradient(to_bottom,#1F1914_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

        {/* Ambient Amber Bloom */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FF5A1F]/15 blur-3xl pointer-events-none group-hover:bg-[#FF9A2E]/25 transition-colors duration-500" />

        {/* Header telemetry bar of the mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#261F1A] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9A2E]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#332720]" />
            <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-[#8A8178]">
              {project.id}.stream
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#FFA843] px-2 py-0.5 rounded bg-[#1C1612] border border-[#FF9A2E]/30">
            AI PIPELINE LIVE
          </span>
        </div>

        {/* Dynamic Abstract Mockup per Visual Type */}
        <div className="relative z-10 flex-1 my-6 flex flex-col justify-center">
          {project.visualType === "traffic" && (
            <div className="space-y-4">
              {/* Traffic camera viewfinder HUD */}
              <div className="relative h-44 rounded-xl bg-[#16120E] border border-[#2B221B] p-4 overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start font-mono text-[10px] text-[#FFA843]">
                  <span>CAM-04 // JUNCTION-NORTH</span>
                  <span className="animate-pulse text-[#FF5A1F]">● REC [4K-60FPS]</span>
                </div>

                {/* Bounding box mock */}
                <div className="relative flex-1 flex items-center justify-center">
                  <div className="relative w-44 h-24 border-2 border-[#FF9A2E] rounded-md p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(255,154,46,0.3)]">
                    <span className="font-mono text-[9px] text-[#FFA843] bg-[#0A0806]/80 px-1 py-0.5 rounded self-start">
                      TARGET: VEHICLE #209
                    </span>
                    <div className="flex justify-between font-mono text-[8px] text-[#FF5A1F] bg-[#0A0806]/90 px-1 py-0.5 rounded">
                      <span>VIOLATION DETECTED</span>
                      <span>CONF: 98.4%</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-mono text-[9px] text-[#8A8178]">
                  <span>HELMET_DETECTION: ACTIVE</span>
                  <span>LANE_DISCIPLINE: MONITORED</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "security" && (
            <div className="space-y-4">
              <div className="h-44 rounded-xl bg-[#16120E] border border-[#2B221B] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center font-mono text-[10px] text-[#FFA843]">
                  <span>PERIMETER MATRIX // GATE A & B</span>
                  <span className="text-[#38D39F] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38D39F]" /> NORMAL
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 my-auto">
                  <div className="p-2 rounded bg-[#0A0806] border border-[#FF9A2E]/20 text-center">
                    <p className="font-mono text-[9px] text-[#8A8178]">ZONE 1</p>
                    <p className="font-mono text-xs text-[#FFA843] font-semibold">SECURED</p>
                  </div>
                  <div className="p-2 rounded bg-[#0A0806] border border-[#FF5A1F]/50 text-center shadow-[0_0_10px_rgba(255,90,31,0.2)]">
                    <p className="font-mono text-[9px] text-[#FF5A1F]">ZONE 2 (REAR)</p>
                    <p className="font-mono text-xs text-[#FF5A1F] font-semibold">ALERT</p>
                  </div>
                  <div className="p-2 rounded bg-[#0A0806] border border-[#FF9A2E]/20 text-center">
                    <p className="font-mono text-[9px] text-[#8A8178]">ZONE 3</p>
                    <p className="font-mono text-xs text-[#FFA843] font-semibold">SECURED</p>
                  </div>
                </div>

                <div className="font-mono text-[9px] text-[#8A8178] flex items-center justify-between border-t border-[#261F1A] pt-2">
                  <span>DISPATCH: ON-SITE GUARD</span>
                  <span>HUMAN-IN-THE-LOOP VERIFIED</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "finance" && (
            <div className="space-y-4">
              <div className="h-44 rounded-xl bg-[#16120E] border border-[#2B221B] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center font-mono text-[10px] text-[#FFA843]">
                  <span>TRANSACTION ANOMALY AUDIT</span>
                  <span>SHAP VALUES</span>
                </div>

                {/* Simulated SHAP impact meters */}
                <div className="space-y-2 my-auto">
                  <div>
                    <div className="flex justify-between font-mono text-[9px] text-[#8A8178] mb-1">
                      <span>Velocity Spike Flag</span>
                      <span className="text-[#FF5A1F]">+0.82 Impact</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#261F1A] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] w-[82%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[9px] text-[#8A8178] mb-1">
                      <span>Geo-Location Variance</span>
                      <span className="text-[#FFA843]">+0.48 Impact</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#261F1A] rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF9A2E] w-[48%]" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-mono text-[9px] text-[#8A8178] border-t border-[#261F1A] pt-2">
                  <span>DECISION: EXPLAINABLE ESCALATION</span>
                  <span>RISK TIER: HIGH</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "wellness" && (
            <div className="space-y-4">
              <div className="h-44 rounded-xl bg-[#16120E] border border-[#2B221B] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center font-mono text-[10px] text-[#FFA843]">
                  <span>COGNITIVE REFLECTION INFERENCE</span>
                  <span className="text-[#8A8178]">NLP EXTRACT</span>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0806]/80 border border-[#FF9A2E]/20 my-auto">
                  <p className="font-mono text-[10px] text-[#F3EDE4] italic mb-1">
                    &ldquo;User report indicates academic deadline strain with positive peer outlook.&rdquo;
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#FF9A2E]/20 text-[#FFA843]">
                      Empathy: Attuned
                    </span>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#261F1A] text-[#8A8178]">
                      Non-Diagnostic Advisory
                    </span>
                  </div>
                </div>

                <div className="flex justify-between font-mono text-[9px] text-[#8A8178] border-t border-[#261F1A] pt-2">
                  <span>PERSONALIZED WELLNESS STRATEGY GENERATED</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "movie" && (
            <div className="space-y-4">
              <div className="h-44 rounded-xl bg-[#16120E] border border-[#2B221B] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center font-mono text-[10px] text-[#FFA843]">
                  <span>LATENT EMBEDDING SIMILARITY MATRIX</span>
                  <span>COSINE DISTANCE</span>
                </div>

                {/* Graph nodes mock */}
                <div className="relative h-20 my-auto flex items-center justify-around">
                  <div className="w-12 h-12 rounded-full border border-[#FF9A2E] bg-[#1A1410] flex items-center justify-center font-mono text-[8px] text-[#FFA843] text-center shadow-[0_0_12px_rgba(255,154,46,0.3)]">
                    Sci-Fi<br />Thriller
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F]" />
                  <div className="w-14 h-14 rounded-full border-2 border-[#FF5A1F] bg-[#1A1410] flex items-center justify-center font-mono text-[9px] text-[#F3EDE4] font-bold text-center shadow-[0_0_15px_rgba(255,90,31,0.4)]">
                    94%<br />MATCH
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#FF5A1F] to-[#FF9A2E]" />
                  <div className="w-12 h-12 rounded-full border border-[#FF9A2E]/50 bg-[#1A1410] flex items-center justify-center font-mono text-[8px] text-[#8A8178] text-center">
                    Neo<br />Noir
                  </div>
                </div>

                <div className="flex justify-between font-mono text-[9px] text-[#8A8178] border-t border-[#261F1A] pt-2">
                  <span>HYBRID COLLABORATIVE FILTERING</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom card micro-label */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#8A8178]">
          <span>INDEX: {project.number}</span>
          <span className="text-[#FF9A2E]">IIT JODHPUR RESEARCH & BUILD</span>
        </div>
      </div>

      {/* Project Details Side */}
      <div className="w-full lg:w-[52%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          {/* Top metadata row */}
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-sm font-bold text-[#FFA843] tracking-widest">
              PROJECT // {project.number}
            </span>
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#1E1712] text-[#8A8178] border border-[#2E241D]">
              Open Source
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F3EDE4] tracking-wide mb-2 group-hover:text-[#FFA843] transition-colors">
            {project.title}
          </h3>

          {/* Subheading / Tagline */}
          <p className="font-mono text-xs uppercase tracking-wider text-[#FF7522] mb-4">
            {project.tagline}
          </p>

          {/* One-Line Pitch */}
          <p className="text-sm sm:text-base text-[#F3EDE4]/80 font-normal leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Capabilities / Highlights */}
          <div className="mb-6 space-y-2 border-t border-[#261F1A] pt-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8178] block mb-2">
              System Capabilities:
            </span>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#F3EDE4]/90 font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E] mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explicit Validation / Results line placeholder */}
          <div className="p-3 rounded-lg bg-[#18120E] border border-[#FF9A2E]/20 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#FFA843] block mb-1">
              Field Benchmark Status:
            </span>
            <p className="font-mono text-xs text-[#8A8178] italic">
              {project.resultsPlaceholder}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-[#1A1410] text-[#F3EDE4] border border-[#2B221B] group-hover:border-[#FF9A2E]/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#261F1A]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#F3EDE4] bg-[#1A1410] hover:bg-[#251C16] border border-[#FF9A2E]/30 hover:border-[#FF9A2E] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,154,46,0.3)] transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4 text-[#FFA843]" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] hover:from-[#FFA843] hover:to-[#FF6B1F] shadow-[0_0_15px_rgba(255,154,46,0.3)] hover:shadow-[0_0_25px_rgba(255,154,46,0.6)] transition-all duration-300 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </button>
        </div>
      </div>

      {/* Demo Modal for live preview notice */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full rounded-2xl bg-[#14100C] border border-[#FF9A2E]/40 p-6 shadow-[0_0_50px_rgba(255,154,46,0.3)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#1F1711] border border-[#FF9A2E]/30 text-[#FFA843]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-2xl text-[#F3EDE4]">{project.title} Demo</h4>
                <p className="font-mono text-xs text-[#8A8178]">Interactive Deployment</p>
              </div>
            </div>

            <p className="text-sm text-[#F3EDE4]/80 leading-relaxed mb-6 font-sans">
              This system is packaged with Docker & Python inference runners. Explore the repository for local quickstart, camera RTSP configuration, and pretrained weight checkpoints.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-[#8A8178] hover:text-[#F3EDE4]"
              >
                Close
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsDemoModalOpen(false)}
                className="px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F]"
              >
                Open GitHub Repo →
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.article>
  );
}
