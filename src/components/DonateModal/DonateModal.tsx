import { useEffect, useState } from "react";
import { useDonate } from "./DonateContext";
import { SITE } from "../../config/site";
import { formatTenge } from "../../data/donations";
import "./DonateModal.scss";

const quickChips = [
  { value: "1000", label: "миска корма" },
  { value: "2000", label: "тёплый нос" },
  { value: "5000", label: "визит к врачу" },
  { value: "10000", label: "спасти лапу" },
];

const hearts = Array.from({ length: 7 });

// Милая лапа в SVG (лапа добра)
const Paw = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="pawGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5a83c" />
        <stop offset="100%" stopColor="#e05a3a" />
      </linearGradient>
    </defs>
    <g fill="url(#pawGrad)">
      <ellipse cx="50" cy="66" rx="21" ry="18" />
      <ellipse cx="27" cy="44" rx="8.5" ry="11" />
      <ellipse cx="41" cy="31" rx="9" ry="12" />
      <ellipse cx="59" cy="31" rx="9" ry="12" />
      <ellipse cx="73" cy="44" rx="8.5" ry="11" />
    </g>
  </svg>
);

// Страница-прокладка с анимацией «лапа спасибо» и переходом на оплату
const redirectUrl = `${import.meta.env.BASE_URL}donate-redirect.html?to=${encodeURIComponent(
  SITE.kaspi
)}`;

export const DonateModal = () => {
  const { open, amount, closeDonate } = useDonate();
  const [selected, setSelected] = useState<string | null>(null);

  // При открытии подхватываем предвыбранную сумму
  useEffect(() => {
    if (open) setSelected(amount);
  }, [open, amount]);

  // Блокируем прокрутку фона + закрытие по Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDonate();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeDonate]);

  if (!open) return null;

  const amountLabel = selected ? `${formatTenge(selected)} ₸` : null;

  // Открываем страницу-прокладку в НОВОМ окне (в рамках клика — иначе браузер блокирует).
  // Прокладка сама проиграет анимацию ~2 сек и уйдёт на Kaspi. Модалку закрываем.
  const proceed = () => {
    // Без "noopener": иначе window.open возвращает null даже при успешном открытии,
    // и мы ошибочно уходим на оплату в этой же вкладке. Опенер обрывает сама прокладка.
    const payWindow = window.open(redirectUrl, "_blank");
    // Только если всплывающее окно реально заблокировано — открываем прокладку здесь же
    if (!payWindow) {
      window.location.href = redirectUrl;
      return;
    }
    closeDonate();
  };

  return (
    <div className="donate-overlay" onClick={closeDonate}>
      <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="donate-modal-close" onClick={closeDonate} aria-label="Закрыть">
          ✕
        </button>

        {/* ЛАПА ДОБРА */}
        <div className="paw-stage">
          <span className="paw-glow" />
          <svg className="paw-charge" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="54" />
          </svg>
          <Paw className="paw-of-kindness" />
          {hearts.map((_, i) => (
            <span key={i} className={`float-heart float-heart-${i + 1}`}>
              ❤️
            </span>
          ))}
        </div>

        <h2 className="donate-modal-title">Стая уже виляет хвостом 🐾</h2>
        <p className="donate-modal-text">
          Один клик — и у кого-то появится миска еды, тёплый угол и шанс дожить
          до своей семьи. Мы держим за вас все четыре лапы.
        </p>

        <div className="donate-modal-chips">
          {quickChips.map((chip) => (
            <button
              key={chip.value}
              className={`donate-chip ${selected === chip.value ? "active" : ""}`}
              onClick={() => setSelected(chip.value)}
            >
              <strong>{formatTenge(chip.value)} ₸</strong>
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        <button className="donate-modal-cta" onClick={proceed}>
          ❤️ Перейти к оплате{amountLabel ? ` · ${amountLabel}` : ""}
        </button>

        <p className="donate-modal-note">
          Безопасная оплата через Kaspi · откроется в новом окне.
          <br />
          Даже 500 ₸ — это сытый вечер для кого-то из наших.
        </p>
      </div>
    </div>
  );
};
