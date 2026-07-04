import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../store/routes";
import { storiesData } from "../../../../data/stories";
import { StoryCard } from "../../../../components/StoryCard/StoryCard";
import { Reveal } from "../../../../components/Reveal/Reveal";
import "./StoriesPreview.scss";

export const StoriesPreview = () => {
  const navigate = useNavigate();
  const preview = storiesData.slice(0, 2);

  return (
    <section className="section stories-preview">
      <div className="section-label">Истории спасения</div>
      <h2 className="section-h2">
        Они уже нашли <em>свой дом</em>
      </h2>
      <p className="section-sub" style={{ marginBottom: 40 }}>
        Реальные истории — без прикрас. Читайте и убеждайтесь, что чудеса
        случаются.
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
