import { useMemo, useState } from "react";
import { dogsData } from "../../data/dogs";
import type { Dog } from "../../data/dogs";
import { DogCard } from "../../components/DogCard/DogCard";
import { Reveal } from "../../components/Reveal/Reveal";
import "./DogsPage.scss";

type Filter = "all" | "small" | "big" | "puppy" | "urgent";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Все собаки" },
  { id: "small", label: "Маленькие" },
  { id: "big", label: "Крупные" },
  { id: "puppy", label: "Щенки" },
  { id: "urgent", label: "Срочно!" },
];

const applyFilter = (dogs: Dog[], filter: Filter): Dog[] => {
  switch (filter) {
    case "urgent":
      return dogs.filter((d) => d.tags.includes("urgent"));
    case "puppy":
      return dogs.filter((d) => d.age.includes("месяц") || parseInt(d.age) < 1);
    case "small":
      return dogs.filter((d) => d.size === "small");
    case "big":
      return dogs.filter((d) => d.size === "big");
    default:
      return dogs;
  }
};

export const DogsPage = () => {
  const [active, setActive] = useState<Filter>("all");
  const visible = useMemo(() => applyFilter(dogsData, active), [active]);

  return (
    <div className="dogs-page">
      <div className="dogs-header">
        <div className="section-label">Найти питомца</div>
        <h1>
          Выбери своего <em>друга</em>
        </h1>
        <p>
          Все они здоровы, привиты и стерилизованы. Осталось одно — встретиться с
          вами.
        </p>
      </div>

      <div className="dogs-filters">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${active === f.id ? "active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="dogs-grid">
        {visible.map((dog, i) => (
          <Reveal key={dog.name} delay={(i % 4) * 80} className="dogs-grid-item">
            <DogCard dog={dog} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
