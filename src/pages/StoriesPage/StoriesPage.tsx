import { storiesData } from "../../data/stories";
import { StoryCard } from "../../components/StoryCard/StoryCard";
import { Reveal } from "../../components/Reveal/Reveal";
import "./StoriesPage.scss";

export const StoriesPage = () => {
  return (
    <div className="stories-page">
      <div className="stories-header">
        <div className="section-label" style={{ color: "var(--amber-light)" }}>
          Истории
        </div>
        <h1>
          Они не сдались —
          <br />
          <em>и мы тоже</em>
        </h1>
        <p>
          Истории спасения, которые меняют представление о том, на что способна
          любовь.
        </p>
      </div>

      <div className="stories-grid">
        {storiesData.map((story, i) => (
          <Reveal key={story.title} delay={(i % 3) * 100} className="stories-grid-item">
            <StoryCard story={story} index={i} />
          </Reveal>
        ))}
      </div>

      <div className="story-quote-section">
        <div className="big-quote">
          Мы не получаем государственного финансирования и живём только на вашу
          поддержку. Каждая спасённая жизнь — это и ваша заслуга тоже.
          <div className="big-quote-author">
            — Мария, хозяйка приюта «Счастливый питомец»
          </div>
        </div>
      </div>
    </div>
  );
};
