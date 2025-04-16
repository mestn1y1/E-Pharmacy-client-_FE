import css from "./ProductItem.module.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router";
export default function ProductItem({ item }) {
  const { photo, price, name, category } = item;
  return (
    <>
      <img src={photo} alt={name} className={css.img} />
      <div className={css.infoWrap}>
        <h2 className={css.title}>
          {name}
          <span>₴{price}</span>
        </h2>
        <p className={css.text}>{category}</p>
        <div className={css.btnBlock}>
          <Button text="Add to cart" className={css.btn} />
          <Link className={css.link}>Details</Link>
        </div>
      </div>
    </>
  );
}
