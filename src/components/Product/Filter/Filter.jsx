import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SelectCategory from "./SelectCategory/SelectCategory";
import css from "./Filter.module.css";
import { Icons } from "../../Icons/Icons";
import { Button } from "../../Button/Button";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  category: Yup.string(),
});

export default function Filter({ onFilter }) {
  const initialValues = {
    name: "",
    category: "",
  };

  const handleSubmit = (values) => {
    onFilter(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <SelectCategory setValue={setFieldValue} />
          <div className={css.inputWrapper}>
            <Field
              name="name"
              placeholder="Search medicine"
              className={css.input}
              value={values.search}
              onChange={(e) => setFieldValue("name", e.target.value)}
            />
            <button onClick={handleSubmit} type="submit">
              <Icons iconName="search" className={css.iconSearch} />
            </button>
          </div>

          <Button text="Filter" type="submit" className={css.button}>
            <Icons iconName="filter" className={css.icon} />
          </Button>
        </Form>
      )}
    </Formik>
  );
}
