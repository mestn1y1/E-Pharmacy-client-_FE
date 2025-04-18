// import css from "./RegisterForm.module.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { register } from "../../../redux/auth/operations.js";
// import { Button } from "../../Button/Button.jsx";
// import { Link } from "react-router";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name cannot exceed 50 characters")
//     .required("This field is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("This field is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("This field is required"),
// });

// export default function RegisterForm() {
//   const dispatch = useDispatch();

//   const onSubmit = (values) => {
//     dispatch(register(values)).unwrap();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", email: "", password: "", phone: "" }}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <Form className={css.form}>
//         <div>
//           <Field
//             type="text"
//             name="name"
//             placeholder="User name"
//             className={css.input}
//           />
//           <ErrorMessage name="name" component="div" />
//         </div>

//         <div>
//           <Field
//             type="email"
//             name="email"
//             placeholder="Email address"
//             className={css.input}
//           />
//           <ErrorMessage name="email" component="div" />
//         </div>

//         <div>
//           <Field
//             type="text"
//             name="phone"
//             placeholder="Phone number"
//             className={css.input}
//           />
//           <ErrorMessage name="phone" component="div" />
//         </div>
//         <div>
//           <Field
//             type="password"
//             name="password"
//             placeholder="Password"
//             className={css.input}
//           />
//           <ErrorMessage name="password" component="div" />
//         </div>
//         <div className={css.btnWrap}>
//           <Button text="Register" className={css.btn} type="submit" />
//           <Link to="/login" className={css.link}>
//             Already have an account?
//           </Link>
//         </div>
//       </Form>
//     </Formik>
//   );
// }
import css from "./RegisterForm.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations.js";
import { Button } from "../../Button/Button.jsx";
import { Link } from "react-router";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("This field is required"),
});

export default function RegisterForm({
  classNameForm,
  classNameInput,
  classNameBtn,
  classNameLink,
  classNameBtnWrap,
  onSwitch,
  onClose,
}) {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values)).unwrap();
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(css.form, classNameForm)}>
        <div>
          <Field
            type="text"
            name="name"
            placeholder="User name"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email address"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field
            type="text"
            name="phone"
            placeholder="Phone number"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="phone" component="div" />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={clsx(css.input, classNameInput)}
          />
          <ErrorMessage name="password" component="div" />
        </div>

        <div className={clsx(css.btnWrap, classNameBtnWrap)}>
          <Button
            text="Register"
            className={clsx(css.btn, classNameBtn)}
            type="submit"
          />
          {onSwitch ? (
            <span
              className={clsx(css.link, classNameLink)}
              onClick={onSwitch}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSwitch()}
            >
              Don&apos;t have an account?
            </span>
          ) : (
            <Link to="/login" className={clsx(css.link, classNameLink)}>
              Don&apos;t have an account?
            </Link>
          )}
        </div>
      </Form>
    </Formik>
  );
}
