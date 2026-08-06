import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded border border-border bg-background shadow-soft transition-shadow hover:shadow-premium",
        className
      )}
      {...props}
    />
  );
}
