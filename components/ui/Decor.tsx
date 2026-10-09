import clsx from "clsx";

// Small centered label above section headings (icon + uppercase + underline).
export function Eyebrow({ children, light = false, className }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 border-b pb-1 text-[11px] font-bold uppercase tracking-[0.18em]",
        light ? "border-white/30 text-white/80" : "border-accent/20 text-accent",
        className
      )}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <circle cx="8" cy="8" r="2" />
        <path d="M8 1v3M8 12v3M1 8h3M12 8h3M3 3l2 2M11 11l2 2M13 3l-2 2M5 11l-2 2" />
      </svg>
      {children}
    </p>
  );
}

type Bar = { left: string; width: string; from: string; to?: string; top?: string; opacity?: number };

// Blurred vertical light bars. Each bar is a vertical gradient that fades to
// transparent at its ends; the heavy blur lets neighbouring bars melt into one
// soft glow instead of reading as separate stripes.
export function Streaks({ bars, blur = 28, className }: { bars: Bar[]; blur?: number; className?: string }) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0", className)}>
      {bars.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0"
          style={{
            filter: `blur(${blur}px)`,
            left: b.left,
            width: b.width,
            top: b.top ?? "0",
            opacity: b.opacity ?? 1,
            background: `linear-gradient(to bottom, transparent 0%, ${b.from} 40%, ${b.to ?? b.from} 75%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}

// Soft round glow (a blurred circle), usually tucked behind a streak.
export function Orb({ className, color, blur = 40 }: { className?: string; color: string; blur?: number }) {
  return (
    <span
      aria-hidden
      className={clsx("pointer-events-none absolute rounded-full", className)}
      style={{ background: color, filter: `blur(${blur}px)` }}
    />
  );
}
