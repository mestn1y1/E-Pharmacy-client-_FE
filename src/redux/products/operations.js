// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const URL = "https://e-pharmacy-client-be.onrender.com";

// export const fetchProducts = createAsyncThunk(
//   "products",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(URL + "/products");
//       return res.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Unable to fetch user info"
//       );
//     }
//   }
// );

// export const fetchProductById = createAsyncThunk(
//   "productsfetchById",
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.get(`${URL}/products/${id}`);
//       return res.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Unable to fetch store by ID"
//       );
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-pharmacy-client-be.onrender.com";

export const fetchProducts = createAsyncThunk(
  "products",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/products?page=${page}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch products"
      );
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "productsfetchById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/products/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch store by ID"
      );
    }
  }
);
