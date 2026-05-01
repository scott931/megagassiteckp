"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, MapPin, Phone, Recycle, Users } from "lucide-react";

type MetricCard = {
  watermark: string;
  target: number;
  suffix?: string;
  label: string;
};

const metricCards: MetricCard[] = [
  { watermark: "01", target: 50, suffix: "k+", label: "Tons of Waste Repurposed" },
  { watermark: "02", target: 10, suffix: "+", label: "Happy Community Kitchens" },
  { watermark: "03", target: 98, suffix: "%", label: "Health Improvement (Indoor Air)" },
  { watermark: "04", target: 50, suffix: "%", label: "Average Household Savings" },
];

function CountUp({
  target,
  suffix = "",
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    let start = 0;
    const step = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [duration, started, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function CommunityKitchensLayout() {
  return (
    <section className="scroll-mt-28">
      <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center text-4xl font-bold tracking-tight text-[#1B4332] sm:text-5xl md:text-6xl"
          >
            COMMUNITY KITCHENS
          </motion.h1>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-3xl border border-emerald-500/10 bg-white shadow-sm"
          >
            <div className="relative h-[320px] bg-gradient-to-br from-[#1B4332]/10 to-[#1B4332]/5 sm:h-[380px] md:h-96">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Community kitchen activity"
              >
                <source src="/images/communityvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-500/10 bg-white p-6 shadow-sm backdrop-blur-[10px] sm:p-8"
            >
              <h2 className="text-2xl font-bold text-[#1B4332]">What is the Mega Gas C.K.?</h2>
              <p className="mt-4 leading-relaxed text-neutral-700">
                A safe, shared cooking facility providing access to affordable, clean Mega Gas
                energy for everyone. Community kitchens are designed for informal settlements
                and high-density areas where households need reliable, low-cost cooking access.
              </p>
              <div className="mt-6 rounded-xl border border-[#1B4332]/15 bg-[#F8F9FA] p-4">
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#1B4332]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1">
                    <Recycle className="h-4 w-4" aria-hidden />
                    Waste to Energy
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-60" aria-hidden />
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1">
                    <Users className="h-4 w-4" aria-hidden />
                    Community Kitchen
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-60" aria-hidden />
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1">
                    <Leaf className="h-4 w-4" aria-hidden />
                    Healthy Cooking
                  </span>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-emerald-500/10 bg-white p-6 shadow-sm backdrop-blur-[10px] sm:p-8"
            >
              <h2 className="text-2xl font-bold text-[#1B4332]">How It Works</h2>
              <ol className="mt-4 space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-xs font-bold text-white">
                    1
                  </span>
                  Gas production from plastic and organic waste.
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-xs font-bold text-white">
                    2
                  </span>
                  Kitchen setup in accessible community locations.
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-xs font-bold text-white">
                    3
                  </span>
                  Shared cooking shifts and affordable PAYGO use.
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-xs font-bold text-white">
                    4
                  </span>
                  Better health, lower costs, and cleaner neighbourhoods.
                </li>
              </ol>
            </motion.article>
          </div>
        </div>
      </div>

      <div className="bg-[#1B4332] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Value Proposition
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((card) => (
              <motion.article
                key={card.label}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-6 select-none text-8xl font-bold leading-none text-white/10"
                  aria-hidden
                >
                  {card.watermark}
                </span>
                <p className="relative text-4xl font-bold text-white sm:text-5xl">
                  <CountUp target={card.target} suffix={card.suffix} />
                </p>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                  {card.label}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div id="k-locations" className="scroll-mt-28 bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#1B4332] sm:text-4xl">
            Locate a Kitchen Near You
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#1B4332]/15 bg-white shadow-sm">
            <iframe
              title="Community kitchen map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9235695230923!2d36.89712987536958!3d-1.213445398774966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f167837d774ad%3A0x87569206043adbc7!2sThika%20Rd!5e0!3m2!1sen!2ske!4v1774961430549!5m2!1sen!2ske"
              className="h-96 w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:*835*557%23"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Dial USSD
            </a>
            <a
              href="#k-locations"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1B4332]/20 bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332]/5"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              View K-Locations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
