
import { createSlice } from "@reduxjs/toolkit";

const init: number = 0;

const countTime = createSlice({
  name: "countTime",
  initialState: init,
  reducers: {
    updateTime: (state) => {
      state = state++;
      return state;
    },
    resetTime:(state)=>{
        state = 0;
        return state;
    }
  },
});
export const { updateTime } = countTime.actions;

export default countTime.reducer;
