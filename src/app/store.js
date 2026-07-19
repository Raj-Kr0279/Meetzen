import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import companyReducer from "../features/company/companySlice";
import { userApi } from "../features/user/userApi";
import { companyApi } from "../features/company/companyApi";
import { meetingApi } from "../features/meeting/meetingApi";

const store = configureStore({
  reducer: {
    // Cross-route client state only.
    user: userReducer,
    company: companyReducer,

    // Server state belongs to RTK Query caches.
    [userApi.reducerPath]: userApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [meetingApi.reducerPath]: meetingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(companyApi.middleware)
      .concat(meetingApi.middleware),
});

export default store;
