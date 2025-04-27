import { useDispatch } from "react-redux";
import { useCart } from "../../../hooks/useCart";
import { Button } from "../../Button/Button";
import css from "./OrderForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { checkoutCart } from "../../../redux/cart/operations";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function OrderForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
      .required("Phone number is required"),

    shippingAddress: Yup.string()
      .min(5, "Address must be at least 5 characters long")
      .required("Shipping address is required"),

    paymentMethod: Yup.string()
      .oneOf(["Cash On Delivery", "Bank"], "Invalid payment method")
      .required("Payment method is required"),
  });
  const { cartItems } = useCart();
  const totalAmount = cartItems.reduce((sum, { price, quantity }) => {
    return parseFloat((sum + price * quantity).toFixed(2));
  }, 0);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    shippingAddress: "",
    paymentMethod: "Cash On Delivery",
    totalAmount,
  };

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(checkoutCart(values))
      .then(() => {
        toast.success("Checkout successful! A manager will contact you soon.");
      })
      .catch(() => {
        toast.error("Checkout failed. Please try again.");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {() => (
        <Form className={css.form}>
          <h2 className={css.title}>Enter shopping info</h2>
          <p className={css.description}>
            Enter your delivery address where you get the product. You can also
            send any other location where you send the products.
          </p>

          <div className={css.inputContainer}>
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
              <ErrorMessage name="name" component="div" className={css.error} />
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
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
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
              <ErrorMessage
                name="phone"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.wrapInput}>
              <label htmlFor="shippingAddress" className={css.label}>
                Address
              </label>
              <Field
                type="text"
                name="shippingAddress"
                id="shippingAddress"
                className={css.input}
                placeholder="Enter text"
              />
              <ErrorMessage
                name="shippingAddress"
                component="div"
                className={css.error}
              />
            </div>
          </div>
          <Field type="hidden" name="totalAmount" />
          <hr className={css.line} />
          <h3 className={css.title}>Payment method</h3>
          <p className={css.description}>
            You can pay us in a multiple way in our payment gateway system.
          </p>

          <div role="group" className={css.radioGroup}>
            <label className={`${css.radioLabel} ${css.customRadio}`}>
              <Field
                type="radio"
                name="paymentMethod"
                value="Cash On Delivery"
                className={css.visuallyHidden}
              />
              <span className={css.customRadioVisual}></span>
              Cash On Delivery
            </label>
            <label className={`${css.radioLabel} ${css.customRadio}`}>
              <Field
                type="radio"
                name="paymentMethod"
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
            Total: <span>₴{totalAmount}</span>
          </p>
          <Button text="Place order" type="submit" className={css.btn} />
        </Form>
      )}
    </Formik>
  );
}
