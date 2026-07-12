"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, Loader2, Clock, UserCheck, Gauge, DollarSign, Target } from "lucide-react";
import clsx from "clsx";
import { ANALYZER_RESULT } from "@/lib/data";
import { Button } from "./ui/Button";

type Phase = "idle" | "analyzing" | "done";

export function ManuscriptAnalyzer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startAnalysis = useCallback((name: string) => {
    setFileName(name);
    setPhase("analyzing");
    setTimeout(() => setPhase("done"), 1600);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      startAnalysis(file?.name ?? "Manuscript_v3_final.docx");
    },
    [startAnalysis]
  );

  const onFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) startAnalysis(file.name);
    },
    [startAnalysis]
  );

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Lihat manuskripmu dianalisis secara instan</h2>
          <p className="mt-4 text-lg text-muted">
            Unggah filemu di bawah untuk melihat cara kerja analisis AI kami sebelum ditinjau editor.
          </p>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.div
                key="idle"
                exit={{ opacity: 0, scale: 0.98 }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                onClick={() => inputRef.current?.click()}
                className={clsx(
                  "flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed p-16 text-center transition-colors",
                  dragOver ? "border-accent bg-accent/5" : "border-border bg-surface hover:border-accent/40"
                )}
              >
                <input ref={inputRef} type="file" className="hidden" onChange={onFileSelect} />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <UploadCloud className="h-6 w-6" />
                </span>
                <p className="mt-4 text-base font-semibold text-text">Seret dan lepas manuskripmu di sini</p>
                <p className="mt-1 text-sm text-muted">atau klik untuk memilih file — .docx, .pdf hingga 25MB</p>
              </motion.div>
            )}

            {phase === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-border bg-surface p-16 text-center"
              >
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
                <p className="mt-4 text-sm font-medium text-text">Menganalisis {fileName}...</p>
              </motion.div>
            )}

            {phase === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-border bg-background p-6 shadow-premium lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FileText className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-sm font-semibold text-text">{fileName}</p>
                  </div>
                  <button
                    onClick={() => setPhase("idle")}
                    className="text-xs font-medium text-muted hover:text-text"
                  >
                    Analisis file lain
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <ResultRow icon={FileText} label="Jumlah Kata" value={ANALYZER_RESULT.wordCount} />
                  <ResultRow icon={Clock} label="Estimasi Pengiriman" value={ANALYZER_RESULT.estimatedDelivery} />
                  <ResultRow icon={UserCheck} label="Editor yang Disarankan" value={ANALYZER_RESULT.recommendedEditor} />
                  <ResultRow icon={Target} label="Tingkat Kesulitan Jurnal" value={ANALYZER_RESULT.journalDifficulty} />
                  <ResultRow icon={DollarSign} label="Estimasi Harga" value={ANALYZER_RESULT.estimatedPrice} />
                  <div className="rounded-2xl bg-surface p-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Gauge className="h-3.5 w-3.5" /> Kesiapan Publikasi
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${ANALYZER_RESULT.publicationReadiness}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                        />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {ANALYZER_RESULT.publicationReadiness}%
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full sm:w-auto">Lanjut ke Pencocokan Editor</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ResultRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof FileText;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-surface p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <p className="mt-1.5 text-sm font-semibold text-text">{value}</p>
    </div>
  );
}
