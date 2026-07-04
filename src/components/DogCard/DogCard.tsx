import type { Dog } from "../../data/dogs";
import { monthWord, tagLabel } from "../../data/dogs";
import { DogIllustration } from "../DogIllustration/DogIllustration";
import { SITE } from "../../config/site";
import "./DogCard.scss";

const handleAdopt = (name: string) => {
  alert(
    `Отлично! Вы хотите познакомиться с ${name} 🐾\n\n` +
      `Позвоните нам: ${SITE.phone}\n` +
      `или напишите в Instagram: @${SITE.instagramHandle}\n\n` +
      `Мы организуем встречу в удобное время!`
  );
};

export const DogCard = ({ dog }: { dog: Dog }) => {
  return (
    <div className="dog-card">
      <div className={`dog-photo ${dog.color}`}>
        <DogIllustration />
      </div>
      <div className="dog-info">
        <div className="dog-name">{dog.name}</div>
        <div className="dog-meta">
          {dog.age} · {dog.breed} · ждёт {dog.months} {monthWord(dog.months)}
        </div>
        <p className="dog-desc">{dog.desc}</p>
        <div className="dog-tags">
          {dog.tags.map((t) => (
            <span key={t} className={`dog-tag tag-${t}`}>
              {tagLabel(t)}
            </span>
          ))}
        </div>
        <button className="dog-adopt-btn" onClick={() => handleAdopt(dog.name)}>
          Познакомиться с {dog.name}
        </button>
      </div>
    </div>
  );
};
