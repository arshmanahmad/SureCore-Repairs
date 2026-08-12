"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  staggerContainer,
  wordReveal,
  imageEnterLeft,
  listItem,
  orbDrift,
} from "@/utils/animations";
import { useIsDesktop } from "@/utils/useIsDesktop";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES } from "./config";

const FEATURES = [
  "Paper jams and print quality issues",
  "Wireless and network printer setup",
  "Toner, cartridge, and drum service",
  "Fast home and office visits",
];

const HEADING_WORDS = ["Fast", "&", "Reliable", "Printer", "Repair"];

type PrinterSectionProps = {
  imageSrc?: string;
};

export function PrinterSection({
  imageSrc = "/images/printer-repair-man.jpg",
}: PrinterSectionProps) {
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
      id="printer-repair"
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-[#0f172a] py-24 sm:py-28 lg:py-32"
      style={{
        clipPath: "polygon(0 2%, 100% 0, 100% 100%, 0 98%)",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,102,224,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(26,102,224,0.45) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-white/[0.04] sm:text-[200px] lg:text-[280px]"
      >
        01
      </span>

      <motion.div
        className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-brand/35 blur-3xl"
        {...orbDrift(10)}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-1/4 h-56 w-56 rounded-full bg-brand-light/25 blur-3xl"
        {...orbDrift(8)}
      />
      <motion.div
        className="pointer-events-none absolute right-10 top-1/3 h-44 w-44 rounded-full bg-brand/30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Image — 7 cols, left */}
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageEnterLeft}
        >
          <motion.div style={{ y: isDesktop ? imageY : 0 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/40 to-brand-light/25 blur-2xl" />
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-brand-light/30 shadow-[inset_0_0_40px_rgba(26,102,224,0.12)] sm:aspect-[5/4] lg:min-h-[520px] lg:aspect-auto">
              <Image
                src={imageSrc}
                alt="Technician repairing a complete office printer for AB Computer Technologies customers"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-brand/20 via-transparent to-brand-dark/15" />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:-right-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-zinc-400">Focus</p>
              <p className="text-sm font-bold text-brand-light">Full printer repair</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text — 5 cols, right */}
        <motion.div
          className="lg:col-span-5"
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
              01. PRINTERS
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
              We repair complete printers for homes and offices — HP, Canon, Epson, Brother, and
              more. If it jams, won&apos;t print, or shows errors, we can help. Browse printer types
              below or book a visit.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 space-y-3.5">
              {FEATURES.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-center gap-3 text-sm text-zinc-200 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/25">
                    <CheckIcon />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={wordReveal} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a
                href="#printers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cta-glow-teal inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-light px-8 text-sm font-semibold text-white shadow-[0_0_24px_rgba(26,102,224,0.45)]"
              >
                Browse Printer Types
              </motion.a>
              <WhatsAppLink contact="asmeer" message={WHATSAPP_MESSAGES.printer} />
            </motion.div>
          </div>
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
