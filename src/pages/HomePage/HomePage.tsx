import { HeroSection } from "./components/HeroSection/HeroSection";
import { Marquee } from "../../components/Marquee/Marquee";
import { HowWeHelp } from "./components/HowWeHelp/HowWeHelp";
import { UrgentBand } from "./components/UrgentBand/UrgentBand";
import { PhotoCarousel } from "./components/PhotoCarousel/PhotoCarousel";
import { StoriesPreview } from "./components/StoriesPreview/StoriesPreview";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export const HomePage = () => {
  useDocumentMeta({
    title: "Приют «Счастливый питомец» — помощь бездомным собакам в Алматы",
    description:
      "Приют «Счастливый питомец» в Алматы: спасаем, лечим и пристраиваем бездомных собак. Заберите друга из приюта, возьмите на передержку или помогите пожертвованием через Kaspi.",
    path: "/",
  });

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
