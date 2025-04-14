// import { Link, useLocation } from "react-router";
// import css from "./Logo.module.css";

// export default function Logo({ classNameText, logoSrc }) {
//   const location = useLocation();
//   const isHome = location.pathname === "/home" || location.pathname === "/";

//   const finalLogoSrc =
//     logoSrc || (isHome ? "/images/logo-white.png" : "/images/logo-green.png");

//   return (
//     <Link to="/home" className={css.logoLink}>
//       <img src={finalLogoSrc} alt="logo" className={css.logoImg} />
//       <p className={`${css.logoText} ${classNameText}`}>E-Pharmacy</p>
//     </Link>
//   );
// }
import { Link, useLocation } from "react-router";
import css from "./Logo.module.css";

export default function Logo({ classNameText, logoSrc }) {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  const finalLogoSrc =
    logoSrc || (isHome ? "/images/logo-white.png" : "/images/logo-green.png");

  const finalTextClass = isHome ? css.whiteText : css.blackText;

  return (
    <Link to="/home" className={css.logoLink}>
      <img src={finalLogoSrc} alt="logo" className={css.logoImg} />
      <p className={`${css.logoText} ${finalTextClass} ${classNameText}`}>
        E-Pharmacy
      </p>
    </Link>
  );
}
