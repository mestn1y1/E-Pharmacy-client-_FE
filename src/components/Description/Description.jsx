import { useProducts } from "../../hooks/useProducts";
import css from "./Description.module.css";
export default function Description() {
  const { product } = useProducts();
  const { discription } = product;
  const descriptionItems = [
    {
      label: "Anti Cancer Properties",
      value: discription.AntiCancerProperties,
    },
    { label: "Anti Diabetic Effects", value: discription.AntiDiabeticEffects },
    { label: "Digestive Aid", value: discription.DigestiveAid },
    { label: "Immune Support", value: discription.ImmuneSupport },
    { label: "Medicinal Uses", value: discription.MedicinalUses },
  ];

  return (
    <div className={css.container}>
      <p className={css.text}>{discription.about}</p>
      <ul className={css.list}>
        {descriptionItems.map(({ label, value }) => (
          <li key={label} className={css.item}>
            <p className={css.text}>
              {label}: <span>{value}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
