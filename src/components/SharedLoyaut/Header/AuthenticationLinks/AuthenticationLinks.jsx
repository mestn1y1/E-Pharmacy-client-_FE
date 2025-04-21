import { NavLink, useLocation, useNavigate } from "react-router";
import css from "./AuthenticationLinks.module.css";
import { useAuth } from "../../../../hooks/useAuth";
import { logOut } from "../../../../redux/auth/operations";

import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
export default function AuthenticationLinks({ onLinkClick }) {
  const { isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const authLinks = [
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/home");
    onLinkClick();
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          className={
            isMobile
              ? css.logOutBtnHome
              : isHome
              ? css.logOutBtnHome
              : css.logOutBtn
          }
          onClick={handleLogOut}
        >
          Log out
        </button>
      ) : (
        <ul className={css.authList}>
          {authLinks.map(({ to, label }) => (
            <li className={css.listItem} key={to}>
              <NavLink to={to} onClick={onLinkClick}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
