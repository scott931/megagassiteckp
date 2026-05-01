"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TestimonyCTA() {
  return (
    <section className="bg-[#F1F8F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl rounded-3xl border border-emerald-100/90 bg-white/90 px-6 py-10 text-center shadow-lg shadow-[#1B4332]/5 backdrop-blur-sm sm:px-10"
      >
        <h2 className="text-2xl font-bold text-[#1B4332] sm:text-3xl">
          Ready to switch to clean energy?
        </h2>
        <p className="mt-3 text-neutral-600">
          Join thousands of households and partners who trust Mega Gas every day.
        </p>
        <Link
          href="/partners"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-forest px-8 text-sm font-semibold text-white shadow-md transition hover:bg-forest-dark hover:scale-[1.02]"
        >
          Join the movement
        </Link>
      </motion.div>
    </section>
  );
}
