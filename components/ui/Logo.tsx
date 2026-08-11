import { useId } from "react";
import { BRAND } from "@/components/sections/config";

function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  const gradId = `ab-mark-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill={`url(#${gradId})`} />
      {/* Subtle chip notch */}
      <path
        d="M28 2.5h4.5A5.5 5.5 0 0 1 38 8v4"
        fill="none"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Geometric AB */}
      <path
        fillRule="evenodd"
        d="M9.6 28.2 15.4 12.4h2.1l5.8 15.8h-2.35l-1.18-3.32H13.1l-1.18 3.32H9.6zm4.05-5.28h5.1L16.45 15.9 13.65 22.92z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        d="M23.1 12.4h5.35c2.55 0 4.18 1.28 4.18 3.38 0 1.55-.9 2.62-2.38 3.12 1.78.42 2.88 1.62 2.88 3.42 0 2.28-1.78 3.88-4.72 3.88H23.1V12.4zm2.22 6.35h2.92c1.28 0 2.02-.62 2.02-1.62s-.74-1.55-2.05-1.55h-2.89v3.17zm0 7.28h3.28c1.42 0 2.28-.7 2.28-1.82 0-1.12-.86-1.78-2.32-1.78h-3.24v3.6z"
        fill="white"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  theme = "dark",
  compact = false,
}: {
  className?: string;
  theme?: "dark" | "light";
  compact?: boolean;
}) {
  const textClass = theme === "dark" ? "text-white" : "text-foreground";
  const subClass = theme === "dark" ? "text-zinc-400" : "text-muted";

  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${BRAND.name} home`}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
        <BrandMark />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight sm:text-base ${textClass}`}>
          AB Computer
        </span>
        {compact ? null : (
          <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${subClass}`}>
            Technologies
          </span>
        )}
      </span>
    </a>
  );
}
