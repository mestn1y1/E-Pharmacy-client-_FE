import { Link } from "react-router";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={css.notFound}>
      <div className={css.title}>
        <span>4</span>
        <img src="/images/tabl-mob-x2.png" alt="tablet" className={css.img} />
        <span>4</span>
      </div>
      <p className={css.description}>Sorry but this page not found...</p>

      <Link to="/" className={css.btn}>
        Go home page
      </Link>
    </section>
  );
}
