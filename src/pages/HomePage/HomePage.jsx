import AddPharmacyPromoSection from "../../components/Main/AddPharmacyPromoSection/AddPharmacyPromoSection";
import Features from "../../components/Main/Features/Features";
import MainBunner from "../../components/Main/MainBunner/MainBunner";
import MedicineStores from "../../components/Main/MedicineStores/MedicineStores";
import PromoBaners from "../../components/Main/PromoBaners/PromoBaners";
import ReviewsSection from "../../components/Main/ReviewsSection/ReviewsSection";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <MainBunner />
      <PromoBaners />
      <MedicineStores />
      <AddPharmacyPromoSection />
      <Features />
      <ReviewsSection />
    </>
  );
}
