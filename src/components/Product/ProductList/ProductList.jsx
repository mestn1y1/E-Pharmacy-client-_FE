import css from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item._id}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}
