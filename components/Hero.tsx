"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkButton } from "./ui/Button";
import { Orb } from "./ui/Decor";
import { ShaderBackground } from "./ui/waves-shader";
import { HERO_SLIDES } from "@/lib/data";

const AUTO_ADVANCE_MS = 6000;

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
      {/* Animated waves shader, flipped upside down so the deep blue sits at the
          top and it fades light toward the bottom. The section's CSS gradient
          stays underneath as the fallback when WebGL is unavailable. */}
      <ShaderBackground className="pointer-events-none absolute inset-0 -scale-y-100" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />

      {/* Wireframe globe (same artwork as Daily Meaning, recoloured white) on a
          soft blue glow, right side */}
      <div aria-hidden className="pointer-events-none absolute right-[-12%] top-20 hidden aspect-square w-[50%] max-w-[680px] lg:block xl:right-[-6%]">
        <Orb className="inset-[12%] opacity-70" color="#4db6ff" blur={90} />
        <Orb className="bottom-[8%] left-[2%] h-40 w-40 opacity-35" color="#7c5cff" blur={60} />
        <div className="absolute inset-0 bg-[url('/brand/globe-wireframe.svg')] bg-contain bg-no-repeat opacity-45 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]" />
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
