import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL
export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            return headers
        }
    }),
    tagTypes: ["company"],
    endpoints: (builder) => ({
        getCompaniesList: builder.query({
            query: () => ({
                url: "company/get-companies",
                method: "GET",
            }),
            providesTags: ["company"]
        }),
        getCompanyById: builder.mutation({
            query: (companyId)=>({
                url: 'company/findWithId',
                method: "POST",
                body: {companyId}
            }),
            providesTags: ["company"]
        })
    })
})
export const {useGetCompaniesListQuery, useGetCompanyByIdMutation} = companyApi;