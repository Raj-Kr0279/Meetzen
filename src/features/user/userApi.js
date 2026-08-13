import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // If you store auth token in redux, attach it here.
      // Example:
      // const token = getState().auth?.token;
      // if (token) headers.set('authorization', `Bearer ${token}`);
     const token = getState().user?.user?.token || localStorage.getItem("token")
     if (token) headers.set('authorization', `Bearer ${token}`)
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "auth/getMe",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: 'auth/login',
        method: "POST",
        body: formData
      })
    }),

    editUser: builder.mutation({
      query: ({formData, id}) => ({
        url: `/user/update-profile/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["User"],
    })
  }),
});

export const { useGetUserQuery, useEditUserMutation, useLoginMutation } = userApi;

