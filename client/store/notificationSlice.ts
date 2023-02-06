import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Notification = "Success" | "Error" | null;
const initialState: Notification = null;

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSuccess: (state) => {
      state = "Success";
      return state;
    },
    setError: (state) => {
      state = "Error";
      return state;
    },
    setNull: (state) => {
      state = null;
      return state;
    },
  },
});

export const { setSuccess, setError, setNull } = notificationSlice.actions;

export default notificationSlice.reducer;
