import css from "./FooterBottom.module.css";

export default function FooterBottom() {
  return (
    <p className={css.text}>
      © E-Pharmacy {new Date().getFullYear()}. All Rights Reserved
    </p>
  );
}
