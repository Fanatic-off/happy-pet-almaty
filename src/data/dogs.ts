import yarik from "../assets/gallery/yarik.jpg";
import funtik from "../assets/gallery/funtik.jpg";
import tina from "../assets/gallery/tina.jpg";
import strayPuppies from "../assets/gallery/stray-puppies.jpg";
import strayDog from "../assets/gallery/stray-dog.jpg";

export type DogSize = "small" | "big";
export type DogTag = "friendly" | "urgent" | "kids" | "quiet";

export interface Dog {
  name: string;
  meta: string; // краткое описание: порода · размер и т.п.
  size: DogSize;
  tags: DogTag[];
  desc: string;
  photo?: string; // реальное фото
  color: string; // запасной градиент, если фото нет
  status: string; // "Ищет дом" | "На лечении" ...
  isPuppy?: boolean;
}

// Реальные подопечные приюта «Счастливый питомец» (Instagram @happy_pet_almaty).
export const dogsData: Dog[] = [
  {
    name: "Ярик",
    meta: "Метис · крупный · длинная шерсть",
    size: "big",
    tags: ["friendly"],
    desc: "После профессионального груминга Ярик преобразился: колтуны позади, шерсть — загляденье. Здоров, дружелюбен и на 100% готов к переезду в семью.",
    photo: yarik,
    color: "dog-illo-1",
    status: "🏡 Ищет дом",
  },
  {
    name: "Мама с щенками",
    meta: "Мама + 6 малышей · с улицы",
    size: "small",
    tags: ["kids", "friendly"],
    desc: "Возле нашего дома в Алматы нашли маму-собаку с шестью новорождёнными щенками. Приют берёт на себя ветеринарию и вакцинацию — семье срочно нужна передержка или дом.",
    photo: strayPuppies,
    color: "dog-illo-6",
    status: "🏡 Нужна передержка",
    isPuppy: true,
  },
  {
    name: "Тина",
    meta: "Метис · средний · с характером",
    size: "big",
    tags: ["urgent", "quiet"],
    desc: "С декабря боремся за её здоровье: колоноскопия, биопсии, предварительно колит. Сейчас Тина снова в приюте и очень радуется жизни. Ей нужна поддержка на лечение.",
    photo: tina,
    color: "dog-illo-2",
    status: "💊 На лечении",
  },
  {
    name: "Фунтик",
    meta: "Мопс · маленький · большой боец",
    size: "small",
    tags: ["urgent"],
    desc: "Лечим от демодекоза, позади уже четыре операции на ухе. Несмотря на всё, Фунтик не теряет доверия к людям и продолжает бороться. Ему очень нужна помощь.",
    photo: funtik,
    color: "dog-illo-4",
    status: "💊 На лечении",
  },
  {
    name: "Найдёныш",
    meta: "Метис · ласковый · с улицы",
    size: "big",
    tags: ["urgent"],
    desc: "Почти неделю бродит по мкр Кемел — ласковый, но напуганный. Люди его боятся, магазин грозит вызвать отлов. Ему срочно нужен тот, кто заберёт его с улицы.",
    photo: strayDog,
    color: "dog-illo-3",
    status: "⚠️ Срочно",
  },
];

export const tagLabel = (t: DogTag): string =>
  ({ friendly: "дружелюбный", urgent: "нужна помощь", kids: "с детьми", quiet: "спокойный" }[t] || t);
