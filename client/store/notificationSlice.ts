import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Notification = "Success" | "Error" | null;
const initialState: Notification = null;

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSuccess: (state) => {
      state = "Success";
      setTimeout(() => {
        state = null;
      }, 3000);
      return state;
    },
    setError: (state) => {
      state = "Error";
      setTimeout(() => {
        state = null;
      }, 3000);
      return state;
    },
  },
});

export const { setSuccess, setError } = notificationSlice.actions;

export default notificationSlice.reducer;
