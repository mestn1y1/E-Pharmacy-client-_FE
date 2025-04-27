import { useState } from "react";
import css from "./CartItem.module.css";
import { Icons } from "../../Icons/Icons";
import { deleteCartItem, updateCartItem } from "../../../redux/cart/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function CartItem({ product, quantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { photo, name, price, _id, category } = product;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    dispatch(updateCartItem({ productId: _id, quantity: newQuantity }));
    toast.info(`Quantity increased to ${newQuantity}`);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      dispatch(updateCartItem({ productId: _id, quantity: newQuantity }));
      toast.info(`Quantity decreased to ${newQuantity}`);
    } else {
      toast.warn("Quantity cannot be less than 1");
    }
  };

  const handleRemove = () => {
    dispatch(deleteCartItem(_id));
    toast.success("Item removed from cart");
  };

  return (
    <>
      <div className={css.imgWrap}>
        <img src={photo} alt={name} className={css.img} />
      </div>
      <div className={css.infoBlock}>
        <div className={css.textContainer}>
          <div className={css.textWrap}>
            <h1 className={css.title}>{name}</h1>
            <p className={css.category}>{category}</p>
          </div>
          <p className={css.price}>₴{price}</p>
        </div>
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
