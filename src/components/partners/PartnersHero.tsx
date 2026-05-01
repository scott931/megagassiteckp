"use client";

import { motion } from "framer-motion";

export function PartnersHero() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/80"
        >
          Strength in collaboration
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-4xl font-bold tracking-tight text-[#1B4332] sm:text-5xl md:text-6xl"
        >
          Our Strategic Partners
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl"
        >
          We collaborate with global leaders, government agencies, and local innovators
          to accelerate the transition to clean energy across Africa.
        </motion.p>
      </div>
    </section>
  );
}
