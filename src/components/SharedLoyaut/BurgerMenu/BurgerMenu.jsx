import { Icons } from "../../Icons/Icons";
import css from "./BurgerMenu.module.css";
export default function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={`${css.burgerMenuWrap} ${isOpen ? css.open : ""}`}>
      <button className={css.closeBtn} onClick={onClose}>
        <Icons iconName="close" className={css.iconClose} />
      </button>
    </div>
  );
}
