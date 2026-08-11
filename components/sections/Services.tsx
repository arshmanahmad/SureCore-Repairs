"use client";

import { motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";

const SERVICES = [
  {
    title: "Printer Repair",
    description:
      "Inkjet, laser, and multifunction fleet care — from toner systems to network print queues.",
    points: ["All major brands", "Contract SLAs", "Parts in stock"],
    icon: PrinterIcon,
  },
  {
    title: "Laptop & PC Repair",
    description:
      "Board-level repairs, SSD upgrades, thermal rebuilds, and enterprise fleet turnarounds.",
    points: ["Same-day options", "90-day warranty", "On-site available"],
    icon: LaptopIcon,
  },
  {
    title: "Solar Installation",
    description:
      "Residential and commercial solar design, install, and insulation with monitored performance.",
    points: ["Grid-ready setups", "Panel cleaning", "Energy audits"],
    icon: SolarIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything your devices{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              &amp; energy
            </span>{" "}
            need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Exactly three offerings: printer repair, PC &amp; laptop repair, and solar
            installation.
          </p>
        </MotionDiv>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              className="group relative rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-xl shadow-zinc-200/60 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo/15"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo/20 via-transparent to-cyan/20" />
                <div className="absolute inset-[1px] rounded-[1.4rem] bg-white/90" />
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo to-purple text-white shadow-lg shadow-indigo/30 transition-transform duration-300 group-hover:scale-110">
                  <service.icon />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-zinc-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-indigo transition-colors hover:text-purple"
                >
                  Request service
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaptopIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 8V5h10v3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 16v4h10v-4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SolarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
