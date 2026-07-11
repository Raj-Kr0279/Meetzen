import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import companyReducer from "../features/company/companySlice";
import { userApi } from "../features/user/userApi";
import { companyApi } from "../features/company/companyApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    company: companyReducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(companyApi.middleware)
});

export default store;

