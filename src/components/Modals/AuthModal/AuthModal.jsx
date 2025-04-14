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
      <button className={css.btnClose}>
        <Icons iconName="close" className={css.iconClose} />
      </button>
      <h2 className={css.title}>
        {isLoginForm ? "Log in to your account" : "Sign Up"}
      </h2>
      {isLoginForm ? (
        <LoginForm onSwitch={toggleForm} onClose={onClose} />
      ) : (
        <RegisterForm onSwitch={toggleForm} onClose={onClose} />
      )}
    </div>
  );
}
