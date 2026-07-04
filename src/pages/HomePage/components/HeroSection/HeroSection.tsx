import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../store/routes";
import { useDonate } from "../../../../components/DonateModal/DonateContext";
import { STATS } from "../../../../config/site";
import { dogsData } from "../../../../data/dogs";
import { DogIllustration } from "../../../../components/DogIllustration/DogIllustration";
import { useInView } from "../../../../hooks/useInView";
import { useCountUp } from "../../../../hooks/useCountUp";
import "./HeroSection.scss";

const StatItem = ({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) => {
  const count = useCountUp(value, start);
  const display = count.toLocaleString("ru-RU");
  return (
    <div className="stat-item">
      <div className="stat-num">
        {display}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const { openDonate } = useDonate();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const heroDogs = dogsData.slice(0, 4);

  return (
    <section className="hero">
      <div className="hero-bg-circles">
        <div className="hero-circle" />
        <div className="hero-circle" />
        <div className="hero-circle" />
      </div>

      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-eyebrow">🐶 Приют для бездомных собак · Алматы</div>
          <h1 className="hero-h1">
            Им нужен
            <br />
            только <em>один человек</em>,<br />
            который скажет «да»
          </h1>
          <p className="hero-sub">
            Каждый день к нам поступают собаки, которых бросили или нашли на
            улице. Они напуганы, но не сломлены. Каждая ждёт своей семьи — и,
            может быть, это вы.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => navigate(ROUTES.DOGS)}>
              <span className="btn-heart">🐕</span> Найти своего пса
            </button>
            <button className="btn-secondary" onClick={() => openDonate()}>
              <span>❤️</span> Пожертвовать
            </button>
          </div>
        </div>

        <div className="hero-stats" ref={ref}>
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>

      <div className="hero-dogs">
        <div className="hero-dogs-grid">
          {heroDogs.map((dog) => (
            <div className="dog-card-mini" key={dog.name}>
              <div className={`dog-avatar ${dog.photo ? "has-photo" : dog.color}`}>
                {dog.photo ? (
                  <img src={dog.photo} alt={dog.name} loading="lazy" />
                ) : (
                  <DogIllustration variant="mini" />
                )}
              </div>
              <div className="dog-card-mini-info">
                <div className="dog-mini-name">{dog.name}</div>
                <div className="dog-mini-age">{dog.meta}</div>
                <div className="waiting-badge">{dog.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
