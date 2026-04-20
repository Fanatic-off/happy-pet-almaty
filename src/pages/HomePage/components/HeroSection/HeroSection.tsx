import "./HeroSection.scss";
import puppy from "./assets/puppy.svg";

export const HeroSection = () => {
  return (
    <div id="hero-section-id">
      <div className="hero-section">
        <div className="appeal">
          <h1>Не только людям нужен дом</h1>

          <p className="description">
            Мы предлагаем дать шанс маленькому и милому щенку с невероятно
            широким и открытым сердцем.
            <br />
            Он или она будут любить вас больше, чем кто-либо другой на свете —
            вы сами увидите!
          </p>
        </div>

        <div className="puppy">
          <img className="puppy-img" src={puppy} alt="puppy" />
        </div>
      </div>
    </div>
  );
};
