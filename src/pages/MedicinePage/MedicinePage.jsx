import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/operations";
import ProductList from "../../components/Product/ProductList/ProductList";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/Loader/Loader";
import css from "./MedicinePage.module.css";
import { fetchCartItems } from "../../redux/cart/operations";
import { useAuth } from "../../hooks/useAuth";

export default function MedicinePage() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { isLoading, products } = useProducts();

  console.log(products);

  return (
    <section className={css.medicinePage}>
      <h1 className={css.title}>Medicine</h1>
      <h2>FilterComponent</h2>
      {isLoading ? <Loader /> : <ProductList items={products} />}
    </section>
  );
}
