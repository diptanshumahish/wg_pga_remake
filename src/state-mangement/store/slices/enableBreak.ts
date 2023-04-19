import { createSlice } from "@reduxjs/toolkit";

const init: boolean = false;

const breakEnable = createSlice({
  name: "breakEnable",
  initialState: init,
  reducers: {
    updateBreakEnable: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateBreakEnable } = breakEnable.actions;

export default breakEnable.reducer;
