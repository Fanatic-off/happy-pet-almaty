import type { Dog } from "../../data/dogs";
import { tagLabel } from "../../data/dogs";
import { DogIllustration } from "../DogIllustration/DogIllustration";
import { openWhatsApp } from "../../config/site";
import "./DogCard.scss";

const handleAdopt = (name: string) => {
  openWhatsApp(
    `Здравствуйте! Хочу познакомиться с ${name} 🐾 из приюта «Счастливый питомец». Подскажите, как это можно организовать?`
  );
};

export const DogCard = ({ dog }: { dog: Dog }) => {
  const open = () => handleAdopt(dog.name);

  return (
    <div
      className="dog-card"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
    >
      <div className={`dog-photo ${dog.photo ? "has-photo" : dog.color}`}>
        <div className="dog-status">{dog.status}</div>
        {dog.photo ? (
          <img src={dog.photo} alt={dog.name} loading="lazy" />
        ) : (
          <DogIllustration />
        )}
      </div>
      <div className="dog-info">
        <div className="dog-name">{dog.name}</div>
        <div className="dog-meta">{dog.meta}</div>
        <p className="dog-desc">{dog.desc}</p>
        <div className="dog-tags">
          {dog.tags.map((t) => (
            <span key={t} className={`dog-tag tag-${t}`}>
              {tagLabel(t)}
            </span>
          ))}
        </div>
        <button className="dog-adopt-btn" tabIndex={-1}>
          Познакомиться с {dog.name}
        </button>
      </div>
    </div>
  );
};
