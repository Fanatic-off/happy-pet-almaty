import { Reveal } from "../../../../components/Reveal/Reveal";
import { volunteerDuties as duties } from "../../../../data/volunteering";
import "./Duties.scss";

interface DutiesProps {
  selected: string[];
  onToggle: (title: string) => void;
}

export const Duties = ({ selected, onToggle }: DutiesProps) => {
  return (
    <section className="section volunteer-duties">
      <div className="section-label">Обязанности</div>
      <h2 className="section-h2">
        Чем можно <em>помочь</em>
      </h2>
      <p className="section-sub">
        Выберите, что вам ближе — необязательно всё сразу. Даже пара часов в
        неделю уже большая поддержка.
      </p>

      <div className="duties-grid">
        {duties.map((d, i) => {
          const active = selected.includes(d.title);
          return (
            <Reveal key={d.title} delay={(i % 3) * 90}>
              <button
                type="button"
                className={`duty-card ${active ? "active" : ""}`}
                onClick={() => onToggle(d.title)}
                aria-pressed={active}
              >
                <div className="duty-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <span className="duty-check">
                  {active ? "✓ выбрано" : "＋ выбрать"}
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
