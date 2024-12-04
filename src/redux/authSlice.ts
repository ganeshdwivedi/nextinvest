"use client";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  _id: string;
  profile: string;
  email: string;
  role: string;
}
interface initialState {
  isLoggedIn: boolean;
  user: User;
}
const initialState = {
  isLoggedIn: false,
  user: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout, loginUser } = AuthSlice.actions;
export default AuthSlice.reducer;
