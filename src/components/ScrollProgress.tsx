"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-[#120F0C]"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#FF9A2E] via-[#FF7522] to-[#FF5A1F] shadow-[0_0_12px_rgba(255,154,46,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
