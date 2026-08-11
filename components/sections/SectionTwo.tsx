"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  "Solar System Installation",
  "Solar System Maintenance",
  "Solar Panel Cleaning",
  "Insulation & Protection",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.09,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function SectionTwo() {
  return (
    <section
      id="services"
      className="relative min-h-[100svh] overflow-hidden bg-[#050a14]"
    >
      {/* Desktop: full-bleed photo on the right half */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="/section2-technician.jpg"
          alt="Technician installing and servicing solar panels"
          fill
          className="object-cover object-[center_20%]"
          sizes="58vw"
          priority
        />
        {/* Soft blend into left content */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050a14] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/50 via-transparent to-[#050a14]/25" />
      </div>

      {/* Mobile / tablet: full background with lighter overlay */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/section2-technician.jpg"
          alt="Technician installing and servicing solar panels"
          fill
          className="object-cover object-[70%_center]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#050a14]/78" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            <span className="block text-white">Solar</span>
            <span className="mt-1 block">
              <span className="text-brand">Service &amp;</span>{" "}
              <span className="text-white">Insulation</span>
            </span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 max-w-lg text-base text-white/90 sm:text-lg md:text-xl"
          >
            Sustainable Energy for a Better Tomorrow
          </motion.p>

          <motion.ul
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
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
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex min-w-[150px] items-center justify-center rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_0_24px_rgba(245,158,11,0.35)] active:scale-[0.98]"
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

        {/* Spacer column on desktop so text stays left; image is absolute on right */}
        <div className="hidden lg:block" aria-hidden />
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
