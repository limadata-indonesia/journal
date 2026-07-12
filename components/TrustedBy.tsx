import { TRUSTED_BY } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-(--container-content) px-6 lg:px-10">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">
          Dipercaya oleh peneliti di institusi terkemuka di seluruh dunia
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {TRUSTED_BY.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-center text-sm font-semibold text-text/40 grayscale transition hover:text-text/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
