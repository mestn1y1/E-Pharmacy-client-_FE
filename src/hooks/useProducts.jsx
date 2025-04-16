import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectProducts,
  selectHasNextPage,
  selectHasPreviousPage,
  selectPage,
  selectPerPage,
  selectTotalItems,
  selectTotalPages,
} from "../redux/products/selectors";

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const hasNextPage = useSelector(selectHasNextPage);
  const hasPreviousPage = useSelector(selectHasPreviousPage);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalItems = useSelector(selectTotalItems);
  const totalPages = useSelector(selectTotalPages);

  return {
    products,
    isLoading,
    error,
    hasNextPage,
    hasPreviousPage,
    page,
    perPage,
    totalItems,
    totalPages,
  };
};
