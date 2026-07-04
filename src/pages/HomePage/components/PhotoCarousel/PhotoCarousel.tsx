import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryPhotos } from "../../../../data/gallery";
import "./PhotoCarousel.scss";

const settings: Settings = {
  className: "photo-slider",
  dots: true,
  arrows: true,
  infinite: galleryPhotos.length > 1,
  centerMode: galleryPhotos.length > 2,
  centerPadding: "80px",
  slidesToShow: Math.min(3, galleryPhotos.length),
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 960,
      settings: { slidesToShow: Math.min(2, galleryPhotos.length), centerPadding: "40px" },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, centerMode: true, centerPadding: "32px" },
    },
  ],
};

export const PhotoCarousel = () => {
  return (
    <section className="section-sm photo-carousel">
      <div className="section-label">Живые кадры</div>
      <h2 className="section-h2">
        Реальные фото <em>из приюта</em>
      </h2>
      <p className="section-sub">
        Без фильтров и постановки — наши будни, наши хвостики, ваша будущая
        семья.
      </p>

      <div className="carousel-wrap">
        <Slider {...settings}>
          {galleryPhotos.map((photo, i) => (
            <div key={i} className="carousel-slide">
              <div className="carousel-card">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                {photo.caption && <span className="carousel-caption">{photo.caption}</span>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
