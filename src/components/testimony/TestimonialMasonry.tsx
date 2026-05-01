"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Card = {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  badge: "verified" | "carbon";
  featured?: boolean;
};

const cards: Card[] = [
  {
    quote:
      "We finally breathe easier in the kitchen. Mega Gas is consistent, and the team explains every safety check—no guesswork.",
    name: "Jane D.",
    location: "Ruiru",
    avatar:
      "/images/fwdpitchdeckredesigning/1000388888.jpg.jpeg",
    badge: "verified",
  },
  {
    quote:
      "Our hotel switched bulk cooking to Mega Gas. Costs stabilized and guests notice the cleaner air in our back-of-house.",
    name: "Peter Mwangi",
    location: "Westlands, Nairobi",
    avatar:
      "/images/fwdpitchdeckredesigning/1000388936.jpg.jpeg",
    badge: "carbon",
    featured: true,
  },
  {
    quote:
      "Reliable delivery and fair pricing. I recommend Mega Gas to every mama in my chama.",
    name: "Lucy Achieng",
    location: "Kasarani",
    avatar:
      "/images/fwdpitchdeckredesigning/1000388967.jpg.jpeg",
    badge: "verified",
  },
  {
    quote:
      "As an NGO partner, we needed traceable impact. Mega Gas gave us data we could stand behind in our donor reports.",
    name: "Dr. Samira K.",
    location: "Program director",
    avatar:
      "/images/fwdpitchdeckredesigning/1000388977.jpg.jpeg",
    badge: "carbon",
  },
  {
    quote:
      "The blue flame burns clean. My children’s coughs from smoke are gone—that alone was worth the switch.",
    name: "David O.",
    location: "Thika",
    avatar:
      "/images/fwdpitchdeckredesigning/1_1772050520_1000338869.jpg",
    badge: "verified",
  },
  {
    quote:
      "Corporate kitchens run on precision. Mega Gas met our safety audits and never missed a refill window.",
    name: "Grace W.",
    location: "Industrial Area",
    avatar:
      "/images/fwdpitchdeckredesigning/IMG-20241114-WA0070.jpg.jpeg",
    badge: "verified",
  },
  {
    quote:
      "I was skeptical until month one—our charcoal spend dropped sharply. Wish we had switched sooner.",
    name: "James K.",
    location: "Kiambu",
    avatar:
      "/images/fwdpitchdeckredesigning/IMG-20241114-WA0072.jpg.jpeg",
    badge: "carbon",
  },
  {
    quote:
      "Clean energy should not be a luxury. Mega Gas made it reachable for our church kitchen and school lunch program.",
    name: "Rev. Mutua",
    location: "Machakos",
    avatar:
      "/images/fwdpitchdeckredesigning/IMG-20241115-WA0002.jpg.jpeg",
    badge: "verified",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#52B788] text-[#52B788]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function TestimonialMasonry() {
  return (
    <section className="bg-[#F1F8F5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          Verified success stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
        >
          Real quotes from people who switched to Mega Gas—editorial style, one story at a time.
        </motion.p>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={`${c.name}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.45 }}
              className={cn(
                "group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-emerald-100/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B4332]/10 lg:mb-6",
                c.featured && "ring-2 ring-[#1B4332]/15"
              )}
            >
              {c.featured && (
                <span
                  className="pointer-events-none absolute left-2 top-0 font-serif text-[120px] leading-none text-[#1B4332]/10 sm:left-4 sm:text-[150px]"
                  style={{ fontFamily: "var(--font-testimony-quote), Georgia, serif" }}
                  aria-hidden
                >
                  &ldquo;
                </span>
              )}

              <div className="relative z-[1] flex items-start justify-between gap-2">
                <Stars />
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
                    c.badge === "verified"
                      ? "bg-[#1B4332]/10 text-[#1B4332]"
                      : "bg-[#52B788]/15 text-[#1B4332]"
                  )}
                >
                  {c.badge === "verified" ? "Verified user" : "Carbon hero"}
                </span>
              </div>

              <blockquote
                className={cn(
                  "relative z-[1] mt-4 text-base leading-relaxed text-neutral-800",
                  c.featured && "text-lg sm:text-xl"
                )}
                style={{ fontFamily: "var(--font-testimony-quote), Georgia, serif" }}
              >
                {c.quote}
              </blockquote>

              <div className="relative z-[1] mt-6 flex items-center gap-3 border-t border-emerald-100/80 pt-4">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#1B4332]/10">
                  <Image
                    src={c.avatar}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[#1B4332]">{c.name}</p>
                  <p className="text-sm text-neutral-500">{c.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
