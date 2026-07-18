import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const initialState = { token: localStorage.getItem("token"), user: null }
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    logout: () => { localStorage.removeItem("token"); return initialState},
    // Replace the slice state with the logged-in user object
    setUserDetails: (state, action) => { 
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token)
    },
    getMe: (state, action)=>{
      state.user = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       userApi.endpoints.getUser.matchFulfilled,
  //       (state, action) => {
  //         Object.assign(state, action.payload ?? {});
  //       }
  //     )
  //     .addMatcher(
  //       userApi.endpoints.editUser.matchFulfilled,
  //       (state, action) => {
  //         // If backend returns updated user, merge it.
  //         Object.assign(state, action.payload ?? {});
  //       }
  //     );
  // },
});

export const { editUser, setUserDetails, logout, getMe } = userSlice.actions;
export default userSlice.reducer;

