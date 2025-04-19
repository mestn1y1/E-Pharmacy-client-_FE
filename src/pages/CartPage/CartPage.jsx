import { useEffect } from "react";
import OrderForm from "../../components/Form/OrderForm/OrderForm";
import { useCart } from "../../hooks/useCart";
import css from "./CartPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../redux/cart/operations";
export default function CartPage() {
  const { cartItems } = useCart();
  const dispatch = useDispatch();

  return (
    <section className={css.cartPage}>
      <h1 className={css.title}>Cart</h1>
      <OrderForm />
    </section>
  );
}
