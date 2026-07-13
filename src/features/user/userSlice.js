import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const initialState = {
  name: "",
  phone: "",
  companyId: "",
  bio: "",
  userImage: "",
  email: "",
  language: "",
  timezone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Local-only reducer (optional). Prefer using the RTK Query mutation below.
    editUser: (state, action) => {
      const {field, value} = action.payload;
      state[field] = action.payload.value
    },
    setUserDetails: (state, action) => {
        Object.assign(state, action.payload);
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

export const { editUser, setUserDetails } = userSlice.actions;
export default userSlice.reducer;

