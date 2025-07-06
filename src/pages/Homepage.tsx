// import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import CompaynySection from "../components/CompanySection";
import HeroSectionV2 from "../components/HeroSectionV2";
import MarqueeBar from "../components/MarqueeBar";
import GA from "../utils/google-analytics";
import { useEffect } from "react";
import getTitle from "../utils/get-title";

export default function Homepage() {
  const pageTitle = getTitle("Home");
  const a = {
    hitType: "pageview",
    page: window.location.pathname,
    title: pageTitle,
  };

  useEffect(() => {
    document.title = pageTitle;

    GA.send(a);
  }, []);

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
