"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "They fixed our office laser printers the same day. Professional service and fair pricing—highly recommended.",
    name: "Ayesha Khan",
    role: "Office Manager, Nexus Corp",
  },
  {
    quote:
      "Toner replacements and maintenance plans keep our fleet running smoothly. The team is reliable and knowledgeable.",
    name: "Hassan Ali",
    role: "IT Lead, BrightPrint Ltd",
  },
  {
    quote:
      "My home printer was dead—AB Computer Technologies diagnosed a drive issue and had it printing again within hours.",
    name: "Sara Malik",
    role: "Freelance Designer",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="relative bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border border-white/10 bg-surface-elevated px-6 py-10 sm:px-12 sm:py-14">
            <span className="absolute left-6 top-4 text-6xl font-serif leading-none text-brand/40 sm:left-10">
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative text-center"
              >
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">{active.quote}</p>
                <footer className="mt-8">
                  <p className="font-bold uppercase tracking-wide text-brand">{active.name}</p>
                  <p className="mt-1 text-sm text-muted">{active.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowLeft />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-brand" : "bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Secondary two-column quotes on large screens */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <article
              key={t.name}
              className="border border-white/10 bg-background/40 p-8 transition-colors hover:border-brand/40"
            >
              <p className="text-white/85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-6 font-bold uppercase tracking-wide text-brand">{t.name}</p>
              <p className="mt-1 text-sm text-muted">{t.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
