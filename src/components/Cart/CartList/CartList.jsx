import css from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../../redux/products/operations";
import { useProducts } from "../../../hooks/useProducts";

export default function CartList({ cartItems }) {
  const dispatch = useDispatch();
  const { productDetailsById } = useProducts();

  useEffect(() => {
    if (cartItems.length === 0) return;

    const fetchAllProducts = async () => {
      await Promise.all(
        cartItems.map(({ productId }) => dispatch(fetchProductById(productId)))
      );
    };

    fetchAllProducts();
  }, [cartItems, dispatch]);

  return (
    <ul className={css.list}>
      {cartItems.map(({ productId, quantity }) => {
        const product = productDetailsById[productId];

        if (!product) return null;
        return (
          <li key={productId} className={css.item}>
            <CartItem product={product} quantity={quantity} />
          </li>
        );
      })}
    </ul>
  );
}
