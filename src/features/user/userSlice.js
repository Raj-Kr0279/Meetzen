import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Auth/session data is client state because it drives routing and headers.
  token: localStorage.getItem("token"),
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
    setUserDetails: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    getMe: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { editUser, setUserDetails, logout, getMe } = userSlice.actions;
export default userSlice.reducer;
