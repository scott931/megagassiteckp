import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CommunityKitchensLayout } from "@/components/impact/CommunityKitchensLayout";

export const metadata: Metadata = {
  title: "Community Kitchens | Mega Gas Alternative Energy",
  description:
    "Mega Gas community kitchens: clean cooking, waste-to-energy, PAYGO access, and locations near you.",
};

export default function CommunityKitchenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <CommunityKitchensLayout />
      </main>
      <Footer />
    </>
  );
}
