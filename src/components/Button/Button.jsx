import css from "./Button.module.css";
import classNames from "classnames";

export const Button = ({ text, onClick, className, type, children }) => {
  return (
    <button
      className={classNames(css.btn, className)}
      onClick={onClick}
      type={type}
    >
      {text}
      {children}
    </button>
  );
};
