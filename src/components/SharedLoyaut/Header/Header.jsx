import { Icons } from "../../Icons/Icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Logo/Logo";
import css from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className={css.header}>
      <Logo />
      {isMobile && (
        <button className={css.burgerBtn} onClick={toggleMenu}>
          <Icons iconName="burger" className={css.burgerIcon} />
        </button>
      )}
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
