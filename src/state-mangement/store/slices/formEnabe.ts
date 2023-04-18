import { createSlice } from "@reduxjs/toolkit";

const init: boolean = false;

const formEnable = createSlice({
  name: "formEnable",
  initialState: init,
  reducers: {
    updateFormEnable: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateFormEnable } = formEnable.actions;

export default formEnable.reducer;
