import { NavLink } from "react-router";
import css from "./AuthenticationLinks.module.css";
import { useAuth } from "../../../../hooks/useAuth";
import { logOut } from "../../../../redux/auth/operations";
import { useDispatch } from "react-redux";
export default function AuthenticationLinks({ onLinkClick }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const authLinks = [
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isLoggedIn ? (
        <button className={css.logOutBtn} onClick={handleLogOut}>
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
