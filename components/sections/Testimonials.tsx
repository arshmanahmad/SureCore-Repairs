"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";

const REVIEWS = [
  {
    quote:
      "Printer SLA response is unreal. Error codes cleared same day, and our print queue has stayed stable for months.",
    name: "Sara Malik",
    role: "IT Lead, Vertex Co.",
  },
  {
    quote:
      "AB Computer Technologies recovered our office fleet after a weekend outage. Transparent pricing and board-level skill we couldn't find elsewhere.",
    name: "Ayesha Khan",
    role: "Ops Director, Nexus Labs",
  },
  {
    quote:
      "They designed and installed our rooftop solar, then integrated monitoring with our IT stack. One team, zero friction.",
    name: "Hassan Ali",
    role: "Founder, BrightPrint",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Trusted by teams who can&apos;t afford downtime
          </h2>
        </MotionDiv>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <MotionDiv key={review.name} delay={index * 0.1}>
              <TiltCard review={review} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  review,
}: {
  review: { quote: string; name: string; role: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const glare = useMotionTemplate`radial-gradient(400px circle at ${useTransform(
    springX,
    [-0.5, 0.5],
    [0, 100],
  )}% ${useTransform(springY, [-0.5, 0.5], [0, 100])}%, rgba(99,102,241,0.18), transparent 50%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full rounded-3xl border border-gray-100 bg-white/80 p-7 shadow-xl shadow-zinc-200/70 backdrop-blur-md"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background: glare }}
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative">
        <div className="flex gap-1 text-indigo">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <p className="mt-5 text-base leading-relaxed text-zinc-600">&ldquo;{review.quote}&rdquo;</p>
        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="font-bold text-foreground">{review.name}</p>
          <p className="mt-1 text-sm text-muted">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.9L22 10l-5 4.6L18.2 22 12 18.3 5.8 22 7 14.6 2 10l7.1-1.1L12 2z" />
    </svg>
  );
}
