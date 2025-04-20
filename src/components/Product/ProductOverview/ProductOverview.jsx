import { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { Button } from "../../Button/Button";
import { Icons } from "../../Icons/Icons";
import css from "./ProductOverview.module.css";

export default function ProductOverview() {
  const { product } = useProducts();
  const { photo, name, price, suppliers, stock, category } = product;

  const [count, setCount] = useState(0);
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

  const addedToCart = () => {
    if (!count) {
      console.log("first add quantity");
      return;
    }
    console.log("added to cart");
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
            onClick={addedToCart}
          />
        </div>
      </div>
    </div>
  );
}
