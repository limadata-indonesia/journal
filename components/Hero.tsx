"use client";

import { motion } from "framer-motion";
import { Upload, FileSearch } from "lucide-react";
import { Button } from "./ui/Button";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-(--container-content) grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-6xl"
          >
            Terbitkan dengan Percaya Diri.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-text/80 lg:text-3xl"
          >
            Editing Akademik Profesional untuk Jurnal Bereputasi Tinggi.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-muted"
          >
            Dari editing bahasa hingga dukungan submisi jurnal, editor ahli kami membantu
            peneliti memperjelas tulisan, memperkuat manuskrip, dan meningkatkan kesiapan
            untuk dipublikasikan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg">
              <Upload className="h-4 w-4" /> Unggah Manuskripmu
            </Button>
            <Button size="lg" variant="outline">
              <FileSearch className="h-4 w-4" /> Lihat Contoh Editing
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
