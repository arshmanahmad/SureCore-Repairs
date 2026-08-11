"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ServiceItem = {
  id: string;
  category: "pc" | "printer" | "solar";
  title: string;
  summary: string;
  turnaround: string;
  priceFrom: string;
  features: string[];
  icon: ReactNode;
};

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
};

export function ServiceCard({ service, index, expanded, onToggle }: ServiceCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden border transition-colors duration-300 ${
        expanded
          ? "border-brand/60 bg-surface-elevated shadow-[0_0_0_1px_rgba(245,158,11,0.15),0_20px_50px_rgba(0,0,0,0.45)]"
          : "border-white/10 bg-[#0a101c] hover:border-brand/40"
      }`}
    >
      {/* Accent glow */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/20 blur-3xl transition-opacity duration-500 ${
          expanded ? "opacity-100" : "opacity-0 group-hover:opacity-70"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="relative flex flex-1 flex-col p-6 text-left sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center border transition-all duration-300 ${
              expanded
                ? "border-brand bg-brand text-[#0a101c]"
                : "border-brand/40 bg-brand/10 text-brand group-hover:scale-105 group-hover:border-brand"
            }`}
          >
            {service.icon}
          </span>

          <span
            className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 ${
              expanded ? "rotate-45 border-brand text-brand" : "group-hover:border-brand/50 group-hover:text-brand"
            }`}
            aria-hidden
          >
            <PlusIcon />
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wide text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

        <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em]">
          <span className="border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
            {service.turnaround}
          </span>
          <span className="border border-brand/30 bg-brand/10 px-2.5 py-1 text-brand">
            From {service.priceFrom}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 pb-6 pt-1 sm:px-7 sm:pb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                What&apos;s included
              </p>
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[#0a101c]">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-brand px-5 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#0a101c] transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_0_28px_rgba(245,158,11,0.35)] active:scale-[0.98]"
              >
                Book this service
                <ArrowIcon />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
