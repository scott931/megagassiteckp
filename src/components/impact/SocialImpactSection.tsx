"use client";

import {
  Bike,
  ChefHat,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const valueCards: {
  title: string;
  body: string;
  icon: typeof Bike;
  featured?: boolean;
}[] = [
  {
    icon: Bike,
    title: "Rider",
    body: "Reliable cylinder delivery keeps kitchens stocked so meals never stop for lack of fuel.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Safety",
    body: "Clean-burning gas reduces indoor smoke and fire risk compared to charcoal or wood.",
  },
  {
    icon: Heart,
    title: "Health",
    body: "Better air quality supports women and children who spend the most time cooking.",
  },
  {
    icon: Leaf,
    title: "Environment",
    body: "Lower reliance on charcoal helps protect forests and local air quality.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Shared kitchens anchor neighbourhoods with dependable meals and gathering space.",
  },
  {
    icon: Clock,
    title: "Time",
    body: "Instant flame means faster prep—hours returned for work, study, and rest.",
  },
  {
    icon: ChefHat,
    title: "Capacity",
    body: "Scalable fuel supply supports larger batches for schools and feeding programs.",
  },
  {
    icon: Phone,
    title: "Support",
    body: "Local teams help with orders, training, and keeping equipment running smoothly.",
  },
];

export function SocialImpactSection() {
  return (
    <section
      id="community-kitchen"
      className="scroll-mt-28 bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 sm:scroll-mt-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B4332] sm:text-3xl">
          Community Kitchens
        </h2>

        {/* Photos / Video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-6 flex min-h-[220px] w-full items-center justify-center rounded-2xl border-2 border-[#1B4332]/25 bg-white sm:min-h-[320px] md:aspect-[21/9] md:min-h-0"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1B4332]/70">
            Photos / Video
          </p>
        </motion.div>

        {/* What is / How it works blocks */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-xl border border-[#1B4332]/20 bg-white p-6 sm:p-8"
          >
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#1B4332] sm:text-xl">
              What is the Mega Gas C.K.?
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Mega Gas Community Kitchens (C.K.) bring affordable, safe LPG cooking to
              neighbourhoods that need it most. We partner with schools, faith groups, and
              local organisers to run shared kitchens where families can cook together or
              receive meals—powered by reliable gas instead of charcoal or wood.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[#1B4332]/20 bg-white p-6 sm:p-8"
          >
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#1B4332] sm:text-xl">
              How it works
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-neutral-600">
              <li>We identify a host site and equip the kitchen with cylinders and burners.</li>
              <li>Trained staff and volunteers run daily meal service or shared cooking slots.</li>
              <li>Riders refill cylinders on schedule so fuel never runs out at peak times.</li>
              <li>Impact is tracked—meals served, households reached, and air-quality gains.</li>
            </ol>
          </motion.div>
        </div>

        {/* Value proposition grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[#1B4332]/15 pt-12"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B4332] sm:text-3xl">
            Value proposition
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {valueCards.map(({ icon: Icon, title, body, featured }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ delay: i * 0.04 }}
                className={[
                  "flex min-h-[170px] flex-col rounded-xl bg-white p-4 shadow-md shadow-green-900/5 sm:p-5",
                  featured
                    ? "border-2 border-[#1B4332] ring-2 ring-[#1B4332]/20 ring-offset-2 ring-offset-[#F8F9FA]"
                    : "border border-green-800/10",
                ].join(" ")}
              >
                <div
                  className={[
                    "mb-3 inline-flex w-fit rounded-lg p-2.5",
                    featured ? "bg-[#1B4332] text-white" : "bg-[#1B4332]/5 text-[#1B4332]",
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#1B4332] sm:text-base">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Locate strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[#1B4332]/15 pt-12"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B4332] sm:text-3xl">
            Locate a kitchen near you
          </h2>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#1B4332]/20 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-3 text-[#1B4332]">
              <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              <span className="text-sm font-medium sm:text-base">Map</span>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-[#1B4332]/70">
              -&gt;
            </span>
            <a
              href="tel:+254701063018"
              className="inline-flex items-center gap-3 rounded-lg border border-[#1B4332] px-4 py-2.5 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Dial your number
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
