"use client";

import { Globe, Handshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type Tier = "government" | "impact" | "corporate";

function LogoTile({
  abbr,
  name,
  tier,
  logoSrc,
}: {
  abbr: string;
  name: string;
  tier: Tier;
  logoSrc?: string;
}) {
  const size =
    tier === "government"
      ? "min-h-[100px] sm:min-h-[120px] px-6 py-5 sm:px-8"
      : tier === "impact"
        ? "min-h-[88px] px-5 py-4 sm:min-h-[96px]"
        : "min-h-[72px] px-4 py-3 sm:min-h-[80px]";

  const textAbbr =
    tier === "corporate" ? "text-xs sm:text-sm" : "text-sm sm:text-base";
  const textName =
    tier === "corporate" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm";

  return (
    <div
      className={`group flex w-full items-center justify-center rounded-2xl border border-neutral-200/90 bg-white shadow-sm transition duration-300 hover:scale-110 hover:border-[#52B788]/40 hover:shadow-md ${size}`}
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={name}
          className="h-[78px] w-[92%] object-contain sm:h-[86px]"
          loading="lazy"
        />
      ) : (
        <div className="text-center grayscale transition duration-300 group-hover:grayscale-0">
          <p
            className={`font-bold uppercase tracking-wider text-[#1B4332]/70 transition group-hover:text-[#1B4332] ${textAbbr}`}
          >
            {abbr}
          </p>
          <p
            className={`mt-1 line-clamp-2 font-medium leading-snug text-neutral-500 transition group-hover:text-[#1B4332]/90 ${textName}`}
          >
            {name}
          </p>
        </div>
      )}
    </div>
  );
}

const government = [
  { abbr: "EPRA", name: "EPRA", logoSrc: "/images/epra.png" },
  { abbr: "KEBS", name: "KEBS", logoSrc: "/images/kebs.png" },
  { abbr: "NEMA", name: "NEMA", logoSrc: "/images/nema.png" },
  { abbr: "GAVA", name: "GAVA", logoSrc: "/images/gava-1.jpg.jpeg" },
  { abbr: "CG", name: "County Govts", logoSrc: "/images/county-govts.jpg.jpeg" },
  { abbr: "INDA", name: "INDA", logoSrc: "/images/inda-1.jpg.jpeg" },
  { abbr: "KEPRO", name: "KEPRO", logoSrc: "/images/kepro.png" },
];

