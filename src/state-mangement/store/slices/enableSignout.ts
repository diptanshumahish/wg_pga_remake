import { createSlice } from "@reduxjs/toolkit";

const init: boolean = false;

const enableSignout = createSlice({
  name: "signOutEnable",
  initialState: init,
  reducers: {
    updateSignout: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateSignout } = enableSignout.actions;

export default enableSignout.reducer;
