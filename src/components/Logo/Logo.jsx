import { Link, useLocation } from "react-router";
import css from "./Logo.module.css";

export default function Logo({ classNameText }) {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const logoSrc = isHome ? "/images/logo-white.png" : "/images/logo-green.png";

  return (
    <Link to="/home" className={css.logoLink}>
      <img src={logoSrc} alt="logo" className={css.logoImg} />
      <p className={`${css.logoText} ${classNameText}`}>E-Pharmacy</p>
    </Link>
  );
}
