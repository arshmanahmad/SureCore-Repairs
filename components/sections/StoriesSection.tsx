"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { serviceImages, WHATSAPP_MESSAGES } from "./config";

const STORIES = [
  {
    id: "printer",
    tab: "Printer",
    href: "#printer-repair",
    accent: "from-cyan to-teal-400",
    ring: "ring-cyan/40",
    problem: {
      title: "Office printer jammed mid-day",
      text: "Important documents stuck. Staff waiting. Printing stopped at the worst moment.",
    },
    solution: {
      title: "On-site printer repair",
      text: "We visited the office, cleared the fault, and restored printing quickly.",
    },
    result: "Printer running — office back to normal.",
    video: "/videos/story-printer.mp4",
    poster: serviceImages.printer,
    contact: "asmeer" as const,
    whatsappMessage: WHATSAPP_MESSAGES.printer,
  },
  {
    id: "pc",
    tab: "PC & Laptop",
    href: "#pc-repair",
    accent: "from-indigo to-purple",
    ring: "ring-indigo/40",
    problem: {
      title: "Laptop suddenly died",
      text: "Work and studies stopped. Blank screen. Panic. No idea what to do next.",
    },
    solution: {
      title: "Expert checkup & repair",
      text: "We found the fault, explained the fix in plain words, and repaired it the same day.",
    },
    result: "Working again — files safe, deadline met.",
    video: "/videos/story-pc.mp4",
    poster: serviceImages.pc,
    contact: "ahsan" as const,
    whatsappMessage: WHATSAPP_MESSAGES.pc,
  },
  {
    id: "solar",
    tab: "Solar",
    href: "#solar",
    accent: "from-emerald-500 to-cyan",
    ring: "ring-emerald-400/40",
    problem: {
      title: "Electricity bill kept rising",
      text: "Monthly costs felt out of control. No clear plan to reduce them.",
    },
    solution: {
      title: "Solar survey & installation",
      text: "We surveyed the site, explained options simply, and installed a system that fits the budget.",
    },
    result: "Lower bills — cleaner, more reliable power.",
    video: "/videos/story-solar.mp4",
    poster: serviceImages.solar,
    contact: "asmeer" as const,
    whatsappMessage: WHATSAPP_MESSAGES.solar,
  },
] as const;

export function StoriesSection() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const story = STORIES[active];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    void video.play().catch(() => {
      /* autoplay may be blocked — poster still shows */
    });
  }, [active]);

  // Gentle auto-rotate between stories
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STORIES.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="stories" className="relative overflow-hidden bg-dark py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_55%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Real Problems. Real Fixes.
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            From stress to{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              solved
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Watch how AB Computer Technologies turns everyday Multan problems into clear results —
            one service at a time.
          </p>
        </MotionDiv>

        {/* Service tabs */}
        <MotionDiv delay={0.08} className="mt-10 flex flex-wrap justify-center gap-3">
          {STORIES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`min-h-12 rounded-full px-5 text-sm font-semibold transition-all duration-200 ${
                active === index
                  ? `bg-gradient-to-r ${item.accent} text-white shadow-lg shadow-indigo/30 scale-105`
                  : "border border-white/15 bg-white/5 text-zinc-300 hover:border-cyan/40 hover:text-white"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </MotionDiv>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Video stage */}
          <MotionDiv className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl shadow-indigo/20 ring-1 ${story.ring}`}
              >
                <div className="relative aspect-[16/10]">
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    poster={story.poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  >
                    <source src={story.video} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-dark/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-rose-400/70" />
                      <span className="relative h-2 w-2 rounded-full bg-rose-400" />
                    </span>
                    Short story clip
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-lg font-bold text-white sm:text-xl">{story.result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </MotionDiv>

          {/* Problem → Solution → Result */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id + "-copy"}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <Step
                  label="Problem"
                  tone="text-rose-400"
                  title={story.problem.title}
                  text={story.problem.text}
                  delay={0}
                />
                <div className="flex justify-center py-1">
                  <span className={`h-8 w-0.5 rounded-full bg-gradient-to-b ${story.accent}`} />
                </div>
                <Step
                  label="Solution"
                  tone="text-cyan"
                  title={story.solution.title}
                  text={story.solution.text}
                  delay={0.08}
                />
                <div className="flex justify-center py-1">
                  <span className={`h-8 w-0.5 rounded-full bg-gradient-to-b ${story.accent}`} />
                </div>
                <Step
                  label="Result"
                  tone="text-emerald-400"
                  title={story.result}
                  text="Clear outcome our Multan customers care about — less stress, more confidence."
                  delay={0.16}
                />

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={story.href}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r ${story.accent} px-7 text-sm font-semibold text-white shadow-lg shadow-indigo/30 transition-all duration-200 hover:scale-105`}
                  >
                    See {story.tab} service
                    <span aria-hidden>→</span>
                  </a>
                  <WhatsAppLink contact={story.contact} message={story.whatsappMessage} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-10 flex justify-center gap-2">
          {STORIES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.tab} story`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === index ? "w-8 bg-cyan" : "w-2.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  label,
  tone,
  title,
  text,
  delay,
}: {
  label: string;
  tone: string;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone}`}>{label}</p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
    </motion.div>
  );
}
