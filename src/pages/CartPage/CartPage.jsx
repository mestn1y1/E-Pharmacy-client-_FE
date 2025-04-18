import { useCart } from "../../hooks/useCart";
import css from "./CartPage.module.css";
export default function CartPage() {
  const { cartItems } = useCart();

  console.log(cartItems);

  return <div className={css.container}>CartPage Component</div>;
}
