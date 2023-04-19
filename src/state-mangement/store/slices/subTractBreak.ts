import { createSlice } from "@reduxjs/toolkit";

const init: { hours: number; minutes: number } = { hours: 0, minutes: 0 };

const subtractBreak = createSlice({
  name: "countTime",
  initialState: init,
  reducers: {
    updateBreak: (state, action) => {
      state = action.payload;
      return state;
    },
    resetBreak: (state) => {
      state = init;
      return state;
    },
  },
});
export const { updateBreak, resetBreak } = subtractBreak.actions;

export default subtractBreak.reducer;
