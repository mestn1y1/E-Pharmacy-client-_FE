import css from "./ItemOfStores.module.css";
import { Icons } from "../../../Icons/Icons";
export default function ItemOfStores({ item }) {
  const { address, city, name, phone, rating, status } = item;
  return (
    <>
      <div className={css.decoration}>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
      </div>
      <div className={css.headerItem}>
        <h3 className={css.itemName}>{name}</h3>
        <div className={css.infoBlock}>
          <p className={css.ratingBlock}>
            <Icons iconName="star" className={css.star} />
            {rating}
          </p>
          <p className={status === "Open" ? css.statusOpen : css.statusClosed}>
            {status}
          </p>
        </div>
      </div>
      <div className={css.addressBlock}>
        <Icons iconName="map" className={css.icon} />
        <div>
          <p className={css.text}>{address}</p>
          <p className={css.text}>{city}</p>
        </div>
      </div>
      <p className={css.textNumber}>
        <Icons iconName="phone" className={css.icon} /> {phone}
      </p>
    </>
  );
}
