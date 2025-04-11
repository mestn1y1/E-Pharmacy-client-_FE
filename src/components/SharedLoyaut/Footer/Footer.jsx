import Logo from "../../Logo/Logo";
import NavigationLinks from "../Header/NavigationLinks/NavigationLinks";
import { NavLink } from "react-router";
import css from "./Footer.module.css";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterLinks from "./FooterLinks/FooterLinks";
export default function Footer() {
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/medicine-store", label: "Medicine store" },
    { to: "/medicine", label: "Medicine" },
  ];
  return (
    <footer className={css.footer}>
      <Logo />
      <p className={css.text}>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </p>
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
      <SocialMediaIcons />
      <hr className={css.horizontLine} />
      <div className={css.footerBottomWrap}>
        <FooterBottom />
        <FooterLinks />
      </div>
    </footer>
  );
}
