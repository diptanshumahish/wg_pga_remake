import { createSlice } from "@reduxjs/toolkit";

const init: boolean = false;

const enableMail = createSlice({
  name: "enableMail",
  initialState: init,
  reducers: {
    updateMail: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateMail } = enableMail.actions;

export default enableMail.reducer;
