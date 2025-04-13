import Logo from "../../components/Logo/Logo";
import css from "./LoginPage.module.css";
import LoginForm from "../../components/Form/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <section className={css.loginPage}>
      <Logo classNameText={css.logoText} />
      <div className={css.contentWrap}>
        <div className={css.titleWrap}>
          <h1 className={css.title}>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare</span> worries with us
          </h1>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/tabl-desc.png 1x, /images/tabl-desc-x2.png 2x"
            />
            <img
              src="/images/tabl-mob.png"
              srcSet="/images/tabl-mob.png 1x, /images/tabl-mob-x2.png 2x"
              alt="Pharmacy promotion"
              className={css.image}
            />
          </picture>
        </div>
        <LoginForm />
      </div>
      <div className={css.decoration}>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
      </div>
    </section>
  );
}
