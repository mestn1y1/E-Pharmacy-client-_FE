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

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    nearest: nearestReducer,
    reviews: reviewsReducer,
    stores: storesReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
