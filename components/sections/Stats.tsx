"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";

const STATS = [
  { value: 500, suffix: "+", label: "Devices restored" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 24, suffix: "h", label: "Avg. turnaround" },
  { value: 12, suffix: "+", label: "Years experience" },
];

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-dark-alt py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Trust</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Numbers that back every repair
          </h2>
        </MotionDiv>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              delay={index * 0.08}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md sm:p-8"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <p ref={ref} className="text-4xl font-black tracking-tight text-white sm:text-5xl">
      <span className="bg-gradient-to-r from-indigo via-purple to-cyan bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
    </p>
  );
}
