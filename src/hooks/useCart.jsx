import { useSelector } from "react-redux";
import {
  selectCartError,
  selectCartItems,
  selectCartLoading,
  selectCartOrder,
  selectCartTotalQuantity,
  selectCartTotalPrice,
} from "../redux/cart/selectors";

export const useCart = () => {
  const error = useSelector(selectCartError);
  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectCartLoading);
  const cartOrder = useSelector(selectCartOrder);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totlaPrice = useSelector(selectCartTotalPrice);

  return {
    error,
    cartItems,
    isLoading,
    cartOrder,
    totalQuantity,
    totlaPrice,
  };
};
