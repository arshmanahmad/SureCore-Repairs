"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  "All Types of Printer Repairing",
  "Toner & Cartridge Replacement",
  "Maintenance & Cleaning",
  "Drives & Parts Replacement",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#050a14]"
    >
      {/* Full-bleed background — matches design: photo covers entire hero */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Technician repairing a printer in the workshop"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Left fade so text stays readable (same treatment as design) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #050a14 0%, #050a14 28%, rgba(5,10,20,0.92) 42%, rgba(5,10,20,0.55) 58%, rgba(5,10,20,0.15) 75%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-[#050a14]/45" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            <span className="block text-white">Printer</span>
            <span className="mt-1 block text-brand">Service &amp; Repairing</span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-lg text-base text-white/90 sm:text-lg md:text-xl"
          >
            Fast, Reliable &amp; Professional Printer Repairing Solutions
          </motion.p>

          <motion.ul
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-3.5"
          >
            {FEATURES.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white sm:text-base">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-black">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex min-w-[150px] items-center justify-center rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_0_24px_rgba(238,176,18,0.35)] active:scale-[0.98]"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex min-w-[150px] items-center justify-center rounded-md border border-brand bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-brand hover:text-black active:scale-[0.98]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
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
