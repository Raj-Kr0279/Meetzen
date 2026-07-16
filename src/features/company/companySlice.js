import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCompany: null
}
const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setSelectedCompany: (state, action) => { state.selectedCompany = action.payload },
    removeCompany: () => {return initialState}
  },
})

export const { setSelectedCompany, removeCompany } = companySlice.actions
export default companySlice.reducer