import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-testimony-ui",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-testimony-quote",
  display: "swap",
});

export default function TestimonyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} [font-family:var(--font-testimony-ui),system-ui,sans-serif]`}
    >
      {children}
    </div>
  );
}
