export const selectProducts = (state) => state.products.products;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;
export const selectHasNextPage = (state) => state.products.hasNextPage;
export const selectHasPreviousPage = (state) => state.products.hasPreviousPage;
export const selectPage = (state) => state.products.page;
export const selectPerPage = (state) => state.products.perPage;
export const selectTotalItems = (state) => state.products.totalItems;
export const selectTotalPages = (state) => state.products.totalPages;
export const selectProductDetails = (state) => state.products.productDetails;
export const selectIsProductDetailsLoading = (state) =>
  state.products.isProductDetailsLoading;
export const selectProductDetailsError = (state) =>
  state.products.productDetailsError;
export const selectProductDetailsById = (state) =>
  state.products.productDetailsById;

export const selectProductById = (state, id) =>
  state.products.productDetailsById[id];
