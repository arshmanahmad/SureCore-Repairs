"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  "Solar panel installation for homes & shops",
  "Solar inverter repair and checkup",
  "Site survey with simple savings explanation",
  "Battery backup options when needed",
];

const HEADING_WORDS = ["Solar", "Panels", "&", "Inverter", "Repair"];

type SolarSectionProps = {
  imageSrc?: string;
};

export function SolarSection({
  imageSrc = "/images/solar-technician.jpg",
}: SolarSectionProps) {
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
      id="solar"
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-[#0a1628] py-24 sm:py-28 lg:py-32"
      style={{
        clipPath: "polygon(0 0, 100% 2%, 100% 100%, 0 98%)",
      }}
    >
      {/* Sunburst particles */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 30%, rgba(234,179,8,0.35) 0%, transparent 45%), radial-gradient(circle at 60% 70%, rgba(16,185,129,0.2) 0%, transparent 40%)",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-white/[0.04] sm:text-[200px] lg:text-[280px]"
      >
        03
      </span>

      <motion.div
        className="pointer-events-none absolute -right-10 top-16 h-80 w-80 rounded-full bg-[#eab308]/25 blur-3xl"
        {...orbDrift(10)}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 left-10 h-64 w-64 rounded-full bg-[#059669]/35 blur-3xl"
        {...orbDrift(9)}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-[#10b981]/25 blur-3xl"
        animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tiny floating sun particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute hidden h-1.5 w-1.5 rounded-full bg-[#eab308]/70 sm:block"
          style={{
            left: `${55 + i * 6}%`,
            top: `${20 + (i % 3) * 18}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 4 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

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
              className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-200 backdrop-blur-md"
            >
              03. ENERGY
            </motion.span>

            <motion.h2
              className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-display text-4xl font-bold tracking-tight md:text-6xl"
              variants={staggerContainer}
            >
              {HEADING_WORDS.map((word) => (
                <motion.span
                  key={word}
                  variants={wordReveal}
                  className="bg-gradient-to-r from-emerald-400 to-brand-light bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              variants={wordReveal}
              className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              Need new solar panels installed — or an existing inverter repaired? We explain options
              in everyday language, survey your site, and complete the work carefully.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 space-y-3.5">
              {FEATURES.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-center gap-3 text-sm text-zinc-200 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#059669] to-[#eab308] text-white shadow-lg shadow-emerald-500/25">
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
                className="cta-glow-emerald inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-brand px-8 text-sm font-semibold text-white shadow-[0_0_24px_rgba(5,150,105,0.45)]"
              >
                Request Solar Help
              </motion.a>
              <WhatsAppLink contact="asmeer" message={WHATSAPP_MESSAGES.solar} />
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
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#059669]/40 to-[#eab308]/30 blur-2xl" />
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-yellow-400/30 shadow-[inset_0_0_40px_rgba(234,179,8,0.12)] sm:aspect-[5/4] lg:min-h-[520px] lg:aspect-auto">
              <Image
                src={imageSrc}
                alt="AB Computer Technologies technician installing and servicing solar panels"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#059669]/25 via-transparent to-[#eab308]/15" />
            </div>

            <motion.div
              className="absolute -bottom-4 -left-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:-left-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-zinc-400">Includes</p>
              <p className="text-sm font-bold text-[#eab308]">Panels &amp; inverters</p>
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
