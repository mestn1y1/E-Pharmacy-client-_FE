import { Link } from "react-router";
import css from "./PromoBaners.module.css";
export default function PromoBaners() {
  return (
    <ul className={css.banersList}>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>1</p>
          <h3 className={css.bunerTitle}>Huge Sale</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>70%</p>
          <button className={css.bunerBtn}>Shop now</button>
        </div>
      </li>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>2</p>
          <h3 className={css.bunerTitle}>Secure delivery</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>100%</p>
          <button className={css.bunerBtn}>Read more</button>
        </div>
      </li>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>3</p>
          <h3 className={css.bunerTitle}>Off</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>35%</p>
          <button className={css.bunerBtn}>Shop now</button>
        </div>
      </li>
    </ul>
  );
}
