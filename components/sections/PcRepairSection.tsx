/**
 * =============================================================================
 * PC / LAPTOP REPAIR — Chapter 02 · Trust
 * =============================================================================
 *
 * TODO: REPLACE THIS IMAGE WITH THE ONE PROVIDED BY THE USER FOR PCs REPAIR
 * Current path: /images/pc-laptop-repair.jpg
 * Swap via `imageSrc` prop or update the default below.
 * =============================================================================
 */

"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  staggerContainer,
  wordReveal,
  imageEnterRight,
  listItem,
  orbDrift,
} from "@/utils/animations";
import { useIsDesktop } from "@/utils/useIsDesktop";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES } from "./config";

const FEATURES = [
  "Won't turn on, blank screen, or overheating",
  "Slow performance and storage upgrades",
  "Broken screen, keyboard, or hinge",
  "Virus cleanup and data recovery help",
];

const HEADING_WORDS = ["Expert", "PC", "&", "Laptop", "Repair"];

type PcRepairSectionProps = {
  imageSrc?: string;
};

export function PcRepairSection({
  imageSrc = "/images/pc-laptop-repair.jpg",
}: PcRepairSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      id="pc-repair"
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-[#0f172a] py-24 sm:py-28 lg:py-32"
      style={{
        clipPath: "polygon(0 0, 100% 2%, 100% 98%, 0 100%)",
      }}
    >
      {/* Giant watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-white/[0.04] sm:text-[200px] lg:text-[280px]"
      >
        02
      </span>

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl"
        {...orbDrift(9)}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/4 h-56 w-56 rounded-full bg-brand-light/30 blur-3xl"
        {...orbDrift(11)}
      />
      <motion.div
        className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-brand-dark/35 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Text — 5 cols */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-5"
          style={{ y: isDesktop ? textY : 0 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <motion.span
              variants={wordReveal}
              className="inline-flex rounded-full border border-brand-light/30 bg-brand/10 px-3 py-1 text-xs font-semibold tracking-widest text-brand-light backdrop-blur-md"
            >
              02. COMPUTERS
            </motion.span>

            <motion.h2
              className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-display text-4xl font-bold tracking-tight md:text-6xl"
              variants={staggerContainer}
            >
              {HEADING_WORDS.map((word) => (
                <motion.span
                  key={word}
                  variants={wordReveal}
                  className="bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              variants={wordReveal}
              className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              From student laptops to office PCs — we diagnose the problem, explain the fix in plain
              words, and only start work after you approve the estimate.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 space-y-3.5">
              {FEATURES.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-center gap-3 text-sm text-zinc-200 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/20">
                    <CheckIcon />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={wordReveal} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cta-glow-indigo inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark px-8 text-sm font-semibold text-white shadow-[0_0_24px_rgba(26,102,224,0.45)]"
              >
                Book a Laptop Repair
              </motion.a>
              <WhatsAppLink contact="ahsan" message={WHATSAPP_MESSAGES.pc} />
            </motion.div>
          </div>
        </motion.div>

        {/* Image — 7 cols */}
        <motion.div
          className="order-1 lg:order-2 lg:col-span-7"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageEnterRight}
        >
          <motion.div style={{ y: isDesktop ? imageY : 0 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/40 to-brand-light/30 blur-2xl" />
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-brand-light/30 shadow-[inset_0_0_40px_rgba(26,102,224,0.12)] sm:aspect-[5/4] lg:min-h-[520px] lg:aspect-auto">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt="Technician repairing a laptop at the AB Computer Technologies workshop"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand/40 to-brand-dark/50">
                  <MonitorIcon />
                  <span className="text-sm font-semibold tracking-widest text-white/80">
                    PC IMAGE
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/25 via-transparent to-brand-light/15" />
            </div>

            <motion.div
              className="absolute -bottom-4 -left-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:-left-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-zinc-400">Promise</p>
              <p className="text-sm font-bold text-white">Clear estimate first</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.2L4.8 8.5 9.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/70">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
