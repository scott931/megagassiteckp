import type { Metadata } from "next";
import { FeaturedVideoTestimony } from "@/components/testimony/FeaturedVideoTestimony";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
// import { PartnerMarquee } from "@/components/testimony/PartnerMarquee"; // Restored when partners page ships
import { TestimonialMasonry } from "@/components/testimony/TestimonialMasonry";
import { TestimonyCTA } from "@/components/testimony/TestimonyCTA";
import { TestimonyHero } from "@/components/testimony/TestimonyHero";

export const metadata: Metadata = {
  title: "Stories of Change | Mega Gas Alternative Energy",
  description:
    "Verified success stories from households and partners—Mega Gas clean energy for Kenya.",
};

export default function TestimonyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <TestimonyHero />
        <FeaturedVideoTestimony />
        <TestimonialMasonry />
        {/* <PartnerMarquee /> — logo marquee moved to dedicated partners page */}
        <TestimonyCTA />
      </main>
      <Footer />
    </>
  );
}
