import { useDispatch } from "react-redux";
import css from "./MedicineStorePage.module.css";
import { useStore } from "../../hooks/useStore";
import Loader from "../../components/Loader/Loader";
import MedicineStoresList from "../../components/MedicineStore/MedicineStoresList";
import { useEffect } from "react";
import { fetchStores } from "../../redux/stores/operations";
export default function MedicineStorePage() {
  const { isLoading, stores } = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  return (
    <section className={css.medicineStore}>
      <h1 className={css.title}>Medicine store</h1>
      {isLoading ? <Loader /> : <MedicineStoresList items={stores} />}
    </section>
  );
}
