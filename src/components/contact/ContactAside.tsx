import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

const googleMapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9235695230923!2d36.89712987536958!3d-1.213445398774966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f167837d774ad%3A0x87569206043adbc7!2sThika%20Rd!5e0!3m2!1sen!2ske!4v1774961430549!5m2!1sen!2ske";

const mapsDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Thika+Rd%2C+Nairobi%2C+Kenya";

export function ContactAside() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          Prefer a direct approach?
        </h2>
        <ul className="mt-6 flex flex-col gap-5">
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/10 text-[#1B4332]">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Phone</p>
              <a
                href="tel:+254701063018"
                className="mt-0.5 block text-base font-medium text-neutral-900 transition hover:text-[#1B4332]"
              >
                +254 701 063018
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/10 text-[#1B4332]">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</p>
              <a
                href="mailto:info@megagasalternativeenergy.co.ke"
                className="mt-0.5 block break-all text-base font-medium text-neutral-900 transition hover:text-[#1B4332]"
              >
                info@megagasalternativeenergy.co.ke
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/10 text-[#1B4332]">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Hours</p>
              <p className="mt-0.5 text-base text-neutral-800">
                Mon – Sun: 8 AM – 9 PM
                <span className="mt-1 block text-sm text-neutral-600">
                  Happy hours: Sat 2 PM – 4 PM
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner">
        <div className="relative aspect-[4/3] min-h-[240px] w-full sm:aspect-[16/10] sm:min-h-[280px]">
          <iframe
            title="Mega Gas — Thika Rd, Nairobi"
            src={googleMapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/15 to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm">
          <div className="pointer-events-auto rounded-xl border border-neutral-200/80 bg-white p-4 shadow-lg">
            <h3 className="flex items-center gap-2 text-sm font-bold text-neutral-900">
              <MapPin className="h-4 w-4 shrink-0 text-[#1B4332]" aria-hidden />
              Visit our office
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              RW9P+7C3, Thika Rd, Nairobi, Kenya
            </p>
            <Link
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B4332] transition hover:gap-2"
            >
              Get directions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
