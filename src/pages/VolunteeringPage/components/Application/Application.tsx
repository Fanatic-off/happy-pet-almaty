import { openWhatsApp } from "../../../../config/site";
import { volunteerDuties } from "../../../../data/volunteering";
import "./Application.scss";

interface ApplicationProps {
  selected: string[];
}

export const Application = ({ selected }: ApplicationProps) => {
  const apply = () => {
    const chosen = volunteerDuties.filter((d) => selected.includes(d.title));

    const areas = chosen.length
      ? "Готов(а) помогать:\n" +
        chosen.map((d) => `— ${d.title}: ${d.text}`).join("\n")
      : "Готов(а) помогать чем смогу.";

    openWhatsApp(
      `Здравствуйте! Хочу стать волонтёром приюта «Счастливый питомец» 🐾.\n\n` +
        `${areas}\n\nПодскажите, с чего начать?`
    );
  };

  return (
    <section className="volunteer-apply">
      <div className="apply-inner">
        <h2>
          Готовы помочь? <em>Оставьте заявку</em>
        </h2>
        <p>
          {selected.length
            ? `Вы выбрали: ${selected.join(", ")}. Нажмите — и мы продолжим в WhatsApp.`
            : "Нажмите кнопку — откроется WhatsApp с готовым сообщением. Направление можно уточнить в переписке."}
        </p>
        <button className="apply-btn" onClick={apply}>
          <span className="apply-btn-icon">💬</span>
          Оставить заявку в WhatsApp
        </button>
        <span className="apply-note">
          Ответим и расскажем, как всё устроено. Спасибо, что не проходите мимо 🐾
        </span>
      </div>
    </section>
  );
};
