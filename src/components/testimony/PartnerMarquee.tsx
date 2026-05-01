"use client";

function LogoTile({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex h-16 w-[140px] shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 transition duration-300 hover:border-[#52B788]/60 hover:shadow-md sm:h-[72px] sm:w-[160px]">
      <div className="text-center text-neutral-700">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 transition group-hover:text-[#1B4332]">
          {abbr}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[10px] leading-tight text-neutral-500 transition group-hover:text-[#1B4332]">
          {name}
        </p>
      </div>
    </div>
  );
}

const partners = [
  { name: "Kenya Red Cross", abbr: "KRC" },
  { name: "Nairobi County", abbr: "NCG" },
  { name: "Green Energy Fund", abbr: "GEF" },
  { name: "Safari Park Hotel", abbr: "SPH" },
  { name: "Eco Alliance NGO", abbr: "EA" },
  { name: "Ministry of Energy", abbr: "MoE" },
  { name: "Kenya Tourism Board", abbr: "KTB" },
  { name: "Clean Cooking Alliance", abbr: "CCA" },
  { name: "Thika Industry Hub", abbr: "TIH" },
  { name: "Rift Valley Mills", abbr: "RVM" },
];

export function PartnerMarquee() {
  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-emerald-100/80 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold text-[#1B4332] sm:text-2xl">
          Trusted by leading organizations
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-600">
          NGOs, hospitality, and public institutions partner with Mega Gas for clean, reliable
          energy.
        </p>
      </div>

      <div className="group/marquee relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-testimony gap-8 pr-8 motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <div
              key={`${p.abbr}-${i}`}
              className="group grayscale transition duration-300 hover:grayscale-0"
            >
              <LogoTile name={p.name} abbr={p.abbr} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
