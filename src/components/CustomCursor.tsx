"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing ember halo
  const springX = useSpring(mouseX, { damping: 25, stiffness: 250 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Check if touch device or prefers reduced motion
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotionCheck = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touchCheck || reducedMotionCheck) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);

    // Attach hover listeners to interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-hover]");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Ember Halo */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#FF9A2E]/40"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : isClicked ? 28 : 36,
          height: isHovered ? 56 : isClicked ? 28 : 36,
          backgroundColor: isHovered
            ? "rgba(255, 154, 46, 0.12)"
            : "rgba(255, 90, 31, 0.05)",
          boxShadow: isHovered
            ? "0 0 25px 4px rgba(255, 154, 46, 0.35)"
            : "0 0 12px 1px rgba(255, 90, 31, 0.2)",
          borderColor: isHovered ? "rgba(255, 168, 67, 0.8)" : "rgba(255, 154, 46, 0.4)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      />

      {/* Inner Pinpoint Ember Spark */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[#FFA843]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 8px 2px #FF5A1F",
        }}
        animate={{
          width: isHovered ? 8 : 4,
          height: isHovered ? 8 : 4,
          opacity: isClicked ? 0.4 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
