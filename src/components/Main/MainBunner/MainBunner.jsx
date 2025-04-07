import css from "./MainBunner.module.css";
export default function MainBunner() {
  return (
    <div className={css.bunner}>
      <h1 className={css.title}>Your medication delivered</h1>
      <p className={css.description}>
        Say goodbye to all your healthcare worries with us
      </p>
    </div>
  );
}
