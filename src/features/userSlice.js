import { createSlice } from "@reduxjs/toolkit";
import { clearUserSession } from "../utils/storageHelper";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      clearUserSession(state.userData.username);
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;
