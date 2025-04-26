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
import { useAuth } from "../../hooks/useAuth";
import { fetchCartItems } from "../../redux/cart/operations";

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

const Reviews = lazy(() => import("../Reviews/Reviews"));
const Description = lazy(() => import("../Description/Description"));

export default function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLoyaut />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage />} />
            <Route
              path="/medicine/product"
              element={
                <PrivateRoute redirectTo="/home" component={<ProductPage />} />
              }
            >
              <Route index element={<Description />} />
              <Route path="description" element={<Description />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
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
