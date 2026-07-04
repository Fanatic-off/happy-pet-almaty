import { useState } from "react";
import { donationTiers, impactItems, formatTenge } from "../../data/donations";
import { useDonate } from "../../components/DonateModal/DonateContext";
import { Reveal } from "../../components/Reveal/Reveal";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import "./DonatePage.scss";

export const DonatePage = () => {
  useDocumentMeta({
    title: "Помочь приюту в Алматы — пожертвование | Счастливый питомец",
    description:
      "Поддержите приют «Счастливый питомец» в Алматы. Пожертвование через Kaspi идёт на корм, лечение и уход за бездомными собаками. Даже небольшая сумма спасает жизнь.",
    path: "/donate",
  });

  const { openDonate } = useDonate();
  const [selected, setSelected] = useState("1000");
  const [custom, setCustom] = useState("");
  const [period, setPeriod] = useState<"once" | "monthly">("once");

  const isCustom = selected === "custom";
  const amount = isCustom ? custom : selected;
  const amountLabel = amount ? `${formatTenge(amount)} ₸` : "…";

  return (
    <div className="donate-page">
      <div className="donate-hero">
        <span className="donate-big-heart">❤️</span>
        <h1>
          Немного денег —<br />
          <em>и целый пёс счастлив</em>
        </h1>
        <p>
          Мы не берём себе ни тенге: всё до копейки — на корм, лечение и тёплые
          вольеры. Стая ведёт честную бухгалтерию (лапами).
        </p>
      </div>

      <div className="donate-form-section">
        <div className="donate-form-box">
          <h2>Покормить стаю сегодня</h2>

          <div className="period-toggle">
            <button
              className={`period-btn ${period === "once" ? "active" : ""}`}
              onClick={() => setPeriod("once")}
            >
              Разово
            </button>
            <button
              className={`period-btn ${period === "monthly" ? "active" : ""}`}
              onClick={() => setPeriod("monthly")}
            >
              Ежемесячно
            </button>
          </div>

          <div className="amount-grid">
            {donationTiers.map((tier) => (
              <button
                key={tier.value}
                className={`amount-btn ${selected === tier.value ? "selected" : ""}`}
                onClick={() => setSelected(tier.value)}
              >
                {tier.value === "custom" ? "Своя" : `${formatTenge(tier.value)} ₸`}
                <span>{tier.label}</span>
              </button>
            ))}
          </div>

          {isCustom && (
            <input
              type="number"
              className="custom-amount"
              placeholder="Введите сумму (₸)"
              value={custom}
              autoFocus
              onChange={(e) => setCustom(e.target.value)}
            />
          )}

          <button
            className="submit-donate"
            onClick={() => openDonate(amount || undefined)}
          >
            ❤️ Пожертвовать <span>{amountLabel}</span>
          </button>

          <p className="donate-note">
            Безопасная оплата через Kaspi · Каспи Голд · банковские карты
            <br />
            А потом пришлём отчёт — стая любит, когда всё по-честному 🐾
          </p>
        </div>

        <div className="donate-impact">
          <div className="donate-impact-title">Куда уходит каждый тенге?</div>
          <p className="donate-impact-sub">
            Никаких «на нужды приюта». Каждый тенге — с именем и миской. Отчёты
            публикуем каждый месяц.
          </p>

          {impactItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className={`impact-card impact-${item.variant}`}>
              <div className="impact-icon">{item.icon}</div>
              <div className="impact-body">
                <div className="impact-amount">{item.amount}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
