"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/90 p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
        Let&apos;s Talk About Your Project
      </h2>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="We will reply to this address"
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Company name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Let us know who you represent"
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help"
            className="w-full resize-y rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-[#1B4332] py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#152f28] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/40 focus:ring-offset-2"
        >
          {status === "sent" ? "Message recorded" : "Send message"}
        </button>
        {status === "sent" && (
          <p className="text-center text-sm text-neutral-600">
            Thanks—we&apos;ll connect you with our team. For urgent matters, call{" "}
            <a href="tel:+254701063018" className="font-medium text-[#1B4332] underline-offset-2 hover:underline">
              +254 701 063018
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
