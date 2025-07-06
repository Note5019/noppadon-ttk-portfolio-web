import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import CompaynySection from "../components/CompanySection";
import HeroSectionV2 from "../components/HeroSectionV2";

export default function Homepage() {
  return (
    <>
      <HeroSectionV2 />
      <div className="relatve mb-6 py-6">
        <div className="-mt-5 h-[50px] w-full rotate-0.5 bg-green-200"></div>
        <div className="-mt-12 h-[50px] w-full -rotate-2 bg-green-300 flex justify-center items-center text-white text-2xl font-bold">
          Let's learn more about me!
        </div>
      </div>
      {/* <HeroSection /> */}
      <SkillSection />
      <CompaynySection />
    </>
  );
}
