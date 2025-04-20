// import { useSelector } from "react-redux";
// import {
//   selectIsLoading,
//   selectError,
//   selectProducts,
//   selectHasNextPage,
//   selectHasPreviousPage,
//   selectPage,
//   selectPerPage,
//   selectTotalItems,
//   selectTotalPages,
//   selectProductDetails,
//   selectIsProductDetailsLoading,
//   selectProductDetailsError,
//   selectProductDetailsById,
//   selectProductById,
// } from "../redux/products/selectors";

// export const useProducts = (productId = null) => {
//   const products = useSelector(selectProducts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const hasNextPage = useSelector(selectHasNextPage);
//   const hasPreviousPage = useSelector(selectHasPreviousPage);
//   const page = useSelector(selectPage);
//   const perPage = useSelector(selectPerPage);
//   const totalItems = useSelector(selectTotalItems);
//   const totalPages = useSelector(selectTotalPages);

//   const product = useSelector(selectProductDetails);
//   const productDetailsById = useSelector(selectProductDetailsById);
//   const productById = useSelector((state) =>
//     productId ? selectProductById(state, productId) : null
//   );

//   const isLoadingDetails = useSelector(selectIsProductDetailsLoading);
//   const errorDetails = useSelector(selectProductDetailsError);

//   return {
//     products,
//     product,
//     productById,
//     productDetailsById,
//     isLoading,
//     isLoadingDetails,
//     errorDetails,
//     error,
//     hasNextPage,
//     hasPreviousPage,
//     page,
//     perPage,
//     totalItems,
//     totalPages,
//   };
// };
import { useSelector, useDispatch } from "react-redux";
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
  selectProductDetails,
  selectIsProductDetailsLoading,
  selectProductDetailsError,
  selectProductDetailsById,
  selectProductById,
} from "../redux/products/selectors";
import { setPage } from "../redux/products/slice";

export const useProducts = (productId = null) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const hasNextPage = useSelector(selectHasNextPage);
  const hasPreviousPage = useSelector(selectHasPreviousPage);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalItems = useSelector(selectTotalItems);
  const totalPages = useSelector(selectTotalPages);

  const product = useSelector(selectProductDetails);
  const productDetailsById = useSelector(selectProductDetailsById);
  const productById = useSelector((state) =>
    productId ? selectProductById(state, productId) : null
  );

  const isLoadingDetails = useSelector(selectIsProductDetailsLoading);
  const errorDetails = useSelector(selectProductDetailsError);

  const changePage = (newPage) => {
    dispatch(setPage(newPage));
  };

  return {
    products,
    product,
    productById,
    productDetailsById,
    isLoading,
    isLoadingDetails,
    errorDetails,
    error,
    hasNextPage,
    hasPreviousPage,
    page,
    perPage,
    totalItems,
    totalPages,
    changePage,
  };
};
