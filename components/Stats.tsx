"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary lg:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
