"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { MagneticButton } from "./MagneticButton";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = "Please provide your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#FFA843", "#FF9A2E", "#FF5A1F", "#F3EDE4"],
      });
    } catch {
      // safe fallback
    }

    // Reset form after submission
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0D0907] overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF9A2E] mb-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF9A2E]" />
                <span>Initiate Dialogue</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl text-[#F3EDE4] tracking-tight uppercase leading-tight"
              >
                LET&apos;S BUILD <br />
                <span className="text-ember-gradient">SOMETHING.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-base text-[#8A8178] leading-relaxed mt-4 font-light"
              >
                Open to full-stack AI/ML engineering roles, computer vision research collaborations, and ambitious technology ventures. Drop a message or reach out directly.
              </motion.p>
            </div>

            {/* Email quick copy widget */}
            <div className="p-5 rounded-2xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/40 transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8178] block mb-2">
                Primary Transmission (Direct Email)
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_DATA.links.email}`}
                  className="font-mono text-sm sm:text-base text-[#F3EDE4] hover:text-[#FFA843] transition-colors truncate"
                >
                  {PERSONAL_DATA.links.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-[#1F1711] border border-[#FF9A2E]/30 text-[#FFA843] hover:text-[#FF5A1F] transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#38D39F]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="font-mono text-xs text-[#38D39F] mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Direct Connect Buttons: LinkedIn, GitHub, Email */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8178] block">
                Direct Channels
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 text-[#F3EDE4] hover:text-[#FFA843] font-mono text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#FFA843]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 text-[#F3EDE4] hover:text-[#FFA843] font-mono text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4 text-[#FFA843]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_DATA.links.email}`}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#14100C] border border-[#261F1A] hover:border-[#FF9A2E]/50 text-[#F3EDE4] hover:text-[#FFA843] font-mono text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-[#FFA843]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-[#8A8178]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF7522]" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FFA843]" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-[#14100C] border border-[#261F1A] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
            >
              <h3 className="font-display text-2xl sm:text-3xl text-[#F3EDE4] mb-2">
                SEND A MESSAGE
              </h3>
              <p className="font-mono text-xs text-[#8A8178] mb-8">
                Responses typically dispatched within 24 hours.
              </p>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mb-6 p-4 rounded-xl bg-[#1A261E] border border-[#38D39F]/40 flex items-start gap-3 text-sm text-[#F3EDE4]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#38D39F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#38D39F]">Message Received</p>
                      <p className="text-xs text-[#F3EDE4]/80 mt-1">
                        Thank you for reaching out. I will review your note and respond promptly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-[#8A8178] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0806] border text-[#F3EDE4] placeholder-[#4A423B] font-mono text-sm focus:outline-none transition-colors ${
                      errors.name
                        ? "border-[#FF5A1F] focus:border-[#FF5A1F]"
                        : "border-[#261F1A] focus:border-[#FF9A2E]"
                    }`}
                  />
                  {errors.name && (
                    <p className="font-mono text-xs text-[#FF5A1F] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-[#8A8178] mb-2"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. elena@institution.org"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0806] border text-[#F3EDE4] placeholder-[#4A423B] font-mono text-sm focus:outline-none transition-colors ${
                      errors.email
                        ? "border-[#FF5A1F] focus:border-[#FF5A1F]"
                        : "border-[#261F1A] focus:border-[#FF9A2E]"
                    }`}
                  />
                  {errors.email && (
                    <p className="font-mono text-xs text-[#FF5A1F] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#8A8178] mb-2"
                  >
                    Message / Project Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your project, engineering role, or research idea..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0806] border text-[#F3EDE4] placeholder-[#4A423B] font-mono text-sm focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-[#FF5A1F] focus:border-[#FF5A1F]"
                        : "border-[#261F1A] focus:border-[#FF9A2E]"
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-[#FF5A1F] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <MagneticButton strength={0.2} className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider text-[#0A0806] font-semibold bg-gradient-to-r from-[#FF9A2E] to-[#FF5A1F] hover:from-[#FFA843] hover:to-[#FF6B1F] shadow-[0_0_20px_rgba(255,154,46,0.4)] hover:shadow-[0_0_35px_rgba(255,154,46,0.7)] transition-all duration-300 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#0A0806] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
