import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/gotrue-js/src/lib/types";

type AuthState = Session | null;
const initialState: AuthState = null;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { setSession } = authSlice.actions;

export default authSlice.reducer;
