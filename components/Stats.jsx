"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { stats } from "@/lib/content";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leadership/15 blur-[120px]" />
      </div>
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Impact in Numbers"
          title="Cohort 2025"
          subtitle="A snapshot of the momentum behind the Fellowship's first cohort."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-7 text-center transition-colors hover:border-orchid/30"
            >
              <div className="text-4xl font-bold text-gradient sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-moonlight/70">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-moonlight/60">
          Several alumni have gone on to secure internships, graduate opportunities, and professional
          roles across leading institutions in Oman.
        </p>
      </div>
    </section>
  );
}
