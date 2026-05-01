"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import peterImage from "@/images/peter1.jpeg";

const imgSrc = peterImage;

export function OurStoryHero() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-neutral-900/10 lg:col-span-2"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={imgSrc}
              alt="Mega Gas facility and early operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/70">
              About Mega Gas
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1B4332] sm:text-4xl md:text-5xl">
              Our Story
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                "Mega Gas began from lived experience. I grew up in Soweto, one of the
                largest informal settlements in Nairobi, in a family of nine children.
                Every day, my siblings and I walked long distances to collect firewood.
                When we returned home and cooking began, our house would fill with thick
                smoke. I watched my mother struggle to breathe, suffering from severe
                respiratory illnesses caused by indoor air pollution.
              </p>
              <p>
                This was not just my family&apos;s reality—it was the reality of our
                entire community. Families were trapped in energy poverty, relying on
                harmful fuels that damaged their health, environment, and finances. I
                knew there had to be a better way. That is how Mega Gas was born."
              </p>
              <p className="font-semibold text-[#1B4332]">Peter Njeri C.E.O of Meg Gas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
