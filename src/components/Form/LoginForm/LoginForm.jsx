import css from "./LoginForm.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations.js";
import { Button } from "../../Button/Button.jsx";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .required("This field is required"),
});

export default function LoginForm({
  classNameForm,
  classNameInput,
  classNameBtn,
  classNameLink,
  onSwitch,
  onClose,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(logIn(values)).unwrap();
      const userName = response.data.user.name;

      navigate("/medicine");
      if (onClose) {
        onClose();
      }
      toast.success(`Welcome back, ${userName}!`);
    } catch (err) {
      toast.error(`Something went wrong: ${err.message || err}`);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(css.form, classNameForm)}>
        <div className={css.inputContainer}>
          <Field
            type="email"
            name="email"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>

        <div className={css.inputContainer}>
          <Field
            type="password"
            name="password"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>

        <Button
          text="Log in"
          type="submit"
          className={clsx(css.btn, classNameBtn)}
        />

        {onSwitch ? (
          <span
            className={clsx(css.link, classNameLink)}
            onClick={onSwitch}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSwitch()}
          >
            Already have an account?
          </span>
        ) : (
          <Link to="/register" className={clsx(css.link, classNameLink)}>
            Already have an account?
          </Link>
        )}
      </Form>
    </Formik>
  );
}
