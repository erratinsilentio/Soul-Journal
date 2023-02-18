import { createSlice } from "@reduxjs/toolkit";

type MenuState = true | false;
const initialState: MenuState = false;

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state = !state;
      return state;
    },
    closeMenu: (state) => {
      state = false;
      return state;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
