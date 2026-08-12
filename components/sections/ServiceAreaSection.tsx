"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/ui/MotionDiv";

const MULTAN_MAP_LINK =
  "https://www.openstreetmap.org/?mlat=30.1575&mlon=71.5249#map=12/30.1575/71.5249";

const COVERAGE = [
  {
    title: "Home visits",
    text: "Printer, laptop, and solar help at your doorstep across Multan.",
  },
  {
    title: "Office visits",
    text: "Fast on-site support for shops, schools, and small businesses.",
  },
  {
    title: "Workshop service",
    text: "Bring devices in for deeper board-level printer & PC repairs.",
  },
];

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-dark-alt py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,102,224,0.18),transparent_60%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <MotionDiv>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
            Service Area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We serve{" "}
            <span className="bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
              Multan
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Local, reachable, and easy to book. AB Computer Technologies provides home and office
            visits across Multan — so help feels close when your printer, laptop, or solar system
            needs attention.
          </p>

          <ul className="mt-8 space-y-4">
            {COVERAGE.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.text}</p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-light px-8 text-sm font-semibold text-white shadow-lg shadow-brand/35 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-brand-light/35"
          >
            Book a Home / Office Visit
          </a>
        </MotionDiv>

        <MotionDiv delay={0.12}>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-light/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand/25 blur-3xl" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/30">
                  <PinIcon />
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    Primary location
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">Multan, Punjab</h3>
                  <p className="mt-1 text-zinc-400">Pakistan</p>
                </div>
              </div>

              {/* Real Multan city map */}
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <a
                  href={MULTAN_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] w-full"
                  aria-label="Open Multan city map"
                >
                  <Image
                    src="/images/multan-map.jpg"
                    alt="Real city map of Multan, Punjab, Pakistan"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-4 pt-14">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Multan city map</p>
                        <p className="text-xs text-zinc-300">
                          Serving homes &amp; offices across the city
                        </p>
                      </div>
                      <span className="rounded-full border border-white/25 bg-dark/70 px-3 py-1.5 text-[11px] font-semibold text-brand-light backdrop-blur-md transition-colors group-hover:border-brand-light/50 group-hover:text-white">
                        Open map
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <p className="mt-5 text-sm text-zinc-400">
                Outside Multan?{" "}
                <a href="#faq" className="font-medium text-brand-light hover:underline">
                  Ask us in FAQ
                </a>{" "}
                — we can advise case by case.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
