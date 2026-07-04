import { Reveal } from "../../../../components/Reveal/Reveal";
import "./HowWeHelp.scss";

const cards = [
  {
    icon: "🚑",
    title: "Спасаем",
    text: "Работаем круглосуточно: подбираем собак с улицы, из ловушек и жестоких условий. Скорость иногда решает всё.",
  },
  {
    icon: "💉",
    title: "Лечим",
    text: "Каждый пёс проходит полный ветеринарный осмотр, вакцинацию, стерилизацию и лечение — независимо от состояния.",
  },
  {
    icon: "🏡",
    title: "Пристраиваем",
    text: "Помогаем найти идеальную семью: знакомим, сопровождаем после усыновления и остаёмся на связи.",
  },
];

export const HowWeHelp = () => {
  return (
    <section className="section how-we-help">
      <div className="section-label">Что мы делаем</div>
      <h2 className="section-h2">
        От улицы — до <em>дома</em>
      </h2>
      <p className="section-sub">
        Мы берём самых потерянных и даём им шанс. Вот как это работает.
      </p>
      <div className="how-grid">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="how-card">
            <div className="how-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
