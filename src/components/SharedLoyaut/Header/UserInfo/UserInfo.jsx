import { Link, useLocation } from "react-router";
import { Icons } from "../../../Icons/Icons";
import css from "./UserInfo.module.css";
import { useCart } from "../../../../hooks/useCart";
import { useAuth } from "../../../../hooks/useAuth";
export default function UserInfo() {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const { cartItems } = useCart();
  const { user } = useAuth();
  const firstLetter = user.name.charAt(0).toUpperCase();
  const countItem = cartItems.length;

  return (
    <div className={css.userInfo}>
      <Link to="/cart" className={css.link}>
        <Icons iconName="art" className={css.icon} />
        <p className={css.count}>{countItem}</p>
      </Link>
      <p className={!isHome ? css.userName : css.userNameHome}>{firstLetter}</p>
    </div>
  );
}
