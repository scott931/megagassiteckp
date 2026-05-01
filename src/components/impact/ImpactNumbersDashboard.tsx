"use client";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "./useCountUp";

type Metric = {
  watermark: string;
  target: number;
  format: (v: number) => string;
  label: string;
};

const metrics: Metric[] = [
  {
    watermark: "01",
    target: 15,
    format: (v) => `${Math.round(v)}k+`,
    label: "Households reached",
  },
  {
    watermark: "02",
    target: 500,
    format: (v) => `${Math.round(v)}+`,
    label: "Community partners",
  },
  {
    watermark: "03",
    target: 100,
    format: (v) => `${Math.round(v)}+`,
    label: "Safety trainings",
  },
  {
    watermark: "04",
    target: 40,
    format: (v) => `${Math.round(v)}%`,
    label: "Avg. fuel cost reduction",
  },
];

function MetricCard({ m, index }: { m: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(m.target, 2000, isInView, 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-10 sm:px-8"
    >
      <span
        className="pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-bold leading-none text-white/[0.08] sm:text-[8rem]"
        aria-hidden
      >
        {m.watermark}
      </span>
      <p className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {m.format(count)}
      </p>
      <p className="relative mt-3 text-xs font-semibold uppercase tracking-widest text-white/80">
        {m.label}
      </p>
    </motion.div>
  );
}

export function ImpactNumbersDashboard() {
  return (
    <section
      id="impact-numbers"
      className="bg-[#1B4332] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          Our Impact in Numbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/80"
        >
          Cumulative indicators across programmes—updated as we grow with communities.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.watermark} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
