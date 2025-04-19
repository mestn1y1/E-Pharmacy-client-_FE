import { Icons } from "../../Icons/Icons";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Logo/Logo";
import css from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import AuthenticationLinks from "./AuthenticationLinks/AuthenticationLinks";
import { useLocation } from "react-router";
import UserInfo from "./UserInfo/UserInfo";
import { useAuth } from "../../../hooks/useAuth";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const { isLoggedIn } = useAuth();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={css.header}>
      <Logo />
      {isMobile && (
        <div className={css.wrap}>
          {isLoggedIn && <UserInfo />}
          <button className={css.burgerBtn} onClick={toggleMenu}>
            <Icons
              iconName={isHome ? "burger" : "burger-green"}
              className={css.burgerIcon}
            />
          </button>
        </div>
      )}
      {isMobile ? (
        <BurgerMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          ref={menuRef}
        />
      ) : (
        <div className={css.descNavWrap}>
          <NavigationLinks />
          {isLoggedIn && <UserInfo />}
          <AuthenticationLinks />
        </div>
      )}
    </header>
  );
}
