"use client";

import Image from "next/image";
import value1Image from "@/images/value1.jpeg";
import value2Image from "@/images/value2.jpeg";
import value3Image from "@/images/value3.jpeg";
import resilienceImage from "@/images/resilience.jpeg";
import value5Image from "@/images/value5.jpeg";
import served60kImage from "@/images/60kp.jpeg";
import co2StoppedImage from "@/images/8750.jpeg";
import communities120Image from "@/images/120+.jpeg";
import offset24tImage from "@/images/24t.jpeg";
import localJobs500Image from "@/images/500+.jpeg";
import partnerRegionsImage from "@/images/partners.jpeg";
import uptimeImage from "@/images/uptime.jpeg";
import monitoring247Image from "@/images/247m.jpeg";
import rndPilotsImage from "@/images/rnd.jpeg";

const blocks = [
  {
    metric: "Hard Work",
    label: "We are driven by action and results, working tirelessly to deliver impact at scale.",
    src: value1Image,
  },
  {
    metric: "Integrity",
    label: "We operate with transparency, accountability, and trust in everything we do.",
    src: value2Image,
  },
  {
    metric: "Commitment",
    label: "We are dedicated to our mission, our communities, and long-term sustainability.",
    src: value3Image,
  },
  {
    metric: "Resilience",
    label: "We adapt, innovate, and persist in solving complex energy and environmental challenges.",
    src: resilienceImage,
  },
  {
    metric: "Compassion",
    label: "We design solutions with empathy, putting the needs of our communities first.",
    src: value5Image,
  },
];

const moreImpactStills = [
  {
    value: "60k+",
    label: "People served",
    src: served60kImage,
  },
  {
    value: "8750 Tons of CO₂",
    label: "Stopped Annually",
    src: co2StoppedImage,
  },
  {
    value: "120+",
    label: "Communities served",
    src: communities120Image,
  },
  {
    value: "25,000 Kga of Gas",
    label: "Consumed Weekly",
    src: "/images/fwdpitchdeckredesigning/IMG-20241115-WA0011.jpg.jpeg",
  },
  {
    value: "4,000+",
    label: "Small businesses supported",
    src: offset24tImage,
  },
  {
    value: "500+",
    label: "Local jobs",
    src: localJobs500Image,
  },
  {
    value: "18",
    label: "Partner regions",
    src: partnerRegionsImage,
  },
  {
    value: "99.2%",
    label: "Uptime target",
    src: uptimeImage,
  },
  {
    value: "24/7",
    label: "Monitoring",
    src: monitoring247Image,
  },
  {
    value: "12",
    label: "R&D pilots",
    src: rndPilotsImage,
  },
];

export function MoreImpact() {
  return (
    <section
      id="impact"
      className="border-t border-brand-forest/10 bg-softwhite py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
          Our Values
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
          The principles that shape how we serve communities every day.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {blocks.map((b) => (
            <li
              key={b.label}
              className="shadow-mint-soft relative aspect-video overflow-hidden rounded-xl border border-brand-forest/10 sm:h-60 sm:aspect-auto"
            >
              <Image
                src={b.src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {b.metric}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {b.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 border-t border-brand-forest/10 pt-20 sm:mt-24 sm:pt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
            More Impact in Stills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
            Outcomes we measure and report—environmental, social, and operational.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {moreImpactStills.map((card) => (
              <li
                key={card.label}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-forest/10 shadow-sm sm:min-h-[200px] sm:aspect-auto"
              >
                <Image
                  src={card.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                    {card.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
