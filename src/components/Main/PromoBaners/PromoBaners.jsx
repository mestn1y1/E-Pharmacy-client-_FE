import { useNavigate } from "react-router-dom";
import css from "./PromoBaners.module.css";
export default function PromoBaners({ isLoggedIn, onShowModal }) {
  const navigate = useNavigate();

  const handleClick = (e, discount) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate(`/medicine?discount=${discount}`);
    } else {
      onShowModal();
    }
  };
  return (
    <ul className={css.banersList}>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>1</p>
          <h3 className={css.bunerTitle}>Huge Sale</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>70%</p>
          <button onClick={(e) => handleClick(e, 70)} className={css.bunerBtn}>
            Shop now
          </button>
        </div>
      </li>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>2</p>
          <h3 className={css.bunerTitle}>Secure delivery</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>100%</p>
          <a href="#features" className={css.bunerBtn}>
            <button className={css.bunerBtn}>Read more</button>
          </a>
        </div>
      </li>
      <li className={css.banersItem}>
        <div className={css.flexWrap}>
          <p className={css.bunerNumber}>3</p>
          <h3 className={css.bunerTitle}>Off</h3>
        </div>
        <div className={css.flexWrapSecond}>
          <p className={css.bunerPercent}>35%</p>
          <button onClick={(e) => handleClick(e, 35)} className={css.bunerBtn}>
            Shop now
          </button>
        </div>
      </li>
    </ul>
  );
}
