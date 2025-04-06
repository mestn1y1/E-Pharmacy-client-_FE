import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/operations.js";
import { selectUser } from "../../../redux/auth/selectors.js";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Ім'я має містити щонайменше 2 символи")
    .max(50, "Ім'я не може бути довшим за 50 символів")
    .required("Обов'язкове поле"),
  email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .required("Обов'язкове поле"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        alert("Реєстрація успішна!");
      })
      .catch((error) => {
        alert(`Помилка реєстрації: ${error}`);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

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
