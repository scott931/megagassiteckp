import type { Metadata } from "next";
import { ContactAside } from "@/components/contact/ContactAside";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";

export const metadata: Metadata = {
  title: "Contact Us | Mega Gas Alternative Energy",
  description:
    "Reach Mega Gas for clean gas orders, partnerships, and support—Thika Rd, Nairobi.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <ContactHero />
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <ContactForm />
            <ContactAside />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
