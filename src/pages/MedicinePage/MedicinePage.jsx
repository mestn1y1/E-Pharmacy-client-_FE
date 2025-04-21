import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products/operations";
import ProductList from "../../components/Product/ProductList/ProductList";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import css from "./MedicinePage.module.css";
import { useProducts } from "../../hooks/useProducts";
import Filter from "../../components/Product/Filter/Filter";

export default function MedicinePage() {
  const dispatch = useDispatch();
  const { isLoading, products, page, totalPages } = useProducts();

  const [currentPage, setCurrentPage] = useState(page);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
  });

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, ...filters }));
  }, [dispatch, currentPage, filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <section className={css.medicinePage}>
      <h1 className={css.title}>Medicine</h1>
      <Filter onFilter={handleFilter} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList items={products} />
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}
