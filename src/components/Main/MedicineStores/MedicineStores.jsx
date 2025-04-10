import { useDispatch } from "react-redux";
import css from "./MedicineStores.module.css";
import { useNearest } from "../../../hooks/useNearest";
import { useEffect } from "react";
import { fetchNearest } from "../../../redux/nearest/operations";
import ListOfStores from "./ListOfStores/ListOfStores";
import Loader from "../../Loader/Loader";

export default function MedicineStores() {
  const dispatch = useDispatch();
  const { isLoading, nearest } = useNearest();

  useEffect(() => {
    dispatch(fetchNearest());
  }, [dispatch]);

  const slicedNearest = nearest.slice(1, 7);

  return (
    <section className={css.medicineStoreSection}>
      <h2 className={css.title}>Your Nearest Medicine Store</h2>
      <p className={css.text}>Search for Medicine, Filter by your location</p>

      {isLoading ? <Loader /> : <ListOfStores items={slicedNearest} />}
    </section>
  );
}
