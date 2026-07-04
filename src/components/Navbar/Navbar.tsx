import { NavLink } from "react-router-dom";
import { ROUTES } from "../../store/routes";
import { SITE } from "../../config/site";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={ROUTES.HOME} className="nav-logo">
        <div className="nav-paw">🐾</div>
        <span className="nav-title">{SITE.name}</span>
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to={ROUTES.HOME} end>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.DOGS}>Найти питомца</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.STORIES}>Истории</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.DONATE} className="nav-donate-btn">
            ❤️ Помочь
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
