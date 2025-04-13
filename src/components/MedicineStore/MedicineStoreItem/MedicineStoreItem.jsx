import { Icons } from "../../Icons/Icons";
import css from "./MedicineStoreItem.module.css";

export default function MedicineStoreItem({ store }) {
  const { address, city, name, phone, rating, status } = store;
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
