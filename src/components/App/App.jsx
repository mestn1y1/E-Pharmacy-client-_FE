import { lazy, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import SharedLoyaut from "../SharedLoyaut/SharedLoyaut";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { refreshUser } from "../../redux/auth/operations";
import { Navigate } from "react-router";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage"));
const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));
const MedicineStoreDetailsPage = lazy(() =>
  import("../../pages/MedicineStoreDetailsPage/MedicineStoreDetailsPage")
);
const MedicinePage = lazy(() =>
  import("../../pages/MedicinePage/MedicinePage")
);
const MedicineStorePage = lazy(() =>
  import("../../pages/MedicineStorePage/MedicineStorePage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLoyaut />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="medicine-store" element={<MedicineStorePage />} />
            <Route
              path="medicine-store/:id"
              element={<MedicineStoreDetailsPage />}
            />
            <Route
              path="medicine"
              element={
                <PrivateRoute redirectTo="/home" component={<MedicinePage />} />
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoute redirectTo="/home" component={<CartPage />} />
              }
            />
          </Route>

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<RegisterPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
