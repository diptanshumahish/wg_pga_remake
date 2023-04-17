import { createSlice } from "@reduxjs/toolkit";

const init: string = '';

const storeEmail = createSlice({
  name: "profilepic",
  initialState: init,
  reducers: {
    updateEmail: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { updateEmail } = storeEmail.actions;

export default storeEmail.reducer;