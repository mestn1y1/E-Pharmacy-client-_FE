import { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { addToCart, updateCartItem } from "../../../redux/cart/operations";
import { useCart } from "../../../hooks/useCart";
import { Button } from "../../Button/Button";
import { Icons } from "../../Icons/Icons";
import css from "./ProductOverview.module.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function ProductOverview() {
  const { product } = useProducts();
  const { photo, name, price, suppliers, stock, category, _id } = product;
  const { cartItems } = useCart();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.productId === _id
    );

    if (existingItem) {
      dispatch(
        updateCartItem({
          productId: _id,
          quantity: existingItem.quantity + count,
        })
      );
      toast.info(`Item quantity updated to ${existingItem.quantity + count}`);
    } else {
      dispatch(addToCart({ productId: _id, quantity: count }));
      toast.success(`${count} items added to cart!`);
    }
  };

  return (
    <div className={css.productWrap}>
      <img src={photo} alt={name} className={css.img} />
      <div className={css.infoWrap}>
        <h2 className={css.title}>
          {name}
          <span>₴{price}</span>
        </h2>
        <p className={css.text}>Category: {category}</p>
        <p className={css.text}>Suppliers: {suppliers}</p>
        <p className={css.text}>Stock: {stock}</p>
        <div className={css.btnBlock}>
          <div className={css.countWrap}>
            <button onClick={handleDecrease}>
              <Icons iconName="minus" className={css.icon} />
            </button>
            <p>{count}</p>
            <button onClick={handleIncrease}>
              <Icons iconName="plus" className={css.icon} />
            </button>
          </div>
          <Button
            text="Add to cart"
            className={css.btn}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}
