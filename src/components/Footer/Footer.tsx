import "./Footer.scss";
import puppy from "./assets/puppy.svg";
import phones from "./assets/phone.svg";
import marker from "./assets/marker.svg";

export const Footer = () => {
  return (
    <div id="footer-id">
      <div className="questions">questions</div>
      <div className="location">questions</div>
      <div className="puppy">
        <img className="puppy-img" src={puppy} alt="puppy" />
      </div>
    </div>
  );
};
