"use client";

import { motion } from "framer-motion";
import { Orb, Streaks } from "./ui/Decor";
import { STATS } from "@/lib/data";

const INTRO_BARS = [
  { left: "0%", width: "35%", from: "rgba(124,92,255,0.1)", to: "rgba(124,92,255,0.05)" },
  { left: "20%", width: "40%", from: "rgba(77,182,255,0.18)", to: "rgba(77,182,255,0.35)" },
  { left: "45%", width: "40%", from: "rgba(77,182,255,0.22)", to: "rgba(77,182,255,0.4)" },
];

// Intro split ("Manuskrip yang tepat sasaran...") followed by the stats row.
export function Stats() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-background pb-24">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-[3%] hidden h-[360px] w-[260px] lg:block">
        <Orb className="-left-8 top-[34%] h-24 w-24 opacity-30" color="#7c5cff" blur={30} />
        <Orb className="-bottom-24 left-[45%] h-64 w-64 opacity-45" color="#4db6ff" blur={60} />
        <Streaks bars={INTRO_BARS} />
      </div>

      <div className="relative mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[2rem] font-semibold leading-[1.15] text-primary lg:text-[44px]"
          >
            Manuskrip yang Tepat Sasaran Adalah Kunci Publikasi yang Berhasil.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-lg font-medium leading-relaxed text-primary/90"
          >
            <p>
              Riset yang kuat belum tentu terbit. Banyak manuskrip ditolak bukan karena temuannya, melainkan karena bahasa,
              struktur, atau jurnal tujuan yang kurang tepat.
            </p>
            <p>Terindeks mendampingimu menembus jurnal terakreditasi Sinta dan terindeks Scopus, tanpa jalan pintas.</p>
            <p>
              Dari rekomendasi jurnal, penyuntingan oleh editor sesuai bidang, hingga respons reviewer, setiap tahap
              dikerjakan bersama tim ahli.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:ml-[calc(50%+2rem)] lg:mt-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-6"
            >
              <p className="text-4xl font-bold tracking-tight text-accent">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
