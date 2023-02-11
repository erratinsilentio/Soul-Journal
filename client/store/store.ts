import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";
import notificationReducer from "./notificationSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    auth: authReducer,
    notification: notificationReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
