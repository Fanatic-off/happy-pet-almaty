import { Link } from "@mui/material";
import "./Donations.scss";

export const Donations = () => {
  return (
    <section id="donate-section-id">
      <h1>Ваша помощь — их шанс на жизнь ❤️</h1>

      <p>
        Каждое пожертвование идёт на корм, лечение и уход. Даже 500 тенге могут
        спасти чью-то жизнь.
      </p>

      <Link
        target="_blank"
        href="https://pay.kaspi.kz/pay/hn36faf2"
        className="btn-primary"
      >
        Помочь прямо сейчас
      </Link>
    </section>
  );
};
