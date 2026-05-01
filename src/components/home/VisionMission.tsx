import Image from "next/image";
import { Eye, Target } from "lucide-react";
import h11Image from "@/images/h11.jpeg";

export function VisionMission() {
  return (
    <section
      id="vision"
      className="relative border-t border-brand-forest/10 bg-softwhite py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-neutral-700 sm:text-xl">
          Mega Gas provides clean and affordable cooking energy through community
          kitchens powered by renewable and circular energy systems. By converting
          plastic and organic waste into clean gas, we deliver accessible cooking
          solutions to low-income communities while reducing pollution and
          improving livelihoods.
        </p>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          <article className="shadow-mint-soft rounded-2xl border border-brand-forest/10 bg-white p-8">
            <div className="mb-4 inline-flex rounded-xl border border-brand-forest/15 bg-brand-forest/[0.06] p-3 text-brand-forest">
              <Eye className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="text-xl font-bold text-brand-forest">Vision</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">
              To impact millions of lives with our clean cooking gas. We envision
              a future where every household can access safe, affordable, and
              sustainable cooking energy.
            </p>
          </article>

          <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-brand-forest/10 shadow-mint-soft">
            <Image
              src={h11Image}
              alt="Sustainable landscape and clean energy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-brand-forest/10"
              aria-hidden
            />
          </div>

          <article className="shadow-mint-soft rounded-2xl border border-brand-forest/10 bg-white p-8">
            <div className="mb-4 inline-flex rounded-xl border border-brand-forest/15 bg-brand-forest/[0.06] p-3 text-brand-forest">
              <Target className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="text-xl font-bold text-brand-forest">Mission</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">
              To democratize access to clean cooking energy through innovation and
              research. We are committed to breaking barriers to energy access by
              designing affordable, scalable, and inclusive solutions that reach
              underserved communities.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
