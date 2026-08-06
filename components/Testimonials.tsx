"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Card } from "./ui/Card";

export function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Testimoni Peneliti</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="flex h-full flex-col p-6">
                <Quote className="h-6 w-6 text-accent/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <p className="text-xs text-muted">{t.institution}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
