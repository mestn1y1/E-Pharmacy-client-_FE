import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-pharmacy-client-be.onrender.com";

const setAuthHeader = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(URL + "/user/register", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(URL + "/user/login", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(URL + "/user/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      console.log("🔐 Token used in refreshUser:", persistedToken);
      setAuthHeader(persistedToken);
      const res = await axios.get(URL + "/user/user-info");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/userInfo",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(URL + "/user/user-info");
      return res.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch user info"
      );
    }
  }
);
