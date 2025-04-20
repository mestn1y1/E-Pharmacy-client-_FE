import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products/operations";
import ProductList from "../../components/Product/ProductList/ProductList";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import css from "./MedicinePage.module.css";
import { useProducts } from "../../hooks/useProducts";

export default function MedicinePage() {
  const dispatch = useDispatch();
  const { isLoading, products, page, totalPages } = useProducts();

  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <section className={css.medicinePage}>
      <h1 className={css.title}>Medicine</h1>
      <h2>FilterComponent</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList items={products} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}
