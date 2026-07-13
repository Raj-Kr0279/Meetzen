import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import meetingReducer from "../features/meeting/meetingSlice"
import companyReducer from "../features/company/companySlice";
import { userApi } from "../features/user/userApi";
import { companyApi } from "../features/company/companyApi";
import { meetingApi } from "../features/meeting/meetingApi"

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    company: companyReducer,
    [companyApi.reducerPath]: companyApi.reducer,
    meeting: meetingReducer,
    [meetingApi.reducerPath]: meetingApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(companyApi.middleware)
      .concat(meetingApi.middleware)
});

export default store;

