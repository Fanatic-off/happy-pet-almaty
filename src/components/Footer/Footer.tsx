import { Link } from "react-router-dom";
import { ROUTES } from "../../store/routes";
import { SITE } from "../../config/site";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>🐾 {SITE.name}</h3>
          <p>
            Девять лет мы даём бездомным собакам второй шанс. Вместе — мы сильнее.
          </p>
          <div className="footer-socials">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📸
            </a>
            <a href={SITE.phoneHref} aria-label="Позвонить">
              📞
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Написать">
              💬
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Приют</h4>
          <ul>
            <li><Link to={ROUTES.DOGS}>Найти питомца</Link></li>
            <li><Link to={ROUTES.STORIES}>Истории</Link></li>
            <li><Link to={ROUTES.HOME}>О нас</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Помочь</h4>
          <ul>
            <li><Link to={ROUTES.DONATE}>Пожертвовать</Link></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Стать волонтёром</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Нужды приюта</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Контакты</h4>
          <ul>
            <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                @{SITE.instagramHandle}
              </a>
            </li>
            <li><span>{SITE.city}</span></li>
            <li><span>{SITE.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name} · Приют для животных</span>
        <span className="footer-love">Сделан с ❤️ для тех, у кого нет голоса</span>
      </div>
    </footer>
  );
};
