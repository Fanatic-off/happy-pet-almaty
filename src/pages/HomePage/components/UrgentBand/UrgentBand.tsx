import { quickAmounts } from "../../../../data/donations";
import { useDonate } from "../../../../components/DonateModal/DonateContext";
import "./UrgentBand.scss";

export const UrgentBand = () => {
  const { openDonate } = useDonate();
  const goDonate = () => openDonate();

  return (
    <div className="urgent-band">
      <div className="urgent-text">
        <h2>
          Прямо сейчас 12 собак
          <br />
          <em>находятся в критическом состоянии</em>
        </h2>
        <p>
          Им нужны лекарства, операции и уход. Каждый тенге, который вы
          переводите сегодня, спасает реальную жизнь — не метафорически.
        </p>
      </div>
      <div className="urgent-donate">
        <button className="donate-big-btn" onClick={goDonate}>
          <span className="donate-ripple" />
          <span className="donate-ripple" />
          ❤️ Помочь прямо сейчас
        </button>
        <div className="urgent-amounts">
          {quickAmounts.map((a) => (
            <div
              key={a}
              className="amount-chip"
              onClick={() => openDonate(a.replace(/\D/g, ""))}
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
