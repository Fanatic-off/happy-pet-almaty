import type { Story } from "../../data/stories";
import { DogIllustration } from "../DogIllustration/DogIllustration";
import "./StoryCard.scss";

const avatarColors = [
  "#E8901A",
  "#E05A3A",
  "#2A8C6E",
  "#4A5FBF",
  "#9B59B6",
  "#E74C3C",
];

interface StoryCardProps {
  story: Story;
  index?: number;
}

export const StoryCard = ({ story, index = 0 }: StoryCardProps) => {
  return (
    <div className="story-card">
      <div className={`story-photo ${story.photo ? "has-photo" : story.color}`}>
        <div className="story-badge">{story.badge}</div>
        {story.photo ? (
          <img src={story.photo} alt={story.title} loading="lazy" />
        ) : (
          <DogIllustration />
        )}
      </div>
      <div className="story-body">
        <div className="story-title">{story.title}</div>
        <p className="story-excerpt">{story.excerpt}</p>
        <div className="story-footer">
          <div
            className="story-avatar"
            style={{ background: avatarColors[index % avatarColors.length] }}
          >
            {story.author[0]}
          </div>
          <div className="story-author">
            <strong>{story.author}</strong>
            {story.city}
          </div>
        </div>
      </div>
    </div>
  );
};
