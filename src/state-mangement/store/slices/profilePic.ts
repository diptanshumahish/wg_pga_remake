import { createSlice } from "@reduxjs/toolkit";

const init: string = '';

const profilePic = createSlice({
  name: "profilepic",
  initialState: init,
  reducers: {
    updateProfilePic: (state, action) => {
      state = action.payload;
      return state;
    },
    resetProfilePic :(state)=>{
      state = init;
      return state;
    }
  },
});
export const { updateProfilePic,resetProfilePic } = profilePic.actions;

export default profilePic.reducer;