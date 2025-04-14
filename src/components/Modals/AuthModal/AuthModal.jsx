import { useState } from "react";
import css from "./AuthModal.module.css";
import { Icons } from "../../Icons/Icons";
import LoginForm from "../../Form/LoginForm/LoginForm";
import RegisterForm from "../../Form/RegisterForm/RegisterForm";
export default function AuthModal({ onClose }) {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => setIsLoginForm((prev) => !prev);
  return (
    <div className={css.modal}>
      <button className={css.btnClose} onClick={onClose}>
        <Icons iconName="close" className={css.iconClose} />
      </button>
      <h2 className={css.title}>
        {isLoginForm ? "Log in to your account" : "Sign Up"}
      </h2>
      <p className={css.dexcription}>
        {isLoginForm
          ? "Please login to your account before continuing."
          : "Before proceeding, please register on our site."}
      </p>
      {isLoginForm ? (
        <LoginForm
          classNameForm={css.form}
          classNameInput={css.input}
          classNameBtn={css.button}
          classNameLink={css.link}
          classNameBtnWrap={css.btnWrap}
          onSwitch={toggleForm}
          onClose={onClose}
        />
      ) : (
        <RegisterForm
          classNameForm={css.form}
          classNameInput={css.input}
          classNameBtn={css.button}
          classNameLink={css.link}
          classNameBtnWrap={css.btnWrap}
          onSwitch={toggleForm}
          onClose={onClose}
        />
      )}
    </div>
  );
}
