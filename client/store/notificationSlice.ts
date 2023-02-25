import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Notification = { notification: "Success" | "Error" | null };
const initialState: Notification = {
  notification: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.notification = "Success";
      return state;
    },
    setError: (state) => {
      state.notification = "Error";
      return state;
    },
    setNull: (state) => {
      state.notification = null;
      return state;
    },
  },
});

export const { setSuccess, setError, setNull } = notificationSlice.actions;

export default notificationSlice.reducer;
