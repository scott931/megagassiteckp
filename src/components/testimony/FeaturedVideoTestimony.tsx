"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const poster =
  "/images/fwdpitchdeckredesigning/1000388829.jpg.jpeg";

export function FeaturedVideoTestimony() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-6 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/75"
        >
          Featured story
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border-8 border-emerald-100/90 bg-softwhite shadow-2xl shadow-neutral-900/10"
        >
          <div className="relative aspect-video w-full bg-black">
            {!playing ? (
              <>
                <Image
                  src={poster}
                  alt="Community leader interview — Mega Gas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-black/25" />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label="Play featured testimony video"
                >
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[#1B4332] shadow-lg transition group-hover:scale-105 sm:h-24 sm:w-24">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-30" />
                    <span className="absolute inline-flex h-[85%] w-[85%] animate-pulse rounded-full bg-brand-vibrant/20" />
                    <Play className="relative ml-1 h-9 w-9 fill-current sm:h-10 sm:w-10" aria-hidden />
                  </span>
                </button>
                <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/95 drop-shadow md:left-8 md:right-auto md:text-left">
                  <span className="font-semibold">Community voices</span>
                  <span className="mt-1 block text-white/80">
                    Hear how clean gas changed daily life for families in Nairobi.
                  </span>
                </p>
              </>
            ) : (
              <div className="relative aspect-video w-full bg-black">
                <video
                  className="h-full w-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  <source src="/images/NEWCOMMUNITYKITCHENLAUNCHKAYOLE.mp4" type="video/mp4" />
                </video>
                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  className="absolute right-4 top-4 rounded-full border border-white/65 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/70"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
