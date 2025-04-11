import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./operations";

const initialState = {
  reviews: [],
  isLoading: false,
  error: false,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const reviewsReducer = reviewSlice.reducer;
