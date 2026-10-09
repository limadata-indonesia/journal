"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { LinkButton } from "./ui/Button";
import { Streaks } from "./ui/Decor";

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(/[\s,]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const BOTTOM_BARS = [
  { left: "0%", width: "5%", from: "rgba(77,182,255,0.6)", to: "rgba(22,56,194,0.95)", top: "30%" },
  { left: "6%", width: "4%", from: "rgba(124,92,255,0.25)", to: "rgba(22,56,194,0.8)", top: "45%" },
  { left: "88%", width: "5%", from: "rgba(124,92,255,0.55)", to: "rgba(124,92,255,0.95)", top: "35%" },
  { left: "94%", width: "6%", from: "rgba(77,182,255,0.55)", to: "rgba(22,56,194,0.95)", top: "25%" },
];

function QuoteMark() {
  return (
    <svg viewBox="0 0 48 36" className="h-9 w-12 text-sky" fill="currentColor" aria-hidden>
      <path d="M0 21C0 9.4 6.6 1.9 17.4 0l1.7 4.3C13 6.3 10 10.4 9.8 15.3H20V36H0V21Zm28 0C28 9.4 34.6 1.9 45.4 0l1.7 4.3C41 6.3 38 10.4 37.8 15.3H48V36H28V21Z" />
    </svg>
  );
}

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section id="testimoni">
      {/* Split band: featured quote on brand blue, CTA on sky blue. */}
      <div className="grid grid-cols-1 lg:grid-cols-[59%_41%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-accent px-6 py-20 lg:py-24 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-16"
        >
          <QuoteMark />
          <p className="mt-7 max-w-xl text-[1.75rem] font-medium leading-[1.25] tracking-tight text-white lg:text-[38px]">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-sky text-lg font-bold text-white ring-2 ring-white/40">
              {initials(featured.name)}
            </span>
            <p className="text-lg font-medium text-white">{featured.name}</p>
          </div>
        </motion.div>

        <div className="flex items-center bg-sky px-6 py-20 lg:mt-10 lg:px-24">
          <div>
            <h2 className="max-w-sm text-3xl font-medium leading-[1.2] text-primary lg:text-[42px]">
              Manfaatkan Keahlian Editor Kami.
            </h2>
            <LinkButton href="#pricing" variant="white" className="mt-9">
              Konsultasikan Sekarang
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Remaining testimonials over the blue streak fade. */}
      <div className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f3f5fd_0%,#f3f5fd_40%,#a3b1ea_70%,#1638c2_100%)] pb-24 pt-24">
        <Streaks bars={BOTTOM_BARS} />

        <div className="relative mx-auto max-w-(--container-content) px-6 lg:px-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-primary lg:text-[40px]">
            Dipercaya Peneliti dari <span className="text-accent">150+</span> Institusi
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {rest.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <div className="relative h-28 overflow-hidden bg-[linear-gradient(120deg,#1235be,#1638c2_45%,#4db6ff)]">
                  <span aria-hidden className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-violet/60 blur-sm" />
                  <span aria-hidden className="absolute right-16 top-0 h-full w-10 bg-white/10 blur-[2px]" />
                  <span className="absolute bottom-4 left-6 grid h-12 w-12 place-items-center rounded-full bg-white text-base font-bold text-accent">
                    {initials(t.name)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <blockquote className="flex-1 text-[17px] leading-snug text-primary">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm font-semibold text-primary">
                    <span className="h-px w-6 bg-accent" /> {t.name}
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