const impact = [
  { abbr: "CAN", name: "Government of Canada", logoSrc: "/images/govt-of-canada.png" },
  { abbr: "HAL", name: "Halcyon", logoSrc: "/images/halcyon-logo.png" },
  { abbr: "COR", name: "Cornel", logoSrc: "/images/cornel-logo.png" },
  { abbr: "CCAK", name: "Clean Cooking Association of Kenya", logoSrc: "/images/ccak-logo.png" },
  { abbr: "CW", name: "Challenge Works", logoSrc: "/images/challenge-works-logo.png" },
  { abbr: "ASME", name: "ASME", logoSrc: "/images/asme-logo.png" },
  { abbr: "RAENG", name: "RAENG", logoSrc: "/images/raeng-logo.jpg.jpeg" },
  { abbr: "EG", name: "Echoing Green", logoSrc: "/images/echoing-green-logo.png" },
  { abbr: "ECDF", name: "ECDF-Arb", logoSrc: "/images/ecdf-arb-logo-final-02.jpg.jpeg" },
  { abbr: "GC", name: "Global Citizen", logoSrc: "/images/global-citizen-logo.jpg.jpeg" },
  { abbr: "KCIC", name: "KCIC", logoSrc: "/images/kcic-logo.jpg.jpeg" },
  { abbr: "IKEA", name: "IKEA", logoSrc: "/images/ikea-logo.png" },
  { abbr: "WFP", name: "WFP", logoSrc: "/images/wfp-logo.png" },
  { abbr: "KCDF", name: "KCDF", logoSrc: "/images/kcdf.png" },
  { abbr: "COMESA", name: "COMESA", logoSrc: "/images/comesa-logo.jpg.jpeg" },
  { abbr: "BFA", name: "BFA", logoSrc: "/images/bfa-logo.png" },
  { abbr: "SHELL", name: "Shell Foundation", logoSrc: "/images/shell-foundation.jpg.jpeg" },
  { abbr: "DOW", name: "DOW", logoSrc: "/images/dow.png" },
  { abbr: "USAID", name: "USAID", logoSrc: "/images/usaid-logo.png" },
  { abbr: "AP", name: "Afri Plastics", logoSrc: "/images/afri-plastics-logo.jpg.jpeg" },
  { abbr: "NDF", name: "Nordic Dev Fund", logoSrc: "/images/nordic-dev-fund.png" },
  { abbr: "P4G", name: "P4G", logoSrc: "/images/p4g-logo.png" },
  { abbr: "WRI", name: "WRI", logoSrc: "/images/wri-logo.png" },
  { abbr: "KU", name: "KU", logoSrc: "/images/ku.jpg.jpeg" },
  { abbr: "JICA", name: "JICA", logoSrc: "/images/jica.png" },
  { abbr: "CLA", name: "Climate LaunchAPD", logoSrc: "/images/climate-launchapd.png" },
  { abbr: "KIC", name: "Climate KIC", logoSrc: "/images/climate-kic.png" },
  { abbr: "SUE", name: "Start Up Energy", logoSrc: "/images/start-up-energy.png" },
  { abbr: "KEN", name: "Kenia", logoSrc: "/images/kenia.jpg.jpeg" },
  { abbr: "NF", name: "Newton Fund", logoSrc: "/images/newton-fund.png" },
  { abbr: "BC", name: "Bristish Council", logoSrc: "/images/bristish-council.jpg.jpeg" },
];

const corporate = [
  { abbr: "MAZI", name: "Mazi Mobility", logoSrc: "/images/mazi-mobility.png" },
  { abbr: "APE", name: "Apenia", logoSrc: "/images/apenia.png" },
  { abbr: "MPESA", name: "MPESA", logoSrc: "/images/mpesa.png" },
  { abbr: "SF", name: "Solar Freeze", logoSrc: "/images/solar-freeze.png" },
  { abbr: "FLEX", name: "Flexpay", logoSrc: "/images/flexpay.png" },
  { abbr: "FEION", name: "Feion", logoSrc: "/images/feion.png" },
  { abbr: "SAF", name: "Safaricom", logoSrc: "/images/safaricom.png" },
  { abbr: "LLOYD", name: "Lloyd Constellations", logoSrc: "/images/lloyd-constellations.jpg.jpeg" },
  { abbr: "VERST", name: "Verst Carbon", logoSrc: "/images/verst-carbon.png" },
];

function TierSection({
  title,
  subtitle,
  icon: Icon,
  items,
  tier,
  columns,
}: {
  title: string;
  subtitle: string;
  icon: typeof ShieldCheck;
  items: { abbr: string; name: string; logoSrc?: string }[];
  tier: Tier;
  columns: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-neutral-100 pt-24 first:border-t-0 first:pt-0"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B4332]/[0.06] text-[#1B4332]">
            <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1B4332] sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <ul className={`grid gap-4 sm:gap-5 ${columns}`}>
        {items.map((item) => (
          <li key={item.abbr}>
            <LogoTile abbr={item.abbr} name={item.name} tier={tier} logoSrc={item.logoSrc} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function TieredPartnerLogos() {
  return (
    <section className="bg-white px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <TierSection
          title="Supported by"
          subtitle="Help us scale access where it matters most."
          icon={Globe}
          tier="impact"
          items={impact}
          columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        />
        <TierSection
          title="Delivery Partners"
          subtitle="Logistics, retail, and enterprise networks that move product safely and reliably."
          icon={Handshake}
          tier="corporate"
          items={corporate}
          columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        />
        <TierSection
          title="Government & Regulatory"
          subtitle="Regulatory alignment and public-sector collaboration that keep standards high and communities protected."
          icon={ShieldCheck}
          tier="government"
          items={government}
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </div>
    </section>
  );
}
