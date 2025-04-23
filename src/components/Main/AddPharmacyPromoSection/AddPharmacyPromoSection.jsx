import { Link } from "react-router";
import css from "./AddPharmacyPromoSection.module.css";

export default function AddPharmacyPromoSection() {
  return (
    <section className={css.container}>
      <div className={css.infoWrap}>
        <h2 className={css.title}>Add the medicines you need online now</h2>
        <p className={css.description}>
          Enjoy the convenience of having your prescriptions filled from home by
          connecting with your community pharmacy through our online platform.
        </p>
        <Link to="/medicine-store" className={css.btn}>
          Buy medicine
        </Link>
      </div>

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/main-desc.png 1x, /images/main-desc-x2.png 2x"
        />
        <img
          src="/images/main-mob.png"
          srcSet="/images/main-mob.png 1x, /images/main-mob-x2.png 2x"
          alt="Pharmacy promotion"
          className={css.image}
        />
      </picture>
    </section>
  );
}
