import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../store/routes";
import { storiesData } from "../../../../data/stories";
import { StoryCard } from "../../../../components/StoryCard/StoryCard";
import { Reveal } from "../../../../components/Reveal/Reveal";
import "./StoriesPreview.scss";

export const StoriesPreview = () => {
  const navigate = useNavigate();
  const preview = storiesData;

  return (
    <section className="section stories-preview">
      <div className="section-label">Истории спасения</div>
      <h2 className="section-h2">
        Реальные истории <em>наших хвостиков</em>
      </h2>
      <p className="section-sub" style={{ marginBottom: 40 }}>
        Прямо из нашего Instagram — без прикрас. Так выглядит спасение каждый
        день.
      </p>

      <div className="stories-preview-grid">
        {preview.map((story, i) => (
          <Reveal key={story.title} delay={i * 120} className="stories-preview-item">
            <StoryCard story={story} index={i} />
          </Reveal>
        ))}
      </div>

      <div className="stories-preview-more">
        <button className="btn-secondary" onClick={() => navigate(ROUTES.STORIES)}>
          Все истории →
        </button>
      </div>
    </section>
  );
};
