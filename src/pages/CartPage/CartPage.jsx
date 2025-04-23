import OrderForm from "../../components/Form/OrderForm/OrderForm";
import { useCart } from "../../hooks/useCart";
import CartList from "../../components/Cart/CartList/CartList";
import css from "./CartPage.module.css";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <section className={css.cartPage}>
      <h1 className={css.title}>Cart</h1>
      <div className={css.contentWrap}>
        <OrderForm />
        <CartList cartItems={cartItems} />
      </div>
    </section>
  );
}
