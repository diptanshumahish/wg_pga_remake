import { createSlice } from "@reduxjs/toolkit";

const init: boolean = false;

const leaveEnable = createSlice({
  name: "enableLeave",
  initialState: init,
  reducers: {
    updateLeaveEnable: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateLeaveEnable } = leaveEnable.actions;

export default leaveEnable.reducer;
