"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-background">
      {items.map((item, i) => (
        <div key={item.q} className="px-6">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-text"
          >
            {item.q}
            <ChevronDown
              className={clsx(
                "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                open === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={clsx(
              "grid overflow-hidden transition-all duration-300 ease-out",
              open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <p className="min-h-0 text-sm leading-relaxed text-muted">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
