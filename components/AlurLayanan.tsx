"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import { ALUR_LAYANAN } from "@/lib/data";

export function AlurLayanan() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Alur Layanan Jasa Publikasi Jurnal Terindeks</h2>
          <p className="mt-4 text-lg text-muted">
            Proses bertahap per termin pembayaran, dari pengiriman manuskrip hingga surat penerimaan (LoA) terbit.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {ALUR_LAYANAN.map((group, gi) => (
            <div key={group.termin} className="mb-14 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">{group.termin}</span>
                <span className="text-sm font-medium text-muted">{group.note}</span>
              </motion.div>

              <div className="relative flex flex-col gap-8 border-l-2 border-border pl-8">
                {group.steps.map((step, si) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: si * 0.06 }}
                    className="relative"
                  >
                    <span className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                    <p className="font-semibold text-text">{step.title}</p>
                    {step.detail && <p className="mt-1 text-sm text-muted">{step.detail}</p>}

                    {step.branch && (
                      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                          <CircleCheck className="h-3.5 w-3.5" /> {step.branch.pass}
                        </span>
                        <div className="inline-flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-warning/10 px-3 py-1 text-xs font-semibold text-warning">
                            <CircleX className="h-3.5 w-3.5" /> {step.branch.fail}
                          </span>
                          {step.branch.failNote && (
                            <span className="flex items-center gap-1 text-xs text-muted">
                              <ArrowRight className="h-3 w-3 shrink-0" /> {step.branch.failNote}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
