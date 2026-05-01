"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const spotlights = [
  {
    partner: "Ministry of Energy & Petroleum",
    headline: "Expanding safe gas access in Thika corridor",
    body:
      "Joint working groups align cylinder standards with national energy goals. Together we are rolling out monitored refills and consumer education—targeting 10,000+ households with verifiable safety checks.",
    image:
      "/images/fwdpitchdeckredesigning/IMG-20241114-WA0070.jpg.jpeg",
    imageAlt: "Technician reviewing gas installation with residents",
  },
  {
    partner: "Clean Cooking Alliance",
    headline: "Schools & community kitchens pilot program",
    body:
      "Co-designed pilots bring reliable LPG to institutions that feed the most vulnerable. We share impact metrics—from indoor air improvements to hours saved—so funders see outcomes, not just outputs.",
    image:
      "/images/fwdpitchdeckredesigning/IMG-20241114-WA0072.jpg.jpeg",
    imageAlt: "Community kitchen with staff preparing meals",
  },
  {
    partner: "Regional logistics consortium",
    headline: "Cold-chain reliability for high-turnover depots",
    body:
      "Dedicated routes and shared telemetry reduce downtime at exchange points. Partners embed our leak-response protocols so last-mile delivery stays accountable across counties.",
    image:
      "/images/fwdpitchdeckredesigning/IMG-20241115-WA0002.jpg.jpeg",
    imageAlt: "Logistics and distribution facility",
  },
];

export function PartnerSpotlights() {
  return (
    <section className="border-t border-neutral-100 bg-[#FAFBFA] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/80">
            Joint ventures in the field
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B4332] sm:text-4xl">
            Partner spotlights
          </h2>
          <p className="mt-4 text-neutral-600 sm:text-lg">
            A snapshot of how we co-create programs—not one-way sponsorships, but shared
            execution on the ground.
          </p>
        </motion.div>

        <ul className="mt-16 flex flex-col gap-16 lg:gap-20">
          {spotlights.map((s, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <motion.li
                key={s.partner}
                initial={{ opacity: 0, x: imageLeft ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-emerald-100/80 bg-white/80 shadow-sm shadow-[#1B4332]/[0.04] backdrop-blur-[10px]"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div
                    className={`relative aspect-[4/3] min-h-[220px] lg:aspect-auto lg:min-h-[320px] ${!imageLeft ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1B4332]/25 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center p-8 sm:p-10 ${!imageLeft ? "lg:order-1" : ""}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#52B788]">
                      {s.partner}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-[#1B4332] sm:text-2xl">
                      {s.headline}
                    </h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">{s.body}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
