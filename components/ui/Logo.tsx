import Image from "next/image";
import { BRAND } from "@/components/sections/config";

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
      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11">
        <Image
          src="/images/ab-logo-4k.png"
          alt={`${BRAND.name} logo — sharp white A and blue-gradient B mark`}
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 640px) 40px, 44px"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[15px] font-bold tracking-tight sm:text-base ${textClass}`}
        >
          AB Computer
        </span>
        {compact ? null : (
          <span
            className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${subClass}`}
          >
            Technologies
          </span>
        )}
      </span>
    </a>
  );
}
