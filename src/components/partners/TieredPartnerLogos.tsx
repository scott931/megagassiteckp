"use client";

import { Globe, Handshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type Tier = "government" | "impact" | "corporate";

function LogoTile({
  abbr,
  name,
  tier,
}: {
  abbr: string;
  name: string;
  tier: Tier;
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
    </div>
  );
}

const government = [
  { abbr: "MoE", name: "Ministry of Energy & Petroleum" },
  { abbr: "NEMA", name: "National Environment Management Authority" },
  { abbr: "ERC", name: "Energy & Petroleum Regulatory Authority" },
  { abbr: "KeNHA", name: "Kenya National Highways Authority" },
];

const impact = [
  { abbr: "UNDP", name: "United Nations Development Programme" },
  { abbr: "CCA", name: "Clean Cooking Alliance" },
  { abbr: "WWF", name: "World Wide Fund for Nature" },
  { abbr: "GEF", name: "Global Environment Facility" },
  { abbr: "KRC", name: "Kenya Red Cross Society" },
];

const corporate = [
  { abbr: "ASL", name: "Allied Logistics" },
  { abbr: "RCL", name: "Retail Chain Partners" },
  { abbr: "TDL", name: "Thika Distribution Hub" },
  { abbr: "KPA", name: "Kenya Ports Agency Liaison" },
  { abbr: "SGR", name: "Freight Corridor Partners" },
  { abbr: "LPG", name: "Cylinder Exchange Network" },
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
  items: { abbr: string; name: string }[];
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
            <LogoTile abbr={item.abbr} name={item.name} tier={tier} />
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
          title="Government & Regulatory"
          subtitle="Regulatory alignment and public-sector collaboration that keep standards high and communities protected."
          icon={ShieldCheck}
          tier="government"
          items={government}
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
        <TierSection
          title="Impact & NGO Partners"
          subtitle="International NGOs and foundations that help us scale access where it matters most."
          icon={Globe}
          tier="impact"
          items={impact}
          columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        />
        <TierSection
          title="Distribution & Corporate"
          subtitle="Logistics, retail, and enterprise networks that move product safely and reliably."
          icon={Handshake}
          tier="corporate"
          items={corporate}
          columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        />
      </div>
    </section>
  );
}
