// Реальные фото из приюта для карусели на главной.
//
// КАК ДОБАВИТЬ СВОИ ФОТО:
// 1. Положите файлы в папку  src/assets/gallery/
// 2. Импортируйте их ниже и добавьте объект в массив galleryPhotos.
//    Пример:
//      import dog3 from "../assets/gallery/dog3.jpg";
//      { src: dog3, alt: "Прогулка с волонтёром", caption: "Тёплый вечер" }
//
// Фото взяты из Instagram приюта @happy_pet_almaty.
import yarik from "../assets/gallery/yarik.jpg";
import maria from "../assets/gallery/shelter-maria.jpg";
import strayPuppies from "../assets/gallery/stray-puppies.jpg";
import tina from "../assets/gallery/tina.jpg";
import strayDog from "../assets/gallery/stray-dog.jpg";
import shelter1 from "../assets/gallery/shelter-1.jpg";
import shelter2 from "../assets/gallery/shelter-2.jpg";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: yarik, alt: "Ярик после груминга", caption: "Ярик снова красавец" },
  { src: maria, alt: "Мария с подопечным на руках", caption: "Каждый день рядом с ними" },
  { src: strayPuppies, alt: "Спасённые щенки", caption: "Нашли под плитой" },
  { src: tina, alt: "Тина у миски", caption: "Тина снова дома" },
  { src: strayDog, alt: "Уличный пёс у мисок", caption: "Первая миска воды" },
  { src: shelter1, alt: "Будни приюта", caption: "Будни приюта" },
  { src: shelter2, alt: "Наши подопечные", caption: "Каждый ждёт свой дом" },
  // Добавьте больше фото приюта здесь ↑
];
