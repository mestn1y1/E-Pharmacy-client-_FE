import Logo from "../../Logo/Logo";
import { NavLink } from "react-router";
import css from "./Footer.module.css";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";
import FooterBottom from "./FooterBottom/FooterBottom";
export default function Footer() {
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/medicine-store", label: "Medicine store" },
    { to: "/medicine", label: "Medicine" },
  ];
  return (
    <footer className={css.footer}>
      <div className={css.infoWrap}>
        <div>
          <Logo logoSrc="/images/logo-white.png" classNameText={css.logoText} />
          <p className={css.text}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>

        <div className={css.navigationAndLinksWrap}>
          <ul className={css.navigationList}>
            {navLinks.map(({ to, label }) => (
              <li className={css.listItem} key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? `${css.link} ${css.activeLink}` : css.link
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={css.linksWrap}>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <hr className={css.horizontLine} />
      <div className={css.footerBottomWrap}>
        <FooterBottom />
      </div>
    </footer>
  );
}
