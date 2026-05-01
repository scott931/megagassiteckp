"use client";

import Image from "next/image";
import { useState } from "react";

const beforeSrc =
  "/images/fwdpitchdeckredesigning/1000388936.jpg.jpeg";
const afterSrc =
  "/images/fwdpitchdeckredesigning/1000388967.jpg.jpeg";

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-green-800/10 shadow-lg shadow-green-900/10">
      <Image
        src={afterSrc}
        alt="After — protected forest"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt="Before — higher pressure on forests"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-md"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        aria-label="Compare before and after forest impact"
      />
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Drag to compare
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/45 px-2 py-1 text-xs text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-black/45 px-2 py-1 text-xs text-white">
        After
      </span>
    </div>
  );
}
