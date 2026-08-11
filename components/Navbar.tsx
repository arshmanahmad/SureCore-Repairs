"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#050a14]/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                "active" in link && link.active
                  ? "text-brand"
                  : "text-white hover:text-brand"
              }`}
            >
              {link.label}
              {"hasDropdown" in link && link.hasDropdown ? (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="opacity-70 transition-transform group-hover:translate-y-0.5"
                  aria-hidden
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </a>
          ))}
        </nav>

        <a
          href="tel:+923081730799"
          className="hidden items-center gap-3 rounded-full border border-brand px-4 py-2 transition-all duration-200 hover:bg-brand/10 sm:inline-flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
            <PhoneIcon />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
              Call Us Now
            </span>
            <span className="text-[15px] font-bold text-brand">+92 308 1730799</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-brand hover:text-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#050a14]/98 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                    "active" in link && link.active
                      ? "bg-brand/10 text-brand"
                      : "text-white hover:bg-white/5 hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+923081730799"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-brand px-4 py-3 text-brand transition-colors hover:bg-brand hover:text-black"
              >
                <PhoneIcon />
                <span className="font-bold">+92 308 1730799</span>
              </a>
              <a
                href="tel:+923021656563"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-brand px-4 py-3 text-brand transition-colors hover:bg-brand hover:text-black"
              >
                <PhoneIcon />
                <span className="font-bold">+92 302 1656563</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
