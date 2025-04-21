import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SelectCategory from "./SelectCategory/SelectCategory";
import css from "./Filter.module.css";
import { Icons } from "../../Icons/Icons";
import { Button } from "../../Button/Button";

const validationSchema = Yup.object().shape({
  search: Yup.string(),
  category: Yup.string(),
});

export default function Filter({ onFilter }) {
  const initialValues = {
    search: "",
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
              name="search"
              placeholder="Search medicine"
              className={css.input}
              value={values.search}
              onChange={(e) => setFieldValue("search", e.target.value)}
            />
            <Icons iconName="search" className={css.iconSearch} />
          </div>

          <Button text="Filter" type="submit" className={css.button}>
            <Icons iconName="filter" className={css.icon} />
          </Button>
        </Form>
      )}
    </Formik>
  );
}
