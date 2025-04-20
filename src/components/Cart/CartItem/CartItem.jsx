import { useState } from "react";
import css from "./CartItem.module.css";
import { Icons } from "../../Icons/Icons";

export default function CartItem({ product, quantity, onRemove }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { photo, name, price, _id, category } = product;

  const handleIncrease = () => {
    setItemQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(_id);
    }
  };

  return (
    <>
      <div className={css.imgWrap}>
        <img src={photo} alt={name} className={css.img} />
      </div>
      <div className={css.infoBlock}>
        <h1 className={css.title}>{name}</h1>
        <p className={css.category}>{category}</p>
        <p className={css.price}>₴{price}</p>
        <div className={css.btnBlock}>
          <div className={css.countWrap}>
            <button onClick={handleDecrease}>
              <Icons iconName="minus" className={css.icon} />
            </button>
            <p>{itemQuantity}</p>
            <button onClick={handleIncrease}>
              <Icons iconName="plus" className={css.icon} />
            </button>
          </div>
          <button className={css.btn} onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
