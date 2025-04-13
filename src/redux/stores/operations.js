import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-pharmacy-client-be.onrender.com";

export const fetchStores = createAsyncThunk("stores", async (_, thunkAPI) => {
  try {
    const res = await axios.get(URL + "/stores");
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Unable to fetch user info"
    );
  }
});

export const fetchStoreById = createAsyncThunk(
  "stores/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/stores/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch store by ID"
      );
    }
  }
);
