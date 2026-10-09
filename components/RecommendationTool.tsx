"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { JOURNAL_FIELDS, JOURNAL_RECOMMENDATIONS, type JournalField } from "@/lib/data";
import { LinkButton } from "@/components/ui/Button";

// Card header gradients, cycled per card (Scopus gets the violet one).
const HEADERS = [
  "bg-[linear-gradient(135deg,#0f2899,#1638c2_55%,#4db6ff)]",
  "bg-[linear-gradient(135deg,#1235be,#4db6ff)]",
  "bg-[linear-gradient(135deg,#1c2468,#1638c2)]",
];
const SCOPUS_HEADER = "bg-[linear-gradient(135deg,#1638c2,#7c5cff)]";

export function RecommendationTool() {
  const [selected, setSelected] = useState<JournalField>(JOURNAL_FIELDS[0]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {JOURNAL_FIELDS.map((field) => (
          <button
            key={field}
            type="button"
            onClick={() => setSelected(field)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              selected === field
                ? "border-accent bg-accent text-white"
                : "border-border bg-surface text-primary hover:border-accent/50"
            )}
          >
            {field}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10"
        >
          <p className="text-center text-sm font-medium text-muted">
            Contoh jurnal untuk bidang &ldquo;{selected}&rdquo;, klik untuk membuka situs resmi jurnal
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {JOURNAL_RECOMMENDATIONS[selected].map((j, i) => (
              <a
                key={j.name}
                href={j.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium"
              >
                <div className={clsx("relative flex h-28 items-end overflow-hidden p-4", j.type === "Scopus" ? SCOPUS_HEADER : HEADERS[i % HEADERS.length])}>
                  <span aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky/50" />
                  <span aria-hidden className="absolute right-10 top-0 h-full w-6 bg-white/15 blur-[2px]" />
                  <span className="relative text-2xl font-bold tracking-tight text-white">
                    {j.type} <span className="text-white/75">{j.tier}</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[15px] font-semibold leading-snug text-primary">{j.name}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{j.focus}</p>
                  <span className="mt-5 flex items-center gap-2.5 text-sm font-semibold text-primary">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-white transition group-hover:bg-accent">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                    Kunjungi Jurnal
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-surface p-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Ini contoh jurnal nyata di bidang tersebut, bukan rekomendasi yang dipersonalisasi. Untuk rekomendasi yang sesuai
              manuskrip dan target akreditasimu, konsultasikan langsung dengan tim editor kami.
            </p>
            <LinkButton href="#pricing" className="shrink-0">
              Konsultasikan Manuskripmu
            </LinkButton>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
