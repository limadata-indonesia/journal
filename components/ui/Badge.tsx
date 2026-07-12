import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "primary" | "success" | "warning" | "neutral";

const tones: Record<Tone, string> = {
  primary: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  neutral: "bg-surface text-muted",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
