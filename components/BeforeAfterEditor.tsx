"use client";

import { useState } from "react";
import clsx from "clsx";
import { Badge } from "./ui/Badge";

const TABS = ["Original", "Edited"] as const;
const TAB_LABELS: Record<(typeof TABS)[number], string> = {
  Original: "Naskah Asli",
  Edited: "Hasil Editing",
};

export function BeforeAfterEditor() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Edited");

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Lihat perbedaannya, baris demi baris</h2>
          <p className="mt-4 text-lg text-muted">
            Contoh nyata, sebelum dan sesudah proses scientific editing kami.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Badge tone="warning">Tata Bahasa</Badge>
          <Badge tone="primary">Gaya Bahasa Akademik</Badge>
          <Badge tone="success">Keringkasan</Badge>
          <Badge tone="neutral">Kejelasan</Badge>
        </div>

        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                "rounded-full px-4 py-1.5 text-sm font-medium transition",
                tab === t ? "bg-primary text-white" : "border border-border text-muted"
              )}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className={clsx("rounded-2xl border border-border bg-background p-6", tab !== "Original" && "hidden lg:block")}>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Naskah Asli</p>
            <p className="mt-4 text-base leading-relaxed text-text/80">
              This study{" "}
              <mark className="rounded bg-warning/20 px-1 text-text line-through decoration-warning">
                is investigate
              </mark>{" "}
              the effect of temperature on the{" "}
              <mark className="rounded bg-warning/20 px-1 text-text line-through decoration-warning">
                growth of bacteria in controlled environment
              </mark>
              , and{" "}
              <mark className="rounded bg-warning/20 px-1 text-text line-through decoration-warning">
                result show
              </mark>{" "}
              that higher{" "}
              <mark className="rounded bg-warning/20 px-1 text-text line-through decoration-warning">
                temperature is increasing
              </mark>{" "}
              the growth rate significantly{" "}
              <mark className="rounded bg-warning/20 px-1 text-text line-through decoration-warning">
                compare to
              </mark>{" "}
              lower temperature groups.
            </p>
          </div>

          <div className={clsx("rounded-2xl border border-border bg-background p-6", tab !== "Edited" && "hidden lg:block")}>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Hasil Editing</p>
            <p className="mt-4 text-base leading-relaxed text-text">
              This study{" "}
              <mark className="rounded bg-success/20 px-1 text-text">investigates</mark> the effect of
              temperature on{" "}
              <mark className="rounded bg-success/20 px-1 text-text">
                bacterial growth under controlled conditions
              </mark>
              . <mark className="rounded bg-success/20 px-1 text-text">Results indicate</mark> that higher{" "}
              <mark className="rounded bg-success/20 px-1 text-text">
                temperatures significantly increase
              </mark>{" "}
              growth rate{" "}
              <mark className="rounded bg-success/20 px-1 text-text">compared to</mark> lower-temperature
              groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
