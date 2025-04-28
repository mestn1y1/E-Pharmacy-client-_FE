// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      toast.info("Please log in or register to access the Medicine page.");
      navigate(redirectTo);
    }
  }, [shouldRedirect, redirectTo, navigate]);

  return !shouldRedirect ? Component : null;
};
