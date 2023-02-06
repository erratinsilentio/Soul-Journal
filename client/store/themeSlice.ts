import { createSlice } from "@reduxjs/toolkit";

type DarkMode = true | false;
const initialState: DarkMode = true;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
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

export const { setDark, setLight } = themeSlice.actions;

export default themeSlice.reducer;
