import OrderForm from "../../components/Form/OrderForm/OrderForm";
import { useCart } from "../../hooks/useCart";
import CartList from "../../components/Cart/CartList/CartList";
import css from "./CartPage.module.css";
import { Link } from "react-router";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <section className={css.cartPage}>
      <h1 className={css.title}>Cart</h1>
      <div className={css.contentWrap}>
        <OrderForm />
        {cartItems.length === 0 ? (
          <p className={css.text}>
            Your cart is currently empty. Please visit the{" "}
            <Link className={css.link} to="/medicine">
              shop
            </Link>{" "}
            to add items.
          </p>
        ) : (
          <CartList cartItems={cartItems} />
        )}
      </div>
    </section>
  );
}
