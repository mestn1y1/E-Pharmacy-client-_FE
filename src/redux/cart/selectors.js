import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.items;

export const selectCartLoading = (state) => state.cart.loading;

export const selectCartError = (state) => state.cart.error;

export const selectCartOrder = (state) => state.cart.order;

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// export const selectCartTotal = (state) =>
//   state.cart.items.reduce((total, item) => {
//     return total + item.productId.price * item.quantity;
//   }, 0);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
);
