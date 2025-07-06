import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import CompaynySection from "../components/CompanySection";
import HeroSectionV2 from "../components/HeroSectionV2";
import MarqueeBar from "../components/MarqueeBar";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Homepage() {
  const GA_ID = import.meta.env.VITE_GA_ID;

  useEffect(() => {
        ReactGA.initialize(GA_ID);
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);


  return (
    <>
      <HeroSectionV2 />
      GA_ID = {GA_ID}
      <MarqueeBar />
      {/* <HeroSection /> */}
      <SkillSection />
      <CompaynySection />
    </>
  );
}
