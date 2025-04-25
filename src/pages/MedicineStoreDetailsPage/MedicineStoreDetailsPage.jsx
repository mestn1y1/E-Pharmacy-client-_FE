import { Link } from "react-router";
import Loader from "../../components/Loader/Loader";
import PharmacyStatistics from "../../components/MedicineStore/PharmacyStatistics/PharmacyStatistics";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

import { ModalWrap } from "../../components/Modals/ModalWrap/ModalWrap";
import AuthModal from "../../components/Modals/AuthModal/AuthModal";
import css from "./MedicineStoreDetailsPage.module.css";
import { Icons } from "../../components/Icons/Icons";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function MedicineStoreDetailsPage() {
  const { isLoading, selectedStore } = useStore();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [modalAuthOpen, setAuthModalOpen] = useState(false);

  if (!selectedStore) {
    return <p className={css.loadingText}>Store info is loading ...</p>;
  }

  const handleAuth = () => {
    if (isLoggedIn) {
      navigate("/medicine");
    } else {
      setAuthModalOpen(true);
    }
  };

  const { name, statistics, description, phone, city, address } = selectedStore;
  return (
    <section className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
            <button className={css.link} onClick={handleAuth}>
              Go to shop
            </button>
          </div>
          <ModalWrap
            isOpen={modalAuthOpen}
            handleClose={() => setAuthModalOpen(false)}
          >
            <AuthModal onClose={() => setAuthModalOpen(false)} />
          </ModalWrap>
        </>
      )}
    </section>
  );
}
