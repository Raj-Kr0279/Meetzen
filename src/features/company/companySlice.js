import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Cross-route client choice. Company lists/details stay in RTK Query.
  selectedCompany: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    removeCompany: () => {
      return initialState;
    },
  },
});

export const { setSelectedCompany, removeCompany } = companySlice.actions;
export default companySlice.reducer;
