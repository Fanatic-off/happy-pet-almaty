import { useState } from "react";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { Duties } from "./components/Duties/Duties";
import { Application } from "./components/Application/Application";
import "./VolunteeringPage.scss";

export const VolunteeringPage = () => {
  useDocumentMeta({
    title: "Стать волонтёром приюта в Алматы | Счастливый питомец",
    description:
      "Станьте волонтёром приюта «Счастливый питомец» в Алматы: выгул и уход за собаками, передержка, транспорт, помощь в соцсетях. Оставьте заявку в WhatsApp.",
    path: "/volunteer",
  });

  // Выбранные направления помощи — общий стейт для «Обязанностей» и «Заявки»
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (title: string) =>
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );

  return (
    <div className="volunteer-page">
      {/* СТАТЬ ВОЛОНТЁРОМ */}
      <div className="volunteer-hero">
        <span className="volunteer-hero-emoji">🤝🐾</span>
        <div className="section-label">Волонтёрство</div>
        <h1>
          Стать <em>волонтёром</em>
        </h1>
        <p>
          Приюту всегда нужны руки, сердца и немного вашего времени. Любая помощь
          — от выгула до репоста — меняет чью-то жизнь. Присоединяйтесь к стае!
        </p>
      </div>

      {/* ОБЯЗАННОСТИ */}
      <Duties selected={selected} onToggle={toggle} />

      {/* ЗАЯВКА */}
      <Application selected={selected} />
    </div>
  );
};
