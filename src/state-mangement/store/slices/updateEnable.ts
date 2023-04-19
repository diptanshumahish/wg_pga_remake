import { createSlice } from "@reduxjs/toolkit";


const init: boolean = false;

const UpdateEnable = createSlice({
  name: "updateEnable",
  initialState: init,
  reducers: {
    updateter: (state) => {
      state = !state;
      return state;
    },
  },
});
export const { updateter } = UpdateEnable.actions;

export default UpdateEnable.reducer;
