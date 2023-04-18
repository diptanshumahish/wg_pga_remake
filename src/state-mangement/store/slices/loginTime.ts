import { createSlice } from "@reduxjs/toolkit";

const init: number = 0;

const getLoginTime = createSlice({
  name: "loginTime",
  initialState: init,
  reducers: {
    setLoginTime: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setLoginTime } = getLoginTime.actions;

export default getLoginTime.reducer;
