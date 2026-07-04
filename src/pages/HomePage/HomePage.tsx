import { HeroSection } from "./components/HeroSection/HeroSection";
import { Marquee } from "../../components/Marquee/Marquee";
import { HowWeHelp } from "./components/HowWeHelp/HowWeHelp";
import { UrgentBand } from "./components/UrgentBand/UrgentBand";
import { PhotoCarousel } from "./components/PhotoCarousel/PhotoCarousel";
import { StoriesPreview } from "./components/StoriesPreview/StoriesPreview";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Marquee />
      <HowWeHelp />
      <PhotoCarousel />
      <UrgentBand />
      <StoriesPreview />
    </>
  );
};
