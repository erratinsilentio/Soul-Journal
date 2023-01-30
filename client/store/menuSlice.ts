import { createSlice } from "@reduxjs/toolkit";

type MenuState = true | false;
const initialState: MenuState = true;

export const menuSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
