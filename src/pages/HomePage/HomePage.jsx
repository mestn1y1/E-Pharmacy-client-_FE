import MainBunner from "../../components/Main/MainBunner/MainBunner";
import MedicineStores from "../../components/Main/MedicineStores/MedicineStores";
import PromoBaners from "../../components/Main/PromoBaners/PromoBaners";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <MainBunner />
      <PromoBaners />
      <MedicineStores />
    </>
  );
}
