import { createSlice } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";

const init: string = "";

const authStat = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    updateState: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { updateState } = authStat.actions;

export default authStat.reducer;
