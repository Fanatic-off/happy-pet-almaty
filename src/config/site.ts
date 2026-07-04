// Реальные контакты и ссылки приюта. Меняйте здесь — обновится по всему сайту.
export const SITE = {
  name: "Счастливый питомец",
  tagline: "Приют для бездомных собак · Алматы",
  // ВАЖНО для SEO: укажите реальный домен сайта (без слэша в конце).
  // Также замените его в public/robots.txt, public/sitemap.xml и index.html (canonical, og:url, JSON-LD).
  url: "https://happy-pet-almaty.kz",
  city: "Алматы, Казахстан",
  phone: "+7 747 212 26 19",
  phoneHref: "tel:+77472122619",
  // Номер для WhatsApp (только цифры, без + и пробелов)
  whatsapp: "77472122619",
  instagram: "https://www.instagram.com/happy_pet_almaty",
  instagramHandle: "happy_pet_almaty",
  // Ссылка Kaspi для приёма пожертвований
  kaspi: "https://pay.kaspi.kz/pay/hn36faf2",
  hours: "Пн–Вс, 10:00–20:00",
  yearsHelping: 9,
};

// Статистика по актуальному профилю Instagram @happy_pet_almaty.
// Обновляйте цифры подписчиков/публикаций периодически.
export const STATS = [
  { value: 16218, suffix: "", label: "неравнодушных в нашей стае" },
  { value: 6284, suffix: "", label: "постов о наших хвостиках" },
  { value: 100, suffix: "%", label: "живём на ваши пожертвования" },
];

export const openKaspi = () => {
  window.open(SITE.kaspi, "_blank", "noopener,noreferrer");
};

// Открыть чат в WhatsApp с приютом (с предзаполненным текстом)
export const openWhatsApp = (text?: string) => {
  const base = `https://wa.me/${SITE.whatsapp}`;
  const url = text ? `${base}?text=${encodeURIComponent(text)}` : base;
  window.open(url, "_blank", "noopener,noreferrer");
};
