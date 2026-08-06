"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Upload, FileSearch } from "lucide-react";
import { Button, LinkButton } from "./ui/Button";
import { HERO_SLIDES } from "@/lib/data";

const AUTO_ADVANCE_MS = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      className="relative overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Banner-style background: photo (Unsplash) + gradient scrim for legible
          white text on the left, Elsevier-style full-bleed hero */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-library.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="absolute -right-24 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-(--container-content) px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          {/* Always-present, single H1 for SEO — stays as the primary headline
              regardless of which slide is currently showing. */}
          <h1 className="sr-only">{HERO_SLIDES[0].headline}</h1>

          <div className="min-h-[220px] lg:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                  {slide.headlineLines[0]}
                  <br />
                  {slide.headlineLines[1]}
                </p>
                <p className="font-heading mt-3 text-2xl font-semibold text-white/90 lg:text-3xl">{slide.subheading}</p>
                <p className="mt-6 max-w-lg text-lg text-white/70">{slide.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg">
              <Upload className="h-4 w-4" /> Unggah Manuskripmu
            </Button>
            <LinkButton href="#rekomendasi-jurnal" size="lg" variant="outline">
              <FileSearch className="h-4 w-4" /> Cek Rekomendasi Jurnal
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
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
