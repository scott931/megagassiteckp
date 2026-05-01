"use client";

import Link from "next/link";
import { useState } from "react";
import { PartnershipInquiryModal } from "./PartnershipInquiryModal";

export function PartnersCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#1B4332] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to scale impact with us?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Whether you represent a public agency, an NGO, or a distribution network—we
            are always building alliances that put safety and access first.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#1B4332] shadow-sm transition hover:bg-white/90 sm:w-auto"
            >
              Partnership inquiry
            </button>
            <Link
              href="/contact?topic=partnership-deck"
              className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full border-2 border-white/90 bg-transparent px-8 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Download partnership deck
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/65">
            Prefer email?{" "}
            <a
              href="mailto:info@megagasalternativeenergy.co.ke?subject=Partnership%20inquiry"
              className="font-medium text-[#52B788] underline-offset-2 transition hover:text-[#52B788]/90 hover:underline"
            >
              info@megagasalternativeenergy.co.ke
            </a>
          </p>
        </div>
      </section>
      <PartnershipInquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
