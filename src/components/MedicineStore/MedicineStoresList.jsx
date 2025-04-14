import css from "./MedicineStoreList.module.css";
import MedicineStoreItem from "./MedicineStoreItem/MedicineStoreItem";
export default function MedicineStoresList({ items = [] }) {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item._id}>
            <MedicineStoreItem store={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
