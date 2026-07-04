import "./Marquee.scss";

const items = [
  "Каждый день мы спасаем жизни",
  "84 собаки ждут вас прямо сейчас",
  "Ваше пожертвование кормит и лечит",
  "1 240 счастливых семей",
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
