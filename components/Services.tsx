"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { ICONS } from "@/lib/icons";
import { Card } from "./ui/Card";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Editing services built for publication</h2>
          <p className="mt-4 text-lg text-muted">
            Every service is delivered by subject-matter expert editors, not generalists.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              >
                <Card className="h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-base font-semibold text-text">{service.title}</p>
                  <p className="mt-1.5 text-sm text-muted">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
