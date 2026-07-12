"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto grid max-w-(--container-content) grid-cols-2 gap-8 px-6 lg:grid-cols-5 lg:px-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-white lg:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
