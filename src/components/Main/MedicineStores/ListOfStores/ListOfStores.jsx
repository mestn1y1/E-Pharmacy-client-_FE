import ItemOfStores from "../ItemOfStores/ItemOfStores";
import css from "./ListOfStores.module.css";

export default function ListOfStores({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item._id}>
          <ItemOfStores item={item} />
        </li>
      ))}
    </ul>
  );
}
