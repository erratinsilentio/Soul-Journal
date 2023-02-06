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
    setDark: (state) => {
      state = true;
      return state;
    },
    setLight: (state) => {
      state = false;
      return state;
    },
  },
});

export const { toggleTheme, setDark, setLight } = themeSlice.actions;

export default themeSlice.reducer;
