import { createSlice } from "@reduxjs/toolkit";

type DarkMode = true | false;
const initialState: DarkMode = true;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
