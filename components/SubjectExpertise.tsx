"use client";

import { motion } from "framer-motion";
import { SUBJECT_AREAS } from "@/lib/data";

export function SubjectExpertise() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Ahli sesuai bidang keilmuan, bukan editor umum</h2>
          <p className="mt-4 text-lg text-muted">Editor yang dicocokkan secara presisi dengan bidang risetmu.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SUBJECT_AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-center rounded-2xl border border-border bg-background px-4 py-8 text-center shadow-soft transition-all hover:border-accent/40 hover:shadow-premium"
            >
              <span className="text-base font-semibold text-text transition group-hover:text-primary">
                {area}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
