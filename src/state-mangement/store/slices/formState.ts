import { createSlice } from "@reduxjs/toolkit";

const init: number = 0;

const formNumber = createSlice({
  name: "formNumber",
  initialState: init,
  reducers: {
    updateFormNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { updateFormNumber } = formNumber.actions;

export default formNumber.reducer;