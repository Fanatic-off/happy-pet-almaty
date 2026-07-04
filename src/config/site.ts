// Реальные контакты и ссылки приюта. Меняйте здесь — обновится по всему сайту.
export const SITE = {
  name: "Счастливый питомец",
  tagline: "Приют для бездомных собак · Алматы",
  city: "Алматы, Казахстан",
  phone: "+7 747 212 26 19",
  phoneHref: "tel:+77472122619",
  instagram: "https://www.instagram.com/happy_pet_almaty",
  instagramHandle: "happy_pet_almaty",
  // Ссылка Kaspi для приёма пожертвований
  kaspi: "https://pay.kaspi.kz/pay/hn36faf2",
  hours: "Пн–Вс, 10:00–20:00",
  yearsHelping: 9,
};

// Плейсхолдер-статистика. Замените на реальные цифры приюта.
export const STATS = [
  { value: 1240, suffix: "", label: "собак нашли дом" },
  { value: 84, suffix: "", label: "сейчас в приюте" },
  { value: SITE.yearsHelping, suffix: " лет", label: "мы спасаем жизни" },
];

export const openKaspi = () => {
  window.open(SITE.kaspi, "_blank", "noopener,noreferrer");
};
