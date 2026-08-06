"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import clsx from "clsx";
import { JOURNAL_FIELDS, JOURNAL_RECOMMENDATIONS, type JournalField } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export function RecommendationTool() {
  const [selected, setSelected] = useState<JournalField | null>(JOURNAL_FIELDS[0]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {JOURNAL_FIELDS.map((field) => (
          <button
            key={field}
            type="button"
            onClick={() => setSelected(field)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              selected === field
                ? "border-accent bg-accent text-white"
                : "border-border bg-background text-text hover:border-accent/50"
            )}
          >
            {field}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <p className="text-sm font-semibold text-muted">
              Contoh jurnal untuk bidang &ldquo;{selected}&rdquo; — klik untuk membuka situs resmi jurnal
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNAL_RECOMMENDATIONS[selected].map((j) => (
                <a key={j.name} href={j.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="flex h-full flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={clsx(
                          "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                          j.type === "Sinta" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                        )}
                      >
                        {j.type} {j.tier}
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                    </div>
                    <p className="font-heading mt-3 text-base font-bold text-text">{j.name}</p>
                    <p className="mt-1 text-sm text-muted">{j.focus}</p>
                  </Card>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 rounded border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Ini contoh jurnal nyata di bidang tersebut, bukan rekomendasi yang dipersonalisasi. Untuk rekomendasi yang sesuai manuskrip dan target akreditasimu, konsultasikan langsung dengan tim editor kami.
              </p>
              <LinkButton href="#pricing" className="shrink-0">
                Konsultasikan Manuskripmu <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
