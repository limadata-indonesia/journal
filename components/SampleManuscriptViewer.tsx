"use client";

import { useState } from "react";
import { Check, X, MessageSquare } from "lucide-react";
import clsx from "clsx";
import { SAMPLE_MANUSCRIPT } from "@/lib/data";

type Status = "pending" | "accepted" | "rejected";

export function SampleManuscriptViewer() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(SAMPLE_MANUSCRIPT.map((p) => [p.id, "pending"]))
  );
  const [active, setActive] = useState<string>(SAMPLE_MANUSCRIPT[0].id);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Review edits, just like Word</h2>
          <p className="mt-4 text-lg text-muted">
            Every change is tracked, commented, and yours to accept or reject.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-soft lg:p-10">
            <div className="flex flex-col gap-6">
              {SAMPLE_MANUSCRIPT.map((p) => {
                const status = statuses[p.id];
                return (
                  <div
                    key={p.id}
                    onMouseEnter={() => setActive(p.id)}
                    className={clsx(
                      "rounded-xl p-3 transition-colors",
                      active === p.id && "bg-accent/5"
                    )}
                  >
                    {status === "accepted" && (
                      <p className="text-base leading-relaxed text-text">{p.edited}</p>
                    )}
                    {status === "rejected" && (
                      <p className="text-base leading-relaxed text-text/70">{p.original}</p>
                    )}
                    {status === "pending" && (
                      <p className="text-base leading-relaxed text-text/80">
                        <span className="text-error/70 line-through decoration-error/50">{p.original}</span>{" "}
                        <span className="font-medium text-success underline decoration-success/50 underline-offset-2">
                          {p.edited}
                        </span>
                      </p>
                    )}

                    <div className="mt-2 flex items-center gap-3">
                      {status === "pending" ? (
                        <>
                          <button
                            onClick={() => setStatuses((s) => ({ ...s, [p.id]: "accepted" }))}
                            className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success transition hover:bg-success/20"
                          >
                            <Check className="h-3 w-3" /> Accept
                          </button>
                          <button
                            onClick={() => setStatuses((s) => ({ ...s, [p.id]: "rejected" }))}
                            className="flex items-center gap-1 rounded-full bg-error/10 px-2.5 py-1 text-xs font-medium text-error transition hover:bg-error/20"
                          >
                            <X className="h-3 w-3" /> Reject
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setStatuses((s) => ({ ...s, [p.id]: "pending" }))}
                          className="text-xs font-medium text-muted hover:text-text"
                        >
                          {status === "accepted" ? "Change accepted" : "Original kept"} &middot; undo
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {SAMPLE_MANUSCRIPT.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActive(p.id)}
                className={clsx(
                  "rounded-2xl border p-4 transition-colors",
                  active === p.id ? "border-accent bg-background shadow-soft" : "border-border bg-background/60"
                )}
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <MessageSquare className="h-3.5 w-3.5" /> Editor comment
                </div>
                <p className="mt-1.5 text-sm text-muted">{p.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
