import { createSlice } from "@reduxjs/toolkit";

const init: string = "";

const uid = createSlice({
  name: "uid",
  initialState: init,
  reducers: {
    updateUid: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { updateUid } = uid.actions;

export default uid.reducer;
