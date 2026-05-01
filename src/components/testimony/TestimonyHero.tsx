"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/components/impact/useCountUp";

function Metric({
  value,
  suffix,
  label,
  decimals,
  enabled,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  enabled: boolean;
}) {
  const n = useCountUp(value, 2200, enabled, decimals ?? 0);
  return (
    <div className="flex flex-col items-center px-3 text-center sm:px-5">
      <p className="text-lg font-bold tabular-nums text-[#1B4332] sm:text-xl md:text-2xl">
        {decimals ? n.toFixed(decimals) : n.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-neutral-600 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export function TestimonyHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:pb-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl font-bold tracking-tight text-[#1B4332] sm:mt-8 sm:text-5xl md:mt-10 md:text-6xl"
        >
          Stories of Change
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg"
        >
          The voice of our community—verified households, partners, and neighbors who chose
          clean energy with Mega Gas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-100/90 bg-softwhite/90 px-4 py-5 shadow-sm backdrop-blur-sm sm:mt-12 sm:px-6 sm:py-6"
        >
          <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-start sm:gap-0 sm:divide-x sm:divide-emerald-100">
            <Metric
              value={5000}
              suffix="+"
              label="Happy households"
              enabled={inView}
            />
            <Metric
              value={200}
              suffix="+"
              label="Corporate partners"
              enabled={inView}
            />
            <Metric value={98} suffix="%" label="Customer satisfaction" decimals={0} enabled={inView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
