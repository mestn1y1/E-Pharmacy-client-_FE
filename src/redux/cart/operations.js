import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://e-pharmacy-client-be.onrender.com";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/cart");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, thunkAPI) => {
    try {
      const res = await axios.post(URL + "/cart", { productId, quantity });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ productId, quantity }, thunkAPI) => {
    try {
      const res = await axios.put(URL + "/cart", { productId, quantity });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (productId, thunkAPI) => {
    try {
      await axios.delete(`${URL} /cart/${productId}`);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async ({ paymentMethod, shippingAddress }, thunkAPI) => {
    try {
      const res = await axios.post(URL + "/cart/checkout", {
        paymentMethod,
        shippingAddress,
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
