import TopBar from "@/components/TopBar";
import { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`max-w-screen-xl mx-auto ${nunito_sans.className}`}>
      <TopBar />
      <main>{children}</main>
    </div>
  );
}
