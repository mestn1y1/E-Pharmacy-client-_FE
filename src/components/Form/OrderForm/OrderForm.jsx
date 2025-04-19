import { Button } from "../../Button/Button";
import css from "./OrderForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function OrderForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash On Delivery",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("Form values:", values);
      }}
    >
      {() => (
        <Form className={css.form}>
          <h2 className={css.title}>Enter shopping info</h2>
          <p className={css.description}>
            Enter your delivery address where you get the product. You can also
            send any other location where you send the products.
          </p>

          <div className={css.wrapInput}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className={css.input}
              placeholder="Enter text"
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className={css.wrapInput}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={css.input}
              placeholder="Enter text"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className={css.wrapInput}>
            <label htmlFor="phone" className={css.label}>
              Phone
            </label>
            <Field
              type="text"
              name="phone"
              id="phone"
              className={css.input}
              placeholder="Enter text"
            />
            <ErrorMessage name="phone" component="div" />
          </div>
          <div className={css.wrapInput}>
            <label htmlFor="address" className={css.label}>
              Address
            </label>
            <Field
              type="text"
              name="address"
              id="address"
              className={css.input}
              placeholder="Enter text"
            />
            <ErrorMessage name="address" component="div" />
          </div>

          <hr className={css.line} />
          <h3 className={css.title}>Payment method</h3>
          <p className={css.description}>
            You can pay us in a multiple way in our payment gateway system.
          </p>

          <div role="group" className={css.radioGroup}>
            <label className={`${css.radioLabel} ${css.customRadio}`}>
              <Field
                type="radio"
                name="payment"
                value="Cash On Delivery"
                className={css.visuallyHidden}
              />
              <span className={css.customRadioVisual}></span>
              Cash On Delivery
            </label>
            <label className={`${css.radioLabel} ${css.customRadio}`}>
              <Field
                type="radio"
                name="payment"
                value="Bank"
                className={css.visuallyHidden}
              />
              <span className={css.customRadioVisual}></span>
              Bank
            </label>
          </div>
          <hr className={css.line} />
          <h3 className={css.title}>Order details</h3>
          <p className={css.description}>
            Shipping and additionnal costs are calculated based on values you
            have entered.
          </p>

          <p className={css.total}>
            Total: <span>₴2434</span>
          </p>
          <Button text="Place order" type="submit" className={css.btn} />
        </Form>
      )}
    </Formik>
  );
}
