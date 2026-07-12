"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { PUBLICATION_JOURNEY } from "@/lib/data";

export function PublicationJourney() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Perjalanan publikasi secara menyeluruh</h2>
          <p className="mt-4 text-lg text-muted">
            Kami hadir di momen-momen yang paling menentukan untuk penerimaan.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {PUBLICATION_JOURNEY.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={clsx(
                  "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold",
                  step.helped
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-border bg-background text-muted"
                )}
              >
                {step.helped ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
              </span>
              <p className={clsx("mt-3 text-sm font-semibold", step.helped ? "text-primary" : "text-text")}>
                {step.title}
              </p>
              {step.helped && <p className="mt-1 text-xs text-muted">Publiora membantu di sini</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
