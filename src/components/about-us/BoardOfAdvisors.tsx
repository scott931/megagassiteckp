"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Advisor = {
  name: string;
  title: string;
  bio: string;
  img: string;
};

const advisors: Advisor[] = [
  {
    name: "Prof. George Kosimbei",
    title: "Economic Advisor & Innovation Policy Expert",
    bio:
      "Prof. George Kosimbei holds a PhD in Economics from Kenyatta University, where he also earned his MA and BA in Economics (First-Class Honours). He brings extensive experience in macroeconomics, health economics, and innovation management, having supervised over 20 master's and PhD students.\n\nHe previously served as Chief of Party for USAID's YALI Regional Leadership Center (East Africa), overseeing programmatic and financial management. His former roles as Director of Innovation Incubation and University-Industry Linkages and Director of the Chandaria Business Innovation and Incubation Centre demonstrate his deep understanding of entrepreneurship ecosystems.\n\nProf. Kosimbei has also led international projects on technology transfer, commercialization of intellectual property, and research-to-commercialization initiatives funded by the Foreign, Commonwealth & Development Office (FCDO). His training with the U.S. Patent and Trademark Office (USPTO) further strengthens his role in guiding Mega Gas's innovation and IP strategy.",
    img: "/images/prof-george-kosimbei.png",
  },
  {
    name: "Dr. Susan Musembi",
    title: "Scientific Advisor, Health and Environmental Safety",
    bio:
      "Dr. Susan Musembi is a Lecturer and Research Scientist at the School of Pure & Applied Sciences, Department of Biochemistry, Microbiology & Biotechnology at Kenyatta University.\n\nShe holds a PhD in Biosciences (Immunology) from Brunel University, UK, an MSc in Parasitology/Immunology, and a BSc in Zoology/Chemistry from the University of Nairobi. Her research focuses on low-cost diagnostic tools, vaccine development, and biomedical innovations.\n\nAt Mega Gas, she provides scientific oversight on environmental safety, emissions testing, and biomedical risk assessment to ensure that our technology aligns with health and safety standards under NEMA and KEBS regulations.",
    img: "/images/dr-susan-musembi.png",
  },
  {
    name: "Pamela Mbae",
    title: "Innovation and Product Development Advisor",
    bio:
      "Pamela Mbae is an Innovation Consultant at the Centre for Design, Innovation & Engineering (CDIE) and serves in the Directorate of Innovation, Incubation & University-Industry Linkages at Kenyatta University.\n\nShe has deep experience in innovation management, product marketing, and business development, having supported projects in partnership with the Kenya Climate Innovation Centre (KCIC) and private sector partners.\n\nPamela plays a key role in helping Mega Gas strengthen its design thinking, commercialization pathways, and user-centered innovation processes, ensuring that our products remain market-relevant and scalable.",
    img: "/images/pamela-mbae.png",
  },
  {
    name: "Dr. Peter Gichuhi Mwethera, MBS",
    title: "Scientific and Research Advisor",
    bio:
      "Dr. Peter Mwethera is the Director General of the Kenya Institute of Primate Research (KIPRE) and a renowned biomedical scientist celebrated for inventing Unipron, an experimental HIV-preventive gel. He also developed two commercial medical products, Smugel and Smuscan, both widely used in Kenya's healthcare sector.\n\nHe holds a PhD in Biomedical Sciences and has received numerous recognitions, including the Moran of the Burning Spear (MBS), African Union Innovation Award, Tony Elumelu Entrepreneurship Award, and the Newton Fund Award.\n\nAt Mega Gas, Dr. Mwethera offers strategic guidance on R&D, product certification, and bio-safety standards, as well as mentorship on advancing innovation-to-market pipelines in Kenya and across Africa.",
    img: "/images/dr-peter-gichuhi-mwethera.png",
  },
];

export function BoardOfAdvisors() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <section
      id="board-of-advisors"
      className="bg-[#1B4332] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mega Gas Alternative Energy - Advisory Board
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            The Mega Gas Advisory Board brings together distinguished leaders in economics,
            biotechnology, innovation, and environmental research to guide our mission of
            transforming plastic waste into clean, affordable cooking energy. Their collective
            expertise ensures strong governance, scientific excellence, and strategic growth as we
            scale our impact across Africa.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-8 sm:mt-12 lg:grid-cols-4">
          {advisors.map((advisor, i) => (
            <motion.article
              key={advisor.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/35 shadow-md shadow-black/15 sm:h-24 sm:w-24">
                <Image
                  src={advisor.img}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{advisor.name}</h3>
              <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-white/80">
                {advisor.title}
              </p>
              <button
                type="button"
                onClick={() => setSelectedAdvisor(advisor)}
                className="mt-3 animate-pulse rounded-full border border-white bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1B4332] shadow-sm transition hover:scale-105"
              >
                Read more
              </button>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl text-center"
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl">Purpose of the Advisory Board</h3>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                Strategic growth, partnerships, and commercialization of Mega Gas&apos;s patented
                technology.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                Ensuring environmental and public health compliance under national and international
                frameworks.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                Building academic, policy, and private-sector linkages that accelerate scaling.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                Strengthening Mega Gas&apos;s contribution to Kenya&apos;s circular economy and energy
                transition goals.
              </p>
            </article>
          </div>
        </motion.div>
      </div>

      {selectedAdvisor ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="relative w-full max-w-4xl rounded-2xl border border-white/80 bg-[#004D40] p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedAdvisor(null)}
              className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
              aria-label="Close advisor details"
            >
              Close
            </button>

            <div className="grid gap-3 md:grid-cols-[220px_minmax(0,1fr)]">
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/70 bg-white/10 md:h-full md:min-h-[220px]">
                <Image
                  src={selectedAdvisor.img}
                  alt={selectedAdvisor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>

              <div className="rounded-xl border border-white/60 bg-[#005647] p-4 pr-12 text-white">
                <h3 className="text-xl font-bold sm:text-2xl">{selectedAdvisor.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/85 sm:text-sm">
                  {selectedAdvisor.title}
                </p>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/95 sm:text-base">
                  {selectedAdvisor.bio.split(/\n\s*\n/).map((paragraph, idx) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    return <p key={`${selectedAdvisor.name}-${idx}`}>{trimmed}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
