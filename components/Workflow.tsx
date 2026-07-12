"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, UserCheck, PenTool, ShieldCheck, PackageCheck } from "lucide-react";
import { WORKFLOW_STEPS } from "@/lib/data";

const ICONS = [Upload, Sparkles, UserCheck, PenTool, ShieldCheck, PackageCheck];

export function Workflow() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">AI-assisted, human-perfected</h2>
          <p className="mt-4 text-lg text-muted">
            Every manuscript moves through the same rigorous six-step process.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {WORKFLOW_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-xs text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
