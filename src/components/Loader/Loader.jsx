import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.backdrop}>
      <img src="/images/caps-mob-x2.png" alt="Loading" className={css.loader} />
    </div>
  );
}
