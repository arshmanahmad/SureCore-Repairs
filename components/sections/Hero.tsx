"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { BRAND, OFFERED_SERVICES } from "./config";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(26,102,224,0.24), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden bg-dark text-zinc-200"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,102,224,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-36">
        <div>
          <MotionDiv>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Serving homes &amp; businesses in Multan
            </div>
          </MotionDiv>

          <MotionDiv delay={0.08}>
            <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
              {BRAND.name}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Printer, Laptop &amp; Solar help —{" "}
              <span className="animate-gradient bg-gradient-to-r from-brand-light via-white to-brand bg-clip-text text-transparent">
                explained simply.
              </span>
            </h1>
          </MotionDiv>

          <MotionDiv delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Broken printer? Slow laptop? Need solar panels or inverter repair? We handle these
              services every day — with clear pricing, home/office visits, and booking by call or
              WhatsApp.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.22} className="mt-8 flex flex-wrap gap-3">
            {OFFERED_SERVICES.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-brand-light/50 hover:bg-white/10 hover:text-white"
              >
                <span aria-hidden>{pill.emoji}</span>
                {pill.label}
              </a>
            ))}
          </MotionDiv>

          <MotionDiv delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-light px-7 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-brand-light/40"
            >
              Book a Service
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-brand-light/50 hover:bg-white/10"
            >
              See Our Services
            </a>
          </MotionDiv>
        </div>

        <MotionDiv delay={0.15} className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
            <motion.div
              className="absolute -left-4 top-8 z-20 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:-left-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-zinc-400">Completed</p>
              <p className="text-lg font-bold text-white">500+ Repairs</p>
            </motion.div>

            <motion.div
              className="absolute -right-2 bottom-24 z-20 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:-right-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-xs text-zinc-400">Avg. turnaround</p>
              <p className="text-lg font-bold text-brand-light">24 Hours</p>
            </motion.div>

            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand-dark/20 to-brand-light/30 blur-2xl" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-brand/20">
              <Image
                src="/hero-technician.jpg"
                alt="AB Computer Technologies technician repairing hardware in Multan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/20" />
            </div>

            <div className="absolute -bottom-6 left-1/2 z-10 w-[88%] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 shadow-xl">
              <div className="relative aspect-[16/7]">
                <Image
                  src="/images/solar-technician.jpg"
                  alt="Solar panel installation service by AB Computer Technologies"
                  fill
                  className="object-cover object-top"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider text-white">
                  Printer · Laptop · Solar
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
