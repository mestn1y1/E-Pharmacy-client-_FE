import { Link } from "react-router";
import Loader from "../../components/Loader/Loader";
import PharmacyStatistics from "../../components/MedicineStore/PharmacyStatistics/PharmacyStatistics";
import { useStore } from "../../hooks/useStore";

import css from "./MedicineStoreDetailsPage.module.css";

export default function MedicineStoreDetailsPage() {
  const { isLoading, selectedStore } = useStore();

  if (isLoading) {
    return <Loader />;
  }

  if (!selectedStore) {
    return <p>Store not found</p>;
  }

  const { name, statistics, description } = selectedStore;

  return (
    <section className={css.container}>
      <h1>Pharmacy Statistics : {name}</h1>
      <p>{description}</p>
      <PharmacyStatistics statistics={statistics} />
      <Link to="/medicine-store">Back to Stores</Link>
      <Link to="/medicine">Go to Shop</Link>
    </section>
  );
}
