import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = true | false;
const initialState = null;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSession } = authSlice.actions;

export default authSlice.reducer;
