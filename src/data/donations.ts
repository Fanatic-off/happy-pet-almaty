export interface DonationTier {
  value: string; // сумма в тенге, "custom" — своя сумма
  label: string; // подпись под суммой
}

// Суммы для быстрого выбора (в тенге).
export const donationTiers: DonationTier[] = [
  { value: "1000", label: "корм на день" },
  { value: "2000", label: "вакцинация" },
  { value: "5000", label: "анализы" },
  { value: "10000", label: "операция" },
  { value: "20000", label: "месяц ухода" },
  { value: "custom", label: "сумма" },
];

// Быстрые суммы в срочном блоке на главной (в тенге).
export const quickAmounts = ["1 000 ₸", "5 000 ₸", "10 000 ₸"];

export interface ImpactItem {
  icon: string;
  amount: string;
  title: string;
  text: string;
  variant: "amber" | "coral" | "teal" | "indigo";
}

export const impactItems: ImpactItem[] = [
  {
    icon: "🍖",
    amount: "от 1 000 ₸/мес",
    title: "Питание",
    text: "Качественный корм, адаптированный под возраст и состояние здоровья каждой собаки.",
    variant: "amber",
  },
  {
    icon: "💊",
    amount: "от 2 000 ₸",
    title: "Ветеринарная помощь",
    text: "Осмотры, вакцинация, лечение травм, операции — без этого многие не выжили бы.",
    variant: "coral",
  },
  {
    icon: "🏠",
    amount: "от 10 000 ₸",
    title: "Содержание вольеров",
    text: "Тепло, чистота, безопасность — базовые условия, которые стоят реальных денег.",
    variant: "teal",
  },
  {
    icon: "🧠",
    amount: "от 5 000 ₸",
    title: "Социализация",
    text: "Работа кинологов помогает напуганным собакам снова доверять людям.",
    variant: "indigo",
  },
];

// Форматирование числа с пробелами: 10000 -> "10 000"
export const formatTenge = (val: string): string => {
  if (!val) return "";
  const n = val.replace(/\D/g, "");
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
