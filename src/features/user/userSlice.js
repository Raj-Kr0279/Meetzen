import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const initialState = { token: null, user: null }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    logout: () => {return initialState},
    // Replace the slice state with the logged-in user object
    setUserDetails: (state, action) => { 
      state.user = action.payload.user;
      state.token = action.payload.token;
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

export const { editUser, setUserDetails, logout } = userSlice.actions;
export default userSlice.reducer;

