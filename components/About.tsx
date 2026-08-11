"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "500+", label: "Devices Repaired" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24h", label: "Average Turnaround" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">About Us</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Trusted Printer Experts You Can Rely On
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            AB Computer Technologies delivers fast, reliable printer service and repairing for homes,
            offices, and enterprises. Our certified technicians diagnose issues accurately and
            restore your equipment with quality parts and transparent pricing.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            From toner swaps to complex drive and board replacements, we keep your print
            environment productive so you can focus on your work.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand pl-4">
                <p className="text-3xl font-extrabold text-brand sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Technician working on computer hardware in a workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-brand/10" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden border border-brand bg-surface px-6 py-5 sm:block">
            <p className="text-sm uppercase tracking-[0.16em] text-white/70">Since</p>
            <p className="text-3xl font-extrabold text-brand">2012</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
