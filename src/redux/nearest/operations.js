import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-pharmacy-client-be.onrender.com";

export const fetchNearest = createAsyncThunk("nearest", async (_, thunkAPI) => {
  try {
    const res = await axios.get(URL + "/stores/nearest");
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Unable to fetch nearest"
    );
  }
});
