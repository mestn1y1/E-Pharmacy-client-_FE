import { useState } from "react";
import css from "./CartItem.module.css";
import { Icons } from "../../Icons/Icons";
import { deleteCartItem, updateCartItem } from "../../../redux/cart/operations";
import { useDispatch } from "react-redux";

export default function CartItem({ product, quantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { photo, name, price, _id, category } = product;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    dispatch(updateCartItem({ productId: _id, quantity: newQuantity }));
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      dispatch(updateCartItem({ productId: _id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(deleteCartItem(_id));
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
