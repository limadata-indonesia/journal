"use client";

import { motion } from "framer-motion";
import { Compass, FileX, LayoutTemplate, MessagesSquare } from "lucide-react";
import clsx from "clsx";
import { CHALLENGES } from "@/lib/data";
import { Eyebrow } from "./ui/Decor";
import { LinkButton } from "./ui/Button";

const ICONS = { FileX, Compass, LayoutTemplate, MessagesSquare };

export function Challenges() {
  return (
    <section className="bg-surface pt-24">
      <div className="mx-auto max-w-(--container-content) px-6 text-center lg:px-10">
        <Eyebrow>Tantangan</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
          Riset Sudah Kuat? Jangan Biarkan Tertahan di Meja Editor.
        </h2>
      </div>

      {/* Staggered card row: cards sit on a lavender band, alternating heights. */}
      <div className="relative mt-16">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-10 bg-[#d6dcf6]" />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {CHALLENGES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={clsx(
                  "border-b border-r border-border bg-surface px-8 pb-12 pt-12 lg:px-10",
                  i % 2 === 0 ? "lg:mb-0" : "lg:mb-10"
                )}
              >
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.4} />
                <h3 className="mt-8 text-2xl font-medium leading-snug text-primary lg:text-[28px]">{c.title}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center bg-surface py-12">
        <LinkButton href="#pricing">Ajukan Konsultasi</LinkButton>
      </div>
    </section>
  );
}
