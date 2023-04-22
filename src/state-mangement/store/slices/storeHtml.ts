import { createSlice } from "@reduxjs/toolkit";

const init: string = `unset`;

const storeHtml = createSlice({
  name: "storeHtml",
  initialState: init,
  reducers: {
    setHtml: (state, action) => {
      state = action.payload;
      return state;
    },
    resetHtml: (state) => {
      state = init;
      return state;
    },
  },
});
export const { setHtml, resetHtml } = storeHtml.actions;

export default storeHtml.reducer;
