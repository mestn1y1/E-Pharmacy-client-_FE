import { NavLink, useLocation, useNavigate } from "react-router";
import css from "./AuthenticationLinks.module.css";
import { useAuth } from "../../../../hooks/useAuth";
import { logOut } from "../../../../redux/auth/operations";

import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import UserInfo from "../UserInfo/UserInfo";
import { toast } from "react-toastify";
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
    if (onLinkClick) {
      onLinkClick();
    }
    toast.success("You have successfully logged out!");
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={css.infoWrap}>
          {!isMobile && <UserInfo />}
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
        </div>
      ) : (
        <ul className={css.authList}>
          {authLinks.map(({ to, label }) => (
            <li
              className={
                isMobile
                  ? css.listItem
                  : isHome
                  ? css.listItem
                  : css.listItemGreen
              }
              key={to}
            >
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
