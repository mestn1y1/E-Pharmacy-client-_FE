// import css from "./LoginForm.module.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { logIn } from "../../../redux/auth/operations.js";
// import { Button } from "../../Button/Button.jsx";
// import { Link } from "react-router";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
//   password: Yup.string()
//     .min(8, "Пароль має містити щонайменше 8 символів")
//     .required("Обов'язкове поле"),
// });

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector((state) => state.auth);

//   const onSubmit = (values) => {
//     dispatch(logIn(values)).unwrap();
//   };

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <Form className={css.form}>
//         <div>
//           <Field type="email" name="email" className={css.input} />
//           <ErrorMessage name="email" component="div" />
//         </div>

//         <div>
//           <Field type="password" name="password" className={css.input} />
//           <ErrorMessage name="password" component="div" />
//         </div>

//         <Button text="Log in" type="submit" className={css.btn} />
//         <Link to="/register" className={css.link}>
//           Don&apos;t have an account?
//         </Link>
//       </Form>
//     </Formik>
//   );
// }
import css from "./LoginForm.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations.js";
import { Button } from "../../Button/Button.jsx";
import { Link } from "react-router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .required("Обов'язкове поле"),
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

  const onSubmit = (values) => {
    dispatch(logIn(values)).unwrap();
    onClose();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(css.form, classNameForm)}>
        <div>
          <Field
            type="email"
            name="email"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="password" component="div" />
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
