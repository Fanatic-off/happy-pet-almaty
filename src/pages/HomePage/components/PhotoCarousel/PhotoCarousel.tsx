import { useEffect, useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryPhotos } from "../../../../data/gallery";
import "./PhotoCarousel.scss";

// Сами считаем число видимых слайдов — встроенный responsive у react-slick
// на узких экранах отрабатывает нестабильно (оставлял slidesToShow: 3 и рвал ширину).
const columnsFor = (w: number) => (w <= 768 ? 1 : w <= 1024 ? 2 : 3);

const useColumns = () => {
  const [cols, setCols] = useState(() =>
    typeof window === "undefined" ? 3 : columnsFor(window.innerWidth)
  );
  useEffect(() => {
    const onResize = () => setCols(columnsFor(window.innerWidth));
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return cols;
};

export const PhotoCarousel = () => {
  const cols = useColumns();
  const count = galleryPhotos.length;
  const show = Math.min(cols, count);

  const settings: Settings = {
    className: "photo-slider",
    dots: true,
    arrows: show > 1,
    infinite: count > show,
    centerMode: show > 1 && count > show,
    centerPadding: show === 1 ? "0px" : "40px",
    slidesToShow: show,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

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
                {photo.caption && (
                  <span className="carousel-caption">{photo.caption}</span>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
