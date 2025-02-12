import { DM_Serif_Display } from "next/font/google";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus/AboutSection";
import AchievementSection from "../components/Achievement/AchievementSection";
import WhatSection from "../components/WhatWeDo/WhatSection";
import InitiativesSection from "../components/Initiatives/InitiativesSection";
import TeamSection from "../components/TeamSection";
import FooterSection from "../components/FooterSection";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${dmSerif.className}`}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <AchievementSection />
      <WhatSection />
      <InitiativesSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}
