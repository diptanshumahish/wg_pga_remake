import { createSlice } from "@reduxjs/toolkit";

interface Note {
  note: string;
  time: string;
}
const init: Note[] = [{ note: "", time: "" }];

const notes = createSlice({
  name: "notes",
  initialState: init,
  reducers: {
    setNotesArray: (state,action) => {
      state = action.payload;
      return state;
    },
    resetNotes: (state) => {
      state = init;
      return state;
    },
  },
});
export const { setNotesArray, resetNotes } = notes.actions;

export default notes.reducer;
