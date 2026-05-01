import type { Metadata } from "next";
import { BoardOfAdvisors } from "@/components/about-us/BoardOfAdvisors";
import { MeetTheTeam } from "@/components/about-us/MeetTheTeam";
import { OurStoryHero } from "@/components/about-us/OurStoryHero";
import { ProblemSolution } from "@/components/about-us/ProblemSolution";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";

export const metadata: Metadata = {
  title: "About Us | Mega Gas Alternative Energy",
  description:
    "Our story, the problem we solve, the team behind Mega Gas, and our board of advisors.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <OurStoryHero />
        <ProblemSolution />
        <MeetTheTeam />
        <BoardOfAdvisors />
      </main>
      <Footer />
    </>
  );
}
