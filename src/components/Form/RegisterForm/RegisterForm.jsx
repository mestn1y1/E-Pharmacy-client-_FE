import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
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

export default function RegisterForm() {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values)).unwrap();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <div>
          <Field
            type="text"
            name="name"
            placeholder="User name"
            className={css.input}
          />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email address"
            className={css.input}
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field
            type="text"
            name="phone"
            placeholder="Phone number"
            className={css.input}
          />
          <ErrorMessage name="phone" component="div" />
        </div>
        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.input}
          />
          <ErrorMessage name="password" component="div" />
        </div>
        <div className={css.btnWrap}>
          <Button text="Register" className={css.btn} type="submit" />
          <Link to="/login" className={css.link}>
            Already have an account?
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
