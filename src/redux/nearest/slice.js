import { createSlice } from "@reduxjs/toolkit";
import { fetchNearest } from "./operations";

const initialState = {
  nearest: [],
  isLoading: false,
  error: false,
};

const nearestSlice = createSlice({
  name: "nearest",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchNearest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNearest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nearest = action.payload;
      })
      .addCase(fetchNearest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const nearestReducer = nearestSlice.reducer;
