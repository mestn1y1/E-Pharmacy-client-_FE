import { Link } from "react-router";
import { Icons } from "../../../Icons/Icons";
import css from "./UserInfo.module.css";
import { useCart } from "../../../../hooks/useCart";
import { useAuth } from "../../../../hooks/useAuth";

export default function UserInfo() {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const firstLetter = user.name.charAt(0).toUpperCase();
  const countItem = cartItems.length;

  return (
    <>
      <Link to="/cart" className={css.link}>
        <Icons iconName="art" className={css.icon} />
        <p className={css.count}>{countItem}</p>
      </Link>
      <p className={css.userName}>{firstLetter}</p>
    </>
  );
}
