import { Icons } from "../../Icons/Icons";
import css from "./Features.module.css";

const items = [
  "Take user orders form online",
  "Create your shop profile",
  "Manage your store",
  "Get more orders",
  "Storage shed",
];

export default function Features() {
  return (
    <div className={css.marqueeWrapper}>
      <ul className={css.list}>
        {items.map((text, index) => (
          <li className={css.listItem} key={index}>
            <Icons iconName="lightning-01" className={css.icon} />
            <p className={css.text}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
