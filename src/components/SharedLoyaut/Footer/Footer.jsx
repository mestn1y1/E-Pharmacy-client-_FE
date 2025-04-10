import Logo from "../../Logo/Logo";
import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <Logo />
      <p className={css.text}>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </p>
    </footer>
  );
}
