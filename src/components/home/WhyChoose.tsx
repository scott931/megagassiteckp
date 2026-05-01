"use client";

import { Leaf, Shield, Zap, Globe2, Users } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    n: 1,
    icon: Leaf,
    title: "Closing the Plastic Waste Loop",
    text: "We transform non-recyclable plastic waste into clean cooking gas, reducing pollution while creating a circular, sustainable energy system.",
  },
  {
    n: 2,
    icon: Shield,
    title: "Higher Energy Efficiency",
    text: "Our gas delivers 25% higher calorific value than conventional alternatives, ensuring faster, more efficient cooking.",
  },
  {
    n: 3,
    icon: Zap,
    title: "Community-Centered Model",
    text: "Our community kitchens are hubs of social and economic activity, supporting small businesses and strengthening communities.",
  },
  {
    n: 4,
    icon: Globe2,
    title: "Safety First",
    text: "Mega Gas has no risk of explosion, as it does not ignite in open air, ensuring a safe cooking environment.",
  },
  {
    n: 5,
    icon: Users,
    title: "Ultra-Affordable Access",
    text: "Clean cooking at just $0.02 per hour, with no upfront costs, making it accessible to low-income households.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="border-t border-brand-forest/10 bg-softwhite py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
          Why Choose Mega Gas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
          Five reasons communities choose Mega Gas for clean, safe, and
          affordable cooking energy.
        </p>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map(({ n, icon: Icon, title, text }) => (
            <motion.li
              key={n}
              variants={item}
              className="shadow-mint-soft relative overflow-hidden rounded-2xl border border-brand-forest/10 bg-white p-6 pt-10"
            >
              <span
                className="pointer-events-none absolute -right-1 -top-2 select-none text-7xl font-bold leading-none text-brand-forest/[0.08]"
                aria-hidden
              >
                {n}
              </span>
              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg border border-brand-forest/15 bg-brand-forest/[0.06] p-2.5 text-brand-forest">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-brand-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
