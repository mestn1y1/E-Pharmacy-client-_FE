import css from "./SharedLoyaut.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";

export default function SharedLoyaut() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
