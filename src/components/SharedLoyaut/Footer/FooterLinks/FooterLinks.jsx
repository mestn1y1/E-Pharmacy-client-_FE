import css from "./FooterLinks.module.css";
export default function FooterLinks() {
  return (
    <ul className={css.footerLinks}>
      <li className={css.link}>
        <a
          href="https://www.termsfeed.com/live/c7932450-cd4e-45ec-8f32-276829380df7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li className={css.link}>
        <a
          href="https://www.termsfeed.com/live/18e3508a-4358-4a31-a4f6-96b3d1e203cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>
      </li>
    </ul>
  );
}
