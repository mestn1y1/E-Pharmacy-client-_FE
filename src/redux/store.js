import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { nearestReducer } from "./nearest/slice";
import { reviewsReducer } from "./reviews/slice";
import { storesReducer } from "./stores/slice";
import { productsReducer } from "./products/slice";
import cartReducer from "./cart/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

const productsPersistConfig = {
  key: "products",
  storage,
  whitelist: ["productDetails"],
};

const selectedStorePersistConfig = {
  key: "stores",
  storage,
  whitelist: ["selectedStore"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    nearest: nearestReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    stores: persistReducer(selectedStorePersistConfig, storesReducer),
    products: persistReducer(productsPersistConfig, productsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
