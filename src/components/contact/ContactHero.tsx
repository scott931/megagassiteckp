"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 text-center sm:px-6 sm:pb-14 sm:pt-8 lg:pb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]"
      >
        Contact us
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
      >
        Get in Touch with Our Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg"
      >
        Have a question about clean gas, partnerships, or your order? We are here to help—send a
        message and we will respond as soon as we can.
      </motion.p>
    </div>
  );
}
