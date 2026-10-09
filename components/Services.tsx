"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileCheck2, MessageSquareReply, PenLine, Target } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Eyebrow, Streaks } from "./ui/Decor";
import { LinkButton } from "./ui/Button";

const ICONS = { Target, PenLine, FileCheck2, MessageSquareReply };

const TONES = {
  peach: "from-[#f6d9d0] to-white",
  periwinkle: "from-[#aebcff] to-white",
  mint: "from-[#cdeedd] to-white",
  cyan: "from-[#b9ecff] to-white",
};

const SIDE_BARS = [
  { left: "0%", width: "4%", from: "rgba(77,182,255,0.75)", to: "rgba(22,56,194,0.9)", top: "35%" },
  { left: "4%", width: "6%", from: "rgba(77,182,255,0.4)", to: "rgba(22,56,194,0.8)", top: "45%" },
  { left: "88%", width: "6%", from: "rgba(124,92,255,0.45)", to: "rgba(124,92,255,0.85)", top: "40%" },
  { left: "94%", width: "6%", from: "rgba(77,182,255,0.6)", to: "rgba(22,56,194,0.9)", top: "30%" },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f3f5fd_0%,#f3f5fd_45%,#8fa0e6_75%,#1638c2_100%)] pb-24 pt-20"
    >
      <Streaks bars={SIDE_BARS} />

      <div className="relative mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Layanan Kami</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
            Layanan Publikasi Ilmiah untuk Membawa Risetmu Lebih Jauh
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-primary/85">
            Ubah draf manuskrip menjadi artikel yang siap bersaing di jurnal Sinta dan Scopus.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.a
                key={s.title}
                href="#pricing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`group flex min-h-[300px] flex-col rounded-2xl bg-gradient-to-b p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 ${TONES[s.tone]}`}
              >
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.4} />
                <h3 className="mt-8 text-[22px] font-medium leading-snug text-primary">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary/75">{s.body}</p>
                <ArrowUpRight className="mt-auto h-5 w-5 pt-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <LinkButton href="#pricing" variant="white">
            Lihat Paket & Harga
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
