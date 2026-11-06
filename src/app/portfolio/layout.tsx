import { Instrument_Serif } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={display.variable}>{children}</div>;
}
