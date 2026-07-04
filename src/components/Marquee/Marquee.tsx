import "./Marquee.scss";

const items = [
  "Каждый день мы спасаем жизни",
  "16 000+ неравнодушных уже с нами",
  "Ваше пожертвование кормит и лечит",
  "6 000+ постов о наших хвостиках",
  "Живём только на вашу поддержку",
  "Усыновите — измените две жизни",
];

export const Marquee = () => {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
