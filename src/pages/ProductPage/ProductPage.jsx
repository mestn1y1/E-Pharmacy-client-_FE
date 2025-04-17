import ProductOverview from "../../components/Product/ProductOverview/ProductOverview";
import TabsContainer from "../../components/TabsContainer/TabsContainer";
import css from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <section className={css.product}>
      <ProductOverview />
      <TabsContainer />
    </section>
  );
}
