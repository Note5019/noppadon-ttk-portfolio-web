import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import CompaynySection from "../components/CompanySection";
import HeroSectionV2 from "../components/HeroSectionV2";
import MarqueeBar from "../components/MarqueeBar";

export default function Homepage() {
  return (
    <>
      <HeroSectionV2 />
      <MarqueeBar />
      {/* <HeroSection /> */}
      <SkillSection />
      <CompaynySection />
    </>
  );
}
