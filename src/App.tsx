import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import CompaynySection from "./components/CompanySection";

function App() {
  return (
    <>
      <Header />

      <main>
        <CompaynySection />
        <SkillSection />
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
