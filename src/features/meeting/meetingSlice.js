import { createSlice } from "@reduxjs/toolkit"
const initialState = null
const meetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        setAllMeetings: (state, action) => {
            state = action.payload
        }
    }

})
export const {setAllMeetings} = meetingSlice.actions
export default meetingSlice.reducer