import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "./operations";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  hasNextPage: false,
  hasPreviousPage: false,
  page: 1,
  perPage: 12,
  totalItems: 0,
  totalPages: 0,
  productDetails: null,
  isProductDetailsLoading: false,
  productDetailsError: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isProductDetailsLoading = true;
        state.productDetailsError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isProductDetailsLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isProductDetailsLoading = false;
        state.productDetailsError = action.payload || action.error.message;
      });
  },
});

export const productsReducer = productSlice.reducer;
