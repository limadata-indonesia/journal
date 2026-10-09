"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkButton } from "./ui/Button";
import { Orb, Streaks } from "./ui/Decor";
import { HERO_SLIDES } from "@/lib/data";

const AUTO_ADVANCE_MS = 6000;

// Right-hand cluster of light bars, positioned relative to the streak box.
const HERO_BARS = [
  { left: "0%", width: "15%", from: "rgba(124,92,255,0.55)", to: "rgba(255,255,255,0.9)" },
  { left: "14%", width: "15%", from: "rgba(77,182,255,0.35)", to: "rgba(255,255,255,0.95)" },
  { left: "28%", width: "15%", from: "rgba(255,255,255,0.25)", to: "rgba(255,255,255,1)" },
  { left: "42%", width: "15%", from: "rgba(22,56,194,0.6)", to: "rgba(255,255,255,0.9)" },
  { left: "56%", width: "15%", from: "rgba(77,182,255,0.75)", to: "rgba(220,235,255,0.95)" },
  { left: "70%", width: "15%", from: "rgba(77,182,255,0.55)", to: "rgba(255,226,204,0.9)" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_SLIDES.length), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#1235be_0%,#1638c2_30%,#8b9be0_62%,#ffffff_92%)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative streak cluster + orbs, right side */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] md:block">
        <Orb className="right-[8%] top-[17%] h-80 w-80" color="#4db6ff" />
        <Orb className="left-[-4%] top-[55%] h-36 w-36" color="#7c5cff" />
        <Orb className="right-[11%] top-[74%] h-16 w-16" color="#ff8a2b" />
        <Streaks bars={HERO_BARS} className="right-[14%] left-[4%]" />
      </div>

      <div className="relative mx-auto max-w-(--container-content) px-6 pb-36 pt-36 lg:px-10 lg:pb-48 lg:pt-44">
        <div className="max-w-xl lg:max-w-[560px]">
          {/* Single, always-present H1 for SEO, independent of the visible slide. */}
          <h1 className="sr-only">{HERO_SLIDES[0].headline}</h1>

          <div className="min-h-[300px] sm:min-h-[280px] lg:min-h-[330px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="font-heading text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
                  {slide.headlineLines[0]} {slide.headlineLines[1]}
                </p>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">{slide.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <LinkButton href="#pricing" variant="white" size="lg">
              Konsultasikan Manuskripmu
            </LinkButton>
          </motion.div>

          <div className="mt-10 flex items-center gap-2">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.headline}
                type="button"
                aria-label={`Slide ${i + 1}: ${s.headline}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-accent" : "w-3 bg-accent/25 hover:bg-accent/45"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
