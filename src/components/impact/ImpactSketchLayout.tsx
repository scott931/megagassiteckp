"use client";

import { motion } from "framer-motion";

const socialBullets = [
  "15,000+ families accessing clean cooking energy",
  "Reduced indoor air pollution and respiratory illnesses",
  "Safer cooking environments with no open flame risks",
  "Community kitchens as hubs for social interaction and shared experiences",
  "Improved dignity and quality of life for low-income households",
];

const economicBullets = [
  "Cooking at just $0.02 per hour—affordable for low-income households",
  "4,000+ small businesses supported (vendors, caterers, schools)",
  "Hundreds of jobs created across waste collection, sorting, and kitchen operations",
  "Income generation opportunities for women and youth",
  "Reduced household spending on cooking fuel",
];

const environmentalBullets = [
  "250+ tons of plastic waste recycled monthly",
  "Reduced open burning of waste in informal settlements",
  "12,164+ tons of CO₂ emissions avoided (ImpactForecast)",
  "Reduced reliance on charcoal, helping prevent deforestation",
  "Integration of circular energy systems: plastic-to-gas, biogas, and solar",
];

const systemsBullets = [
  "6 community kitchens operating as local resilience hubs",
  "100+ women waste pickers empowered with stable incomes",
  "Increased adoption of digital payments through Mega Gas Wallet (USSD)",
  "Behavior change in waste management and clean energy use",
  "Strengthened circular economy ecosystems in urban communities",
];

const numberCards = [
  { value: "15,000+", label: "Families accessing clean cooking energy" },
  { value: "4,000+", label: "Small businesses supported" },
  { value: "250+", label: "Tons of plastic waste recycled monthly" },
  { value: "12,164+", label: "Tons of CO₂ emissions avoided" },
];

function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`mt-5 list-disc space-y-2 pl-5 ${className ?? "text-neutral-700"}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ImpactSketchLayout() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-4xl font-bold uppercase tracking-tight text-[#1B4332] sm:text-5xl"
        >
          Impact
        </motion.h1>

        <p className="mt-4 w-full max-w-none text-neutral-700">
          At Mega Gas, we are transforming how communities cook, earn, and live. Our model
          delivers measurable impact across social, economic, environmental, and systemic
          dimensions—creating cleaner, healthier, and more resilient urban communities.
        </p>

        <div className="mt-10 space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-[#1B4332]/20 bg-[#f9fbf9] bg-cover bg-center p-6 sm:p-8"
            style={{ backgroundImage: "url('/images/socialimpact.jpeg')" }}
          >
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Social Impact</h2>
              <p className="mt-3 w-full max-w-none font-semibold text-white">
                We improve everyday life by making clean cooking safe, accessible, and
                community-driven.
              </p>
              <BulletList items={socialBullets} className="font-semibold text-white" />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-[#1B4332]/20 bg-cover bg-center p-6 sm:p-8"
            style={{ backgroundImage: "url('/images/economicimpact.jpeg')" }}
          >
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Economic Impact</h2>
              <p className="mt-3 w-full max-w-none font-semibold text-white">
                We unlock income, reduce costs, and power local economies.
              </p>
              <BulletList items={economicBullets} className="font-semibold text-white" />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#1B4332]/20 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">
              Environmental Impact
            </h2>
            <p className="mt-3 w-full max-w-none text-neutral-700">
              We turn waste into energy and reduce climate harm at scale.
            </p>
            <BulletList items={environmentalBullets} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="rounded-2xl border border-[#1B4332]/20 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">
              Systems & Community Impact
            </h2>
            <p className="mt-3 w-full max-w-none text-neutral-700">
              We go beyond energy—transforming behavior, systems, and access.
            </p>
            <BulletList items={systemsBullets} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="rounded-2xl border border-[#1B4332]/20 bg-[#f9fbf9] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">
              Our Theory of Change
            </h2>
            <p className="mt-5 w-full max-w-none text-neutral-700">
              We are embedded within both households and the broader community through our
              centralized kitchens, making clean cooking part of daily life and shared
              experiences while targeting knowledge, attitudes, and practices. By demonstrating
              the value of plastic waste as a clean energy resource, we shift perceptions around
              waste management and reduce harmful practices like open burning. We believe
              sustainable impact happens when hardware (technology) is paired with the right
              software (awareness, behavior change, and mindset), ensuring long-term adoption,
              community ownership, and lasting environmental change.
            </p>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h2 className="text-2xl font-bold text-[#1B4332] sm:text-3xl">Our Impact in Numbers</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numberCards.map((card) => (
              <article
                key={card.label}
                className="rounded-2xl border-2 border-[#1B4332]/35 bg-white p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-[#1B4332]">{card.value}</p>
                <p className="mt-2 text-sm text-neutral-700">{card.label}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-[#1B4332]/20 p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">
            Closing Statement
          </h2>
          <p className="mt-5 w-full max-w-none text-neutral-700">
            We are not just providing energy. We are building cleaner cities, stronger
            communities, and a future where waste becomes opportunity.
          </p>
        </motion.section>
      </div>
    </section>
  );
}
