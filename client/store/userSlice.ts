import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/gotrue-js/src/lib/types";

interface userState {
  user: any;
  notepad: any;
  goals: any;
}
const initialState: userState = {
  user: null,
  notepad: null,
  goals: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Session>) => {
      state.user = action.payload;
    },
    setNotepad: (state, action: PayloadAction<Session>) => {
      state.notepad = action.payload;
    },
    setGoals: (state, action: PayloadAction<Session>) => {
      state.goals = action.payload;
    },
  },
});

export const { setUser, setNotepad, setGoals } = userSlice.actions;

export default userSlice.reducer;
