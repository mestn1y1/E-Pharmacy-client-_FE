import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-pharmacy-client-be.onrender.com";

export const fetchReviews = createAsyncThunk("reviews", async (_, thunkAPI) => {
  try {
    const res = await axios.get(URL + "/customer-reviews");
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.message || "Unable to fetch user info"
    );
  }
});
