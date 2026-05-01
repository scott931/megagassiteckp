"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const imgSrc =
  "/images/fwdpitchdeckredesigning/1_1772050520_1000338869.jpg";

export function OverviewVisualAnchor() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[min(70vh,500px)] w-full min-h-[380px]">
        <Image
          src={imgSrc}
          alt="Panoramic view of green landscape and sustainable energy infrastructure"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_42%,rgba(36,97,2,0.5)_72%,rgb(36,97,2)_100%)]"
          aria-hidden
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full max-w-lg flex-col items-center gap-5"
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Call to action
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/partners"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-brand-forest shadow-lg transition hover:bg-white/95 sm:flex-none sm:px-8"
                title="Join us in scaling clean cooking across communities."
              >
                Partner with us
              </Link>
              <Link
                href="/contact?topic=stay-updated"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:flex-none sm:px-8"
                title="Follow our journey as we transform waste into energy."
              >
                Stay updated
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
