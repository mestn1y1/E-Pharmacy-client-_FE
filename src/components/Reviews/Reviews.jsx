import { useProducts } from "../../hooks/useProducts";
import { Icons } from "../Icons/Icons";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { product } = useProducts();
  const { reviews = [] } = product;

  return (
    <ul className={css.list}>
      {reviews.map(({ name, rating, review, time }, idx) => (
        <li key={idx} className={css.card}>
          <div className={css.info}>
            <img
              className={css.avatar}
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(
                name
              )}`}
              alt={`${name}'s avatar`}
            />
            <div className={css.nameWrap}>
              <h4 className={css.name}>{name}</h4>
              <span className={css.time}>{time}</span>
            </div>
            <span className={css.rating}>
              <Icons iconName="star" className={css.icon} /> {rating}
            </span>
          </div>
          <p className={css.text}>{review}</p>
        </li>
      ))}
    </ul>
  );
}
