"use client";

import { motion } from "framer-motion";

const specs = [
  {
    label: "Safety first",
    detail:
      "No risk of explosion in open air, with controlled systems and trained operators.",
  },
  {
    label: "Energy efficiency",
    detail: "25% higher calorific value for faster, more efficient cooking.",
  },
  {
    label: "Reliable supply",
    detail: "Hybrid energy sources ensure uninterrupted access.",
  },
  {
    label: "Clean emissions",
    detail: "Significantly lower indoor air pollution compared to traditional fuels.",
  },
];

export function OverviewDeepDive() {
  return (
    <section className="bg-[#F1F8F5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/90 bg-white/80 p-8 shadow-xl shadow-[#1B4332]/8 backdrop-blur-md sm:p-10 md:p-12"
        >
          <h2
            className="text-center text-3xl font-bold tracking-tight text-[#1B4332] sm:text-4xl md:text-[2.75rem]"
            style={{ fontFamily: "var(--font-overview-serif), Georgia, serif" }}
          >
            Overview
          </h2>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-700">
            <p>
              Mega Gas starts where others see a problem—waste and energy poverty—and turns it into
              opportunity. We collect plastic and organic waste from communities and convert it into
              clean cooking gas through controlled, safe processing systems. This ensures reliable,
              efficient energy ready for everyday use.
            </p>
            <p>
              Instead of distributing gas through expensive cylinders, we bring energy directly to
              people through{" "}
              <strong className="font-bold text-neutral-900"> community kitchens</strong>,
              removing upfront costs and enabling access through
              a flexible PAYGO model.
            </p>
            <p>
              We are deeply embedded within both households and the broader community. Our
              kitchens serve not only as cooking spaces, but as centers of daily life—where families
              gather, businesses operate, and social interactions happen. This is where our biggest
              breakthrough lies.
            </p>
            <p>
              Our model goes beyond energy delivery. It targets the{" "}
              <strong className="font-bold text-neutral-900">knowledge, attitudes, and practices</strong>{" "}
              of our users and host communities. By demonstrating the value of plastic
              waste as a clean energy resource, we shift perceptions around waste management and
              environmental responsibility.
            </p>
            <p>
              We combine{" "}
              <strong className="font-bold text-neutral-900">hard infrastructure (clean energy systems)</strong>{" "}
              with{" "}
              <strong className="font-bold text-neutral-900">
                soft infrastructure (awareness, behavior change, and community engagement)
              </strong>
              —ensuring that climate action becomes part of everyday conversations and decisions.
            </p>
            <p>
              Clean cooking becomes more than a service—it becomes{" "}
              <strong className="font-bold text-neutral-900">
                a conversation starter, a learning platform, and a pathway to long-term behavior change
              </strong>.
            </p>
            <p>
              As more people adopt our solution, we are not only serving today&apos;s market—we are
              actively building the future market by creating informed, empowered communities that
              demand and sustain clean energy solutions.
            </p>
            <p>
              At the core, Mega Gas is not just energy infrastructure—it is a system designed to
              build{" "}
              <strong className="font-bold text-neutral-900">
                trust, social capital, and long-term climate resilience at scale
              </strong>.
            </p>
          </div>

          <h3 className="mt-14 text-center text-xl font-bold tracking-tight text-[#1B4332] sm:text-2xl">
            Performance &amp; safety
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[#1B4332]/12 bg-[#F8F9FA]/90 px-5 py-4"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#1B4332]">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}