"use client";

import { motion } from "framer-motion";

/** Legacy unused component — kept in sync with the three offered services only. */
const SERVICES = [
  {
    title: "Printer Repair",
    description:
      "Expert repair for inkjet, laser, and multifunction printers of every major brand.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12V9a2 2 0 012-2h12a2 2 0 012 2v3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 22h16M14 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "PC & Laptop Repair",
    description:
      "Motherboard repair, SSD upgrades, screen replacement, and virus removal for every major brand.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <rect x="6" y="8" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 32h12M20 26v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Solar Installation",
    description:
      "Certified site surveys, grid-tied and off-grid systems, and battery storage integration.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 8v3M20 29v3M8 20h3M29 20h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Our Three Services
          </h2>
          <p className="mt-4 text-muted">
            Printer repair, PC &amp; laptop repair, and solar installation — nothing else.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group border border-white/10 bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="text-brand transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
