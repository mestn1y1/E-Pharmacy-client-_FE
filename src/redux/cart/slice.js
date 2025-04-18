import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  addToCart,
  updateCartItem,
  deleteCartItem,
  checkoutCart,
} from "./operations";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
    order: null,
  },
  reducers: {
    clearCart(state) {
      state.items = [];
    },
    resetOrder(state) {
      state.order = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.productId === action.payload.productId
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.productId !== action.payload
        );
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(checkoutCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [];
        state.order = action.payload;
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCart, resetOrder } = cartSlice.actions;
export default cartSlice.reducer;
