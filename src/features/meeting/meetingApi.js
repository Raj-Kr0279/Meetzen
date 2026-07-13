import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/"
export const meetingApi = createApi({
    reducerPath: "meetingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
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