"use client";

import { motion } from "framer-motion";
import { FileText, User, Calendar, Gauge, CheckCircle2 } from "lucide-react";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-premium"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-text">Manuscript_v3_final.docx</p>
            <p className="text-xs text-muted">Diunggah 2 menit lalu</p>
          </div>
        </div>
        <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
          Diproses
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-surface p-4">
          <p className="text-xs text-muted">Jumlah Kata</p>
          <p className="mt-1 text-lg font-bold text-text">6.842</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="text-xs text-muted">Target Jurnal</p>
          <p className="mt-1 text-sm font-semibold text-text">Sinta 2 & Scopus Q2</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <User className="h-3.5 w-3.5" /> Editor yang Ditugaskan
          </div>
          <p className="mt-1 text-sm font-semibold text-text">Dr. Farah Al-Sayed</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar className="h-3.5 w-3.5" /> Tanggal Pengiriman
          </div>
          <p className="mt-1 text-sm font-semibold text-text">14 Agu 2026</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
            <Gauge className="h-3.5 w-3.5" /> Kesiapan Publikasi
          </div>
          <span className="text-sm font-bold text-primary">72%</span>
        </div>
        <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-surface">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-success">
        <CheckCircle2 className="h-4 w-4" />
        Dicocokkan dengan editor ahli untuk jurnal Sinta 2 & Scopus Q2
      </div>
    </motion.div>
  );
}
