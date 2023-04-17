import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initFirebase } from "@/functions";
import { FirebaseApp } from "firebase/app";

const init: FirebaseApp = initFirebase();

const FirebaseState = createSlice({
  name: "FirebaseState",
  initialState: init,
  reducers: {
    update: (
      state: FirebaseApp,
      action: PayloadAction<FirebaseApp>
    ): FirebaseApp => {
      state = action.payload;
      return { ...state };
    },
  },
});
export const { update } = FirebaseState.actions;

export default FirebaseState.reducer;
