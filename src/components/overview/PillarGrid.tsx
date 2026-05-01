"use client";

import type { ReactNode } from "react";
import { Cog, Recycle, Store, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars: {
  title: string;
  icon: typeof Cog;
  summary: ReactNode;
}[] = [
  {
    title: "Technology",
    icon: Cog,
    summary:
      "We convert non-recyclable plastic and organic waste into clean cooking gas using advanced thermal cracking and biogas systems. Our hybrid energy model ensures consistent, safe, and high-quality energy for everyday use.",
  },
  {
    title: "Access & Distribution",
    icon: Store,
    summary: (
      <>
        We deliver energy through{" "}
        <strong className="font-bold text-[#1B4332] transition-colors group-hover:text-white">
          community kitchens located within informal settlements,
        </strong>{" "}
        eliminating the need for costly LPG cylinders. Users walk in, cook, and pay through our
        PAYGO system using the Mega Gas Wallet.
      </>
    ),
  },
  {
    title: "Circular Sustainability",
    icon: Recycle,
    summary:
      "Our model closes the waste loop—transforming plastic and organic waste into clean energy. This reduces pollution, prevents open burning, and lowers reliance on charcoal, protecting forests and improving air quality.",
  },
  {
    title: "Community-Centered Design",
    icon: Users,
    summary:
      "We build solutions for real communities—supporting households, food vendors, schools, and local entrepreneurs through affordable and inclusive energy access.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PillarGrid() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/70">
          Our approach
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                variants={item}
                className="group flex flex-col rounded-2xl border border-[#1B4332]/35 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#1B4332] hover:bg-[#1B4332]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#1B4332]/8 p-3 text-[#1B4332] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                </div>
                <h2 className="text-lg font-bold text-[#1B4332] transition-colors duration-300 group-hover:text-white">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/95">
                  {p.summary}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
