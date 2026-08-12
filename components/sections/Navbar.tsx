"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { OFFERED_SERVICES } from "./config";

/** Major page sections — keep in scroll order */
const LINKS = [
  { label: "Services", href: "#services" },
  ...OFFERED_SERVICES.map((s) => ({ label: s.shortLabel, href: s.href })),
  { label: "Printer Types", href: "#printers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const COMPACT_HREFS = [
  "#services",
  "#printer-repair",
  "#pc-repair",
  "#solar",
  "#pricing",
  "#contact",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = ["home", ...LINKS.map((l) => l.href.slice(1))];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) {
          setActiveHref(`#${top.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkIdle = scrolled
    ? "text-zinc-600 hover:text-brand"
    : "text-zinc-300 hover:text-white";
  const linkActive = scrolled ? "text-brand" : "text-white";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "border-b border-zinc-200/70 bg-white/85 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-white/5 bg-dark/55 py-4 backdrop-blur-lg"
      }`}
    >
      {!scrolled ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-light/50 to-transparent"
        />
      ) : null}

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Logo theme={scrolled ? "light" : "dark"} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {LINKS.map((link) => {
            const active = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-2.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200 ${
                  active ? linkActive : linkIdle
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand to-brand-light"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <nav
          className="hidden items-center gap-0.5 lg:flex xl:hidden"
          aria-label="Primary compact"
        >
          {LINKS.filter((l) => COMPACT_HREFS.includes(l.href)).map((link) => {
            const active = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-2 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  active ? linkActive : linkIdle
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active-compact"
                    className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand to-brand-light"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="group relative hidden min-h-11 overflow-hidden rounded-full bg-gradient-to-r from-brand to-brand-light p-[1px] shadow-lg shadow-brand/25 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-light/30 md:inline-flex"
        >
          <span className="relative inline-flex min-h-[42px] items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 text-sm font-semibold text-white">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-[120%]"
            />
            Book Now
          </span>
        </a>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 lg:hidden ${
            scrolled
              ? "border-zinc-200 bg-white/80 text-foreground hover:border-brand/40 hover:text-brand"
              : "border-white/15 bg-white/5 text-white hover:border-brand-light/50 hover:text-brand-light"
          }`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-zinc-200/80 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-0.5 px-4 py-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.25 }}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    activeHref === link.href
                      ? "bg-gradient-to-r from-brand/10 to-brand-light/10 text-brand"
                      : "text-foreground hover:bg-brand/5 hover:text-brand"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-light font-semibold text-white shadow-lg shadow-brand/25"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
