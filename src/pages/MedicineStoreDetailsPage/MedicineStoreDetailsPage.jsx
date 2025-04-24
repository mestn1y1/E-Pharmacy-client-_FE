import { Link } from "react-router";
import Loader from "../../components/Loader/Loader";
import PharmacyStatistics from "../../components/MedicineStore/PharmacyStatistics/PharmacyStatistics";
import { useStore } from "../../hooks/useStore";

import css from "./MedicineStoreDetailsPage.module.css";
import { Icons } from "../../components/Icons/Icons";

export default function MedicineStoreDetailsPage() {
  const { isLoading, selectedStore } = useStore();

  if (isLoading) {
    return <Loader />;
  }

  if (!selectedStore) {
    return <p>Store not found</p>;
  }

  const { name, statistics, description, phone, city, address } = selectedStore;
  console.log(selectedStore);
  return (
    <section className={css.container}>
      <h1 className={css.title}>{name}</h1>
      <p className={css.phone}>
        <Icons iconName="map" className={css.icon} />
        {city},{address}
      </p>
      <p className={css.phone}>
        <Icons iconName="phone" className={css.icon} />
        {phone}
      </p>
      <h3 className={css.subtitle}>About pharmacy :</h3>
      <p className={css.description}>{description}</p>
      <PharmacyStatistics statistics={statistics} />
      <div className={css.linkBlock}>
        <Link className={css.link} to="/medicine-store">
          Back to stores
        </Link>
        <Link className={css.link} to="/medicine">
          Go to shop
        </Link>
      </div>
    </section>
  );
}
