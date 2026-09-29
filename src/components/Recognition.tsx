"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  Code2,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle,
  Users,
} from "lucide-react";

const RECOGNITIONS = [
  {
    title: "Google Cloud Innovator",
    organization: "Google Cloud Ecosystem",
    badgeLabel: "Verified Champion",
    description:
      "Recognized by Google Cloud for proficiency in architecting and deploying cloud-native machine learning pipelines, distributed compute systems, and modern AI infra.",
    icon: Cloud,
    accent: "#FF9A2E",
    tags: ["Cloud AI", "Kubernetes", "Vertex AI", "Serverless"],
  },
  {
    title: "NVIDIA Community Member",
    organization: "NVIDIA Developer Program",
    badgeLabel: "GPU Computing",
    description:
      "Active participant in NVIDIA's deep learning and accelerated computing forums, working with CUDA, TensorRT optimization, and high-throughput vision inference.",
    icon: Cpu,
    accent: "#76B900", // NVIDIA green tint with amber border
    tags: ["CUDA", "TensorRT", "GPU Acceleration", "Vision Backbones"],
  },
  {
    title: "Google Developer",
    organization: "Google Developers Global Network",
    badgeLabel: "Ecosystem Builder",
    description:
      "Engaged contributor in Google's worldwide developer network, leveraging cutting-edge web frameworks, TensorFlow, and developer tooling standards.",
    icon: Code2,
    accent: "#FFA843",
    tags: ["Open Web", "TensorFlow", "Developer Tools", "AI Research"],
  },
  {
    title: "Google Maps Platform Innovator",
    organization: "Google Maps Platform",
    badgeLabel: "Spatial AI",
    description:
      "Selected innovator exploring spatial computing, geospatial data visualization, and real-time routing APIs for autonomous traffic and navigation systems.",
    icon: MapPin,
    accent: "#FF7522",
    tags: ["Geospatial AI", "Routing APIs", "Mobility Intelligence", "GeoJSON"],
  },
  {
    title: "Internshala Student Partner (ISP)",
    organization: "Internshala Student Network",
    badgeLabel: "Campus Partner",
    description:
      "Appointed student ambassador driving technical skill-building, internship outreach, peer mentorship, and student engagements representing IIT Jodhpur.",
    icon: Users,
    accent: "#FFA843",
    tags: ["Campus Leadership", "Internship Outreach", "Mentorship", "Community"],
  },
  {
    title: "IIT Jodhpur AI/ML Scholar",
    organization: "Indian Institute of Technology Jodhpur",
    badgeLabel: "BS Degree",
    description:
      "Pursuing a rigorous undergraduate engineering curriculum at IIT Jodhpur in BS in Applied AI and Data Science focusing on computer vision, deep learning theory, and scalable intelligence systems.",
    icon: GraduationCap,
    accent: "#FF5A1F",
    tags: ["Applied AI", "Data Science", "Machine Learning", "Computer Vision"],
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="relative py-28 bg-[#0D0907] overflow-hidden">
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
              <span>Affiliations & Credentials</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F3EDE4] tracking-tight uppercase"
            >
              GLOBAL <span className="text-ember-gradient">RECOGNITION</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md font-sans text-sm sm:text-base text-[#8A8178] leading-relaxed"
          >
            Honors, official certifications, and technical ecosystem affiliations endorsing real-world capability and architectural rigor.
          </motion.p>
        </div>

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RECOGNITIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(255,154,46,0.18)]"
              >
                {/* Subtle top edge ember gradient line on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FF9A2E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#1C1612] border border-[#FF9A2E]/30 text-[#FFA843] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F1711] text-[#FFA843] border border-[#FF9A2E]/30 flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[#FF9A2E]" />
                      <span>{item.badgeLabel}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F3EDE4] tracking-wide mb-1 group-hover:text-[#FFA843] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#FF7522] mb-4">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#F3EDE4]/75 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#261F1A]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#1C1612] text-[#8A8178] border border-[#2E241E] group-hover:text-[#F3EDE4] group-hover:border-[#FF9A2E]/30 transition-colors"
                    >
                      {tag}
                    </span>
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
