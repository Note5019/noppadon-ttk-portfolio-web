import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
import { Button } from "flowbite-react";

function App() {
  return (
    <>
      <Header />

      <main>
        {/* <HeroSection /> */}
        <Button>Click me</Button>
      </main>

      <Footer />
    </>
  );
}

export default App;
