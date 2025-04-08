import { NavLink } from "react-router-dom";
import css from "./NavigationLinks.module.css";

export default function NavigationLinks({ onLinkClick }) {
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/medicine-store", label: "Medicine store" },
    { to: "/medicine", label: "Medicine" },
  ];

  return (
    <nav className={css.nav}>
      <ul className={css.navLinksList}>
        {navLinks.map(({ to, label }) => (
          <li className={css.listItem} key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.activeLink}` : css.link
              }
              onClick={onLinkClick}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
