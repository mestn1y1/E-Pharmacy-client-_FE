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

  const { name, statistics } = selectedStore;

  return (
    <div className={css.wrapper}>
      <h1>{name}</h1>
      <PharmacyStatistics statistics={statistics} />
    </div>
  );
}