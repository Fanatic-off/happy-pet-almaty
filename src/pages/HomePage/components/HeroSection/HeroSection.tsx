import "./HeroSection.scss";
import puppy from "./assets/puppy.svg";

export const HeroSection = () => {
  return (
    <div id="hero-section-id">
      <div className="hero-section">
        <div className="appeal">
          <h1>Not only people need a house</h1>

          <p className="description">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
        </div>

        <div className="puppy">
          <img className="puppy-img" src={puppy} alt="puppy" />
        </div>
      </div>
    </div>
  );
};
