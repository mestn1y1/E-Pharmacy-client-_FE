import AddPharmacyPromoSection from "../../components/Main/AddPharmacyPromoSection/AddPharmacyPromoSection";
import Features from "../../components/Main/Features/Features";
import MainBunner from "../../components/Main/MainBunner/MainBunner";
import MedicineStores from "../../components/Main/MedicineStores/MedicineStores";
import { useAuth } from "../../hooks/useAuth";
import PromoBaners from "../../components/Main/PromoBaners/PromoBaners";
import ReviewsSection from "../../components/Main/ReviewsSection/ReviewsSection";
import { ModalWrap } from "../../components/Modals/ModalWrap/ModalWrap";
import AuthModal from "../../components/Modals/AuthModal/AuthModal";
import { useState } from "react";

import css from "./HomePage.module.css";
export default function HomePage() {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <MainBunner />
      <PromoBaners
        isLoggedIn={isLoggedIn}
        onShowModal={() => setShowModal(true)}
      />
      <MedicineStores />
      <AddPharmacyPromoSection />
      <Features />
      <ReviewsSection />
      <ModalWrap isOpen={showModal} handleClose={() => setShowModal(false)}>
        <AuthModal onClose={() => setShowModal(false)} />
      </ModalWrap>
    </>
  );
}
