import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/gotrue-js/src/lib/types";

type AuthState = { session: Session | null };
const initialState: AuthState = {
  session: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
      return state;
    },
  },
});

export const { setSession } = authSlice.actions;

export default authSlice.reducer;
