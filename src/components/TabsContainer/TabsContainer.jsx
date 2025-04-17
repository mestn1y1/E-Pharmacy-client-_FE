import css from "./TabsContainer.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function TabsContainer() {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink
          to="description"
          className={({ isActive }) => (isActive ? css.activeTab : css.tab)}
        >
          Description
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? css.activeTab : css.tab)}
        >
          Reviews
        </NavLink>
      </nav>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
}
