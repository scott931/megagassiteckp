"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function PartnershipInquiryModal({ open, onClose }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative z-[1] w-full max-w-lg rounded-2xl border border-emerald-100/90 bg-white p-6 shadow-xl shadow-[#1B4332]/10 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-xl font-bold text-[#1B4332] sm:text-2xl">
            Partnership inquiry
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-[#1B4332]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-sm text-neutral-600">
          Tell us about your organization and how you would like to collaborate. Our
          partnerships team will respond within two business days.
        </p>
        <form
          className="mt-6 flex flex-col gap-4"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div>
            <label htmlFor="pi-name" className="text-sm font-medium text-[#1B4332]">
              Full name
            </label>
            <input
              id="pi-name"
              name="name"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-800 outline-none ring-[#52B788]/0 transition focus:border-[#52B788]/60 focus:ring-2 focus:ring-[#52B788]/25"
            />
          </div>
          <div>
            <label htmlFor="pi-email" className="text-sm font-medium text-[#1B4332]">
              Work email
            </label>
            <input
              id="pi-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-800 outline-none transition focus:border-[#52B788]/60 focus:ring-2 focus:ring-[#52B788]/25"
            />
          </div>
          <div>
            <label htmlFor="pi-org" className="text-sm font-medium text-[#1B4332]">
              Organization
            </label>
            <input
              id="pi-org"
              name="organization"
              required
              autoComplete="organization"
              className="mt-1.5 w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-800 outline-none transition focus:border-[#52B788]/60 focus:ring-2 focus:ring-[#52B788]/25"
            />
          </div>
          <div>
            <label htmlFor="pi-message" className="text-sm font-medium text-[#1B4332]">
              How would you like to partner?
            </label>
            <textarea
              id="pi-message"
              name="message"
              rows={4}
              required
              className="mt-1.5 w-full resize-y rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-800 outline-none transition focus:border-[#52B788]/60 focus:ring-2 focus:ring-[#52B788]/25"
            />
          </div>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#1B4332] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1B4332]/90"
            >
              Submit inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
