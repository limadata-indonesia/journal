"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import { PRICING_TIERS } from "@/lib/data";
import { Eyebrow, Orb, Streaks } from "./ui/Decor";
import { Button } from "./ui/Button";

const CARD_BARS = [
  { left: "62%", width: "14%", from: "rgba(77,182,255,0.35)", to: "rgba(255,255,255,0.12)" },
  { left: "76%", width: "14%", from: "rgba(124,92,255,0.45)", to: "rgba(255,255,255,0.08)" },
  { left: "90%", width: "10%", from: "rgba(77,182,255,0.5)", to: "rgba(255,255,255,0.1)" },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Harga</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-primary lg:text-[44px]">
            Paket yang Disesuaikan dengan Manuskripmu
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted">
            Setiap kerja sama dirancang bersama editor, bukan sekadar daftar harga.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const hi = !!tier.highlighted;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={clsx(
                  "relative flex flex-col overflow-hidden rounded-3xl p-8",
                  hi ? "bg-accent text-white shadow-premium" : "border border-border bg-surface"
                )}
              >
                {hi && (
                  <>
                    <Orb className="-right-16 -top-16 h-44 w-44 opacity-80" color="#4db6ff" />
                    <Streaks bars={CARD_BARS} />
                  </>
                )}
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p className={clsx("text-xl font-bold", !hi && "text-primary")}>{tier.name}</p>
                    {hi && <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Paling diminati</span>}
                  </div>
                  <p className={clsx("mt-2 text-sm leading-relaxed", hi ? "text-white/80" : "text-muted")}>{tier.tagline}</p>

                  <div className={clsx("mt-7 border-t pt-6", hi ? "border-white/20" : "border-border")}>
                    <p className={clsx("text-sm font-medium", hi ? "text-white/75" : "text-muted")}>{tier.price}</p>
                    <p className={clsx("mt-1 text-[32px] font-bold tracking-tight", !hi && "text-primary")}>{tier.priceDetail}</p>
                    <p className={clsx("mt-1 text-xs", hi ? "text-white/70" : "text-muted")}>{tier.priceNote}</p>
                  </div>

                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className={clsx("mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full", hi ? "bg-white text-accent" : "bg-accent text-white")}>
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className={hi ? "text-white/90" : "text-primary/85"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button type="button" variant={hi ? "white" : "outline"} className="mt-9 self-start">
                    Ajukan Konsultasi
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
