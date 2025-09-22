import "./Footer.scss";
import puppy from "./assets/puppy.svg";
import phone from "./assets/phone.svg";
import marker from "./assets/marker.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div id="footer-id">
      <div className="info">
        <div className="questions">
          <p className="title">For questions and suggestions</p>

          <div className="row">
            <div>
              <img src={phone} alt="phone" />
            </div>

            <a target="_blank" className="phone" href="tel:+77472122619">
              +77472122619
            </a>
          </div>

          <div className="row">
            <svg
              width="40"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <InstagramIcon fontSize="large" />
            </svg>

            <a
              target="_blank"
              href="https://www.instagram.com/happy_pet_almaty"
            >
              happy_pet_almaty
            </a>
          </div>
        </div>

        <div className="location">
          <p className="title">We are waiting for your visit</p>

          <div className="row">
            <div>
              <img src={marker} alt="marker" />
            </div>

            <div>Almaty, Kazakhstan</div>
          </div>
        </div>
      </div>

      <div className="puppy">
        <img className="puppy-img" src={puppy} alt="puppy" />
      </div>
    </div>
  );
};
