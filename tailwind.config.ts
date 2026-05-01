import type { Config } from "tailwindcss";

/** Mega Gas logo palette (coolors.co — megapallet) */
const MEGA = {
  forest: "#246102",
  vibrant: "#31E61F",
  lime: "#C0FC1F",
  black: "#000000",
  softWhite: "#FBFCFB",
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          forest: MEGA.forest,
          vibrant: MEGA.vibrant,
          lime: MEGA.lime,
          black: MEGA.black,
        },
        softwhite: MEGA.softWhite,
        forest: {
          DEFAULT: MEGA.forest,
          dark: "#1a4d02",
          light: "#2d7003",
        },
        mint: MEGA.vibrant,
        slatebrand: "#3D4F47",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee-testimony": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-testimony": "marquee-testimony 45s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
