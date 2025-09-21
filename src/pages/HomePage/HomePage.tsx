import { AboutUs } from "./components/AboutUs/AboutUs";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { PhotoSection } from "./components/PhotoSection/PhotoSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <PhotoSection />
    </>
  );
};
