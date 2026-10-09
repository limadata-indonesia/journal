"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import { ALUR_LAYANAN } from "@/lib/data";
import { Eyebrow } from "./ui/Decor";
import { LinkButton } from "./ui/Button";

export function AlurLayanan() {
  return (
    <section id="alur" className="bg-background pb-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Alur Layanan</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
            Dari Manuskrip hingga LoA, Bertahap & Transparan
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted">
            Pembayaran per termin mengikuti progres, dari pengiriman manuskrip hingga surat penerimaan terbit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-border lg:grid-cols-3">
          {ALUR_LAYANAN.map((group, gi) => (
            <motion.div
              key={group.termin}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.1 }}
              className="bg-surface p-8 lg:p-10"
            >
              <p className="text-[32px] font-bold tracking-tight text-accent">{group.termin}</p>
              <p className="mt-1 text-sm font-semibold text-primary">{group.note}</p>

              <ol className="relative mt-8 flex flex-col gap-7 border-l border-accent/25 pl-7">
                {group.steps.map((step) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[calc(1.75rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
                    <p className="font-semibold leading-snug text-primary">{step.title}</p>
                    {"detail" in step && step.detail && <p className="mt-1 text-sm text-muted">{step.detail}</p>}

                    {"branch" in step && step.branch && (
                      <div className="mt-3 flex flex-col gap-2">
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                          <CircleCheck className="h-3.5 w-3.5" /> {step.branch.pass}
                        </span>
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-warning/10 px-3 py-1 text-xs font-semibold text-warning">
                          <CircleX className="h-3.5 w-3.5" /> {step.branch.fail}
                        </span>
                        {step.branch.failNote && (
                          <span className="flex items-start gap-1 text-xs leading-relaxed text-muted">
                            <ArrowRight className="mt-0.5 h-3 w-3 shrink-0" /> {step.branch.failNote}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <LinkButton href="#faq" variant="outline">
            Pelajari Skema Pembayaran
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
