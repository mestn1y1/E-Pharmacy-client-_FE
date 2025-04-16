import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/operations";
import ProductList from "../../components/Product/ProductList/ProductList";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/Loader/Loader";
import css from "./MedicinePage.module.css";

export default function MedicinePage() {
  const dispatch = useDispatch();

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
