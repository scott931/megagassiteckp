"use client";

import { ArrowRight, CloudFog, Flame, Leaf, Zap } from "lucide-react";
import { motion } from "framer-motion";

const problemPoints = [
  "Households depend on charcoal, firewood, and kerosene",
  "Indoor air pollution causes serious health issues, especially for women and children",
  "Fuel costs are high and unpredictable",
  "Plastic waste is poorly managed, often burned, worsening air quality",
];

const solutionPoints = [
  "No upfront cost for users",
  "Pay-as-you-go at just $0.02 per hour",
  "Accessible via the Mega Gas Wallet (USSD)",
  "Reliable, safe, and scalable",
];

export function ProblemSolution() {
  return (
    <section className="bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          The problem & our solution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
        >
          Why we exist—and how we respond—in informal settlements across Nairobi.
        </motion.p>

        <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 rounded-2xl border border-neutral-300/80 bg-neutral-100/80 p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex rounded-xl bg-neutral-500/15 p-4 text-neutral-700">
              <CloudFog className="h-9 w-9" strokeWidth={1.5} aria-hidden />
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-600" aria-hidden />
              <h3 className="text-xl font-bold text-neutral-800">The problem</h3>
            </div>
            <p className="mt-4 font-medium text-neutral-700">
              In informal settlements across Nairobi:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-neutral-600">
              {problemPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-neutral-600">
              This creates a cycle of poverty, pollution, and poor health.
            </p>
          </motion.article>

          <div className="flex shrink-0 items-center justify-center md:flex-col md:py-8">
            <div className="hidden h-px w-full bg-neutral-300 md:block" aria-hidden />
            <div className="flex items-center gap-2 rounded-full border border-[#1B4332]/20 bg-white px-4 py-3 text-[#1B4332] shadow-sm md:flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Our model
              </span>
              <ArrowRight className="h-6 w-6 md:rotate-90" aria-hidden />
            </div>
            <div className="hidden h-px w-full bg-neutral-300 md:block" aria-hidden />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex-1 rounded-2xl border-2 border-[#1B4332]/40 bg-white p-8 shadow-md shadow-[#1B4332]/10"
          >
            <div className="mb-5 inline-flex rounded-xl bg-[#1B4332]/8 p-4 text-[#1B4332]">
              <Leaf className="h-9 w-9" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#1B4332]">Our solution</h3>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Mega Gas addresses these challenges through a community-centered, circular
              energy model. We convert plastic waste into clean cooking gas and deliver
              it through community kitchens powered by renewable energy.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-700">
              {solutionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-neutral-700">
              We turn waste into energy, reduce pollution, and make clean cooking
              accessible to low-income communities.
            </p>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mt-12 rounded-2xl border border-[#1B4332]/20 bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex rounded-xl bg-[#1B4332]/8 p-3 text-[#1B4332]">
                <Flame className="h-8 w-8" strokeWidth={1.5} aria-hidden />
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1B4332] sm:text-2xl">
              From local innovation to scalable impact
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              What started as a response to a personal challenge has grown into a
              scalable solution serving thousands of families. We are building a future
              where clean cooking is not a privilege—but a basic right.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
