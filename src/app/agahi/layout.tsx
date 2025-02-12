import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { DM_Serif_Display } from "next/font/google";
import { JSX } from "react";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div className={`bg-primary text-black ${dmSerif.className} antialiased`}>
      <Navbar />
      {children}
      <FooterSection />
    </div>
  );
}
