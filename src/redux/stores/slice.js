import { createSlice } from "@reduxjs/toolkit";
import { fetchStores, fetchStoreById } from "./operations";

const initialState = {
  stores: [],
  selectedStore: null,
  isLoading: false,
  error: null,
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stores = action.payload;
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchStoreById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedStore = null;
      })
      .addCase(fetchStoreById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedStore = action.payload;
      })
      .addCase(fetchStoreById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const storesReducer = storesSlice.reducer;
