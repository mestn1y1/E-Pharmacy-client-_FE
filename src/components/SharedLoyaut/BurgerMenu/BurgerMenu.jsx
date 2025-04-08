import { forwardRef } from "react";
import { Icons } from "../../Icons/Icons";
import NavigationLinks from "../Header/NavigationLinks/NavigationLinks";
import css from "./BurgerMenu.module.css";
import AuthenticationLinks from "../Header/AuthenticationLinks/AuthenticationLinks";

// eslint-disable-next-line react/display-name
const BurgerMenu = forwardRef(({ isOpen, onClose }, ref) => {
  return (
    <>
      {isOpen && <div className={css.backdrop} onClick={onClose}></div>}
      <div
        ref={ref}
        className={`${css.burgerMenuWrap} ${isOpen ? css.open : ""}`}
      >
        <button className={css.closeBtn} onClick={onClose}>
          <Icons iconName="close" className={css.iconClose} />
        </button>
        <div className={css.linkWrap}>
          <NavigationLinks onLinkClick={onClose} />
          <AuthenticationLinks onLinkClick={onClose} />
        </div>
      </div>
    </>
  );
});

export default BurgerMenu;
