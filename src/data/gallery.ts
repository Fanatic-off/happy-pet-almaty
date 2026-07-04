// Реальные фото из приюта для карусели на главной.
//
// КАК ДОБАВИТЬ СВОИ ФОТО:
// 1. Положите файлы в папку  src/assets/gallery/
// 2. Импортируйте их ниже и добавьте объект в массив galleryPhotos.
//    Пример:
//      import dog3 from "../assets/gallery/dog3.jpg";
//      { src: dog3, alt: "Прогулка с волонтёром", caption: "Тёплый вечер" }
//
// Пока подключены существующие фото приюта — замените/дополните своими.
import shelter1 from "../assets/gallery/shelter-1.jpg";
import shelter2 from "../assets/gallery/shelter-2.jpg";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: shelter1, alt: "Наши подопечные", caption: "Будни приюта" },
  { src: shelter2, alt: "Наши подопечные", caption: "Каждый ждёт свой дом" },
  // Добавьте больше фото приюта здесь ↑
];
