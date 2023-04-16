import { createSlice } from "@reduxjs/toolkit";

const init: number = 0;

const changeState = createSlice({
  name: "change",
  initialState: init,
  reducers: {
    goFront: (state: number) => {
      return (state = state + 1);
    },
    goBack: (state: number) => {
      return (state = 0);
    },
  },
});
export const { goFront, goBack } = changeState.actions;

export default changeState.reducer;
