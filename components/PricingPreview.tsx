"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import { PRICING_TIERS } from "@/lib/data";
import { Button } from "./ui/Button";

export function PricingPreview() {
  return (
    <section id="pricing" className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Paket yang disesuaikan dengan manuskripmu</h2>
          <p className="mt-4 text-lg text-muted">Setiap kerja sama dirancang bersama editor, bukan sekadar daftar harga.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={clsx(
                "flex flex-col rounded-lg border p-8",
                tier.highlighted
                  ? "border-primary bg-primary text-white shadow-premium lg:-translate-y-3"
                  : "border-border bg-background shadow-soft"
              )}
            >
              <p className={clsx("text-lg font-bold", !tier.highlighted && "text-text")}>{tier.name}</p>
              <p className={clsx("mt-2 text-sm", tier.highlighted ? "text-white/80" : "text-muted")}>
                {tier.tagline}
              </p>

              <div className="mt-6">
                <p className={clsx("text-sm font-medium", tier.highlighted ? "text-white/70" : "text-muted")}>
                  {tier.price}
                </p>
                <p className={clsx("mt-1 text-2xl font-bold", !tier.highlighted && "text-text")}>
                  {tier.priceDetail}
                </p>
                <p className={clsx("mt-1 text-xs", tier.highlighted ? "text-white/70" : "text-muted")}>
                  {tier.priceNote}
                </p>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={clsx("mt-0.5 h-4 w-4 shrink-0", tier.highlighted ? "text-white" : "text-success")} />
                    <span className={tier.highlighted ? "text-white/90" : "text-text/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8"
                variant={tier.highlighted ? "secondary" : "outline"}
              >
                Ajukan Konsultasi
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
