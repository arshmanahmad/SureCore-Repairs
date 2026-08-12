"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";

const FAQS = [
  {
    q: "What if my printer stops working again after repair?",
    a: "Eligible repairs are covered by our repair warranty window. If the same issue returns within warranty, contact us and we’ll review it and resolve it according to the warranty terms shared at handover.",
  },
  {
    q: "Will my personal data be safe during laptop/computer repair?",
    a: "Yes. We treat your files as private. Our technicians follow careful handling practices, and we only access what is needed to complete the repair. You can also remove or back up sensitive data before the visit if you prefer.",
  },
  {
    q: "Do you provide home and office visits?",
    a: "Yes. We offer home and office visits across Multan for printer repair, PC/laptop repair, and solar survey/consultation. You can also bring devices to our workshop when deeper repair is needed.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Many printer and laptop issues are fixed the same day after checkup. Complex board-level repairs or parts that need ordering can take longer — we always explain the timeline before work begins.",
  },
  {
    q: "How much does a service visit cost?",
    a: "Service charges start from Rs. 500 for checkup / visit / solar survey. This is a starting price, not a maximum. Final cost depends on the problem, required parts, and service complexity — you’ll get a clear estimate first.",
  },
  {
    q: "Is solar worth it for my home or business?",
    a: "For many Multan homes and small businesses, solar helps reduce monthly electricity bills and improve power reliability. We start with a simple survey so you can see realistic savings before deciding.",
  },
  {
    q: "Do you provide solar consultation/survey services?",
    a: "Yes. Solar survey and consultation start from Rs. 500. We inspect your site, explain options in plain language, and share an installation plan that fits your needs and budget.",
  },
  {
    q: "Do you serve areas outside Multan?",
    a: "Multan is our primary service area. For nearby locations, please contact us — we review requests case by case and confirm availability before booking.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions —{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              plain answers
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Straight answers for homeowners, students, and small businesses in Multan.
          </p>
        </MotionDiv>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, index) => {
            const open = openIndex === index;
            return (
              <MotionDiv key={item.q} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                    open
                      ? "border-brand/30 bg-white shadow-lg shadow-brand/5"
                      : "border-gray-100 bg-white/80 hover:border-brand/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        open
                          ? "rotate-45 border-brand bg-brand text-white"
                          : "border-gray-200 text-muted"
                      }`}
                      aria-hidden
                    >
                      <PlusIcon />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        <MotionDiv delay={0.15} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand/30 px-7 text-sm font-semibold text-brand transition-all duration-200 hover:scale-105 hover:bg-brand hover:text-white"
          >
            Still have a question? Contact us
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
