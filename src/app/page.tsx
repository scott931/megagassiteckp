import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { VisionMission } from "@/components/home/VisionMission";
import { OurSolution } from "@/components/home/OurSolution";
import { WhyChoose } from "@/components/home/WhyChoose";
import { MoreImpact } from "@/components/home/MoreImpact";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <OurSolution />
        <WhyChoose />
        <MoreImpact />
      </main>
      <Footer />
    </>
  );
}
