import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL
export const meetingApi = createApi({
    reducerPath: "meetingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            return headers
        }
    }),
    tagTypes: ["meeting"],
    endpoints: (builder) => ({
        getMeetingsList: builder.query({
            query: () => ({
                url: "meeting/meeting-list",
                method: "GET"
            }),
            providesTags: ["meeting"]
        })
    })
})
export const { useGetMeetingsListQuery } = meetingApi
