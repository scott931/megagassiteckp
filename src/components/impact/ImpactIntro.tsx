"use client";

import { motion } from "framer-motion";

export function ImpactIntro() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block border-b-4 border-[#1B4332] pb-3 text-4xl font-bold tracking-tight text-[#1B4332] sm:text-5xl md:text-6xl"
        >
          COMMUNITY KITCHENS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-lg leading-relaxed text-neutral-600 sm:text-xl"
        >
          Mega Gas measures success across the{" "}
          <span className="font-semibold text-[#1B4332]">triple bottom line</span>
          —people, prosperity, and planet. Social well-being, economic resilience, and
          environmental stewardship guide every program we run, from household energy
          access to long-term forest and air-quality outcomes.
        </motion.p>
      </div>
    </section>
  );
}
