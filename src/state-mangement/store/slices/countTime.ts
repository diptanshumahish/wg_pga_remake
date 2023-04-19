import { createSlice } from "@reduxjs/toolkit";

const init: string = "";

const countTime = createSlice({
  name: "countTime",
  initialState: init,
  reducers: {
    updateTime: (state, action) => {
      state = action.payload;
      return state;
    },
    resetTime: (state) => {
      state = "";
      return state;
    },
  },
});
export const { updateTime, resetTime } = countTime.actions;

export default countTime.reducer;
