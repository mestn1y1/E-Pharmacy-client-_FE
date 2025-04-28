import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const navigate = useNavigate();
  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (shouldRedirect) {
      if (!hasShownToast.current) {
        toast.info("Please log in or register to access the Medicine page!");
        hasShownToast.current = true;
      }
      navigate(redirectTo, { state: { from: location } });
      hasShownToast.current = false;
    }
  }, [shouldRedirect, redirectTo, navigate, location]);

  return !shouldRedirect ? <Component /> : null;
};
