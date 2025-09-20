import { AboutUs } from "./components/AboutUs/AboutUs";
import { HeroSection } from "./components/HeroSection/HeroSection";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
    </>
  );
};
