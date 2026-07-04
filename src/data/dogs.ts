export type DogSize = "small" | "big";
export type DogTag = "friendly" | "urgent" | "kids" | "quiet";

export interface Dog {
  name: string;
  age: string;
  breed: string;
  size: DogSize;
  tags: DogTag[];
  desc: string;
  color: string; // css-класс градиента (dog-illo-1 ... dog-illo-8)
  months: number; // сколько ждёт дом
}

// Плейсхолдер-данные. Замените реальными собаками приюта.
export const dogsData: Dog[] = [
  { name: "Барон", age: "3 года", breed: "Лабрадор", size: "big", tags: ["kids", "friendly"], desc: "Добродушный великан, обожает детей и мячики. Идеален для большой семьи.", color: "dog-illo-1", months: 8 },
  { name: "Люся", age: "2 года", breed: "Дворняжка", size: "small", tags: ["friendly", "quiet"], desc: "Тихая и нежная. Любит лежать рядом и смотреть кино. Мечта интроверта.", color: "dog-illo-2", months: 4 },
  { name: "Граф", age: "5 лет", breed: "Хаски", size: "big", tags: ["urgent", "friendly"], desc: "Ждёт год. Пережил жестокое обращение, но не потерял доверия к людям.", color: "dog-illo-3", months: 12 },
  { name: "Буся", age: "1 год", breed: "Спаниель", size: "small", tags: ["kids", "friendly"], desc: "Щенячья энергия в маленьком теле. Выучила «сидеть» за три дня.", color: "dog-illo-4", months: 2 },
  { name: "Рокки", age: "7 лет", breed: "Немецкая овчарка", size: "big", tags: ["urgent", "quiet"], desc: "Ему уже 7 — и он всё ещё ждёт. Взрослые собаки любят не меньше.", color: "dog-illo-5", months: 18 },
  { name: "Берта", age: "4 месяца", breed: "Метис", size: "small", tags: ["kids", "friendly"], desc: "Смешная, пузатая, сопит во сне. Вакцинирована, готова к переезду.", color: "dog-illo-6", months: 1 },
  { name: "Зефир", age: "2 года", breed: "Самоед", size: "big", tags: ["friendly", "kids"], desc: "Пушистое облако с постоянной улыбкой. Любит снег и обнимашки.", color: "dog-illo-7", months: 6 },
  { name: "Пуля", age: "3 года", breed: "Такса", size: "small", tags: ["quiet"], desc: "Маленькая, гордая, очень умная. Знает 12 команд и притворяется, что не слышит 13-ю.", color: "dog-illo-8", months: 5 },
];

export const monthWord = (n: number): string => {
  if (n === 1) return "месяц";
  if (n >= 2 && n <= 4) return "месяца";
  return "месяцев";
};

export const tagLabel = (t: DogTag): string =>
  ({ friendly: "дружелюбный", urgent: "срочно!", kids: "с детьми", quiet: "спокойный" }[t] || t);
