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
    resetUid:(state)=>{
      state=init;
      return state;
    }
  },
});
export const { updateUid,resetUid } = uid.actions;

export default uid.reducer;
