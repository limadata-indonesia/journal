"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/data";
import { ICONS } from "@/lib/icons";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Why researchers choose Publiora</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="text-center sm:text-left"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mx-0">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-base font-semibold text-text">{item.title}</p>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
