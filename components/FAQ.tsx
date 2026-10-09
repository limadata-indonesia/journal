"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { FAQ_ITEMS } from "@/lib/data";
import { LinkButton } from "./ui/Button";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const half = Math.ceil(FAQ_ITEMS.length / 2);
  const columns = [FAQ_ITEMS.slice(0, half), FAQ_ITEMS.slice(half)];

  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary lg:text-[44px]">Pertanyaan Seputar Layanan Kami</h2>

        <div className="mt-14 grid grid-cols-1 gap-x-14 lg:grid-cols-2">
          {columns.map((items, ci) => (
            <div key={ci}>
              {items.map((item, ii) => {
                const n = ci * half + ii;
                const isOpen = open === n;
                return (
                  <div key={item.q} className="border-b border-border">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : n)}
                      className="flex w-full items-center gap-4 py-4 text-left"
                    >
                      <span
                        className={clsx(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-lg text-base font-semibold transition-colors",
                          isOpen ? "bg-primary text-white" : "bg-white text-accent shadow-soft"
                        )}
                      >
                        {n + 1}
                      </span>
                      <span className="flex-1 text-base font-semibold leading-snug text-primary lg:text-[17px]">{item.q}</span>
                      <ChevronDown className={clsx("h-4 w-4 shrink-0 text-primary transition-transform duration-300", isOpen && "rotate-180")} />
                    </button>
                    <div
                      className={clsx(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <p className="min-h-0 overflow-hidden pl-[52px] pr-6 text-[15px] leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <LinkButton href="#pricing" size="lg">
            Ajukan Konsultasi
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
