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
          Когда она впервые положила голову мне на колени, я понял — вот оно. Я
          искал её всю жизнь, просто не знал об этом.
          <div className="big-quote-author">
            — Алексей, усыновил Белку в 2024 году
          </div>
        </div>
      </div>
    </div>
  );
};
