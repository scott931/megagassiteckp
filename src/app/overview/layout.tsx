import { Source_Serif_4 } from "next/font/google";

const overviewSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-overview-serif",
  display: "swap",
});

export default function OverviewLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={overviewSerif.variable}>{children}</div>;
}
