import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/auth/operations.js";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .required("Обов'язкове поле"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        alert("Login Success");
      })
      .catch((error) => {
        alert(`Помилка реєстрації: ${error}`);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Завантаження..." : "Відправити"}
        </button>

        {error && <div>{error}</div>}
      </Form>
    </Formik>
  );
}
