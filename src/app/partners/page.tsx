import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { TieredPartnerLogos } from "@/components/partners/TieredPartnerLogos";
// import { PartnerSpotlights } from "@/components/partners/PartnerSpotlights";
import { PartnersCTA } from "@/components/partners/PartnersCTA";

export const metadata: Metadata = {
  title: "Strategic Partners | Mega Gas Alternative Energy",
  description:
    "Government, NGO, and corporate partners working with Mega Gas to scale clean energy across Africa—institutional trust and measurable impact.",
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <PartnersHero />
        <TieredPartnerLogos />
        {/* <PartnerSpotlights /> */}
        <PartnersCTA />
      </main>
      <Footer />
    </>
  );
}
