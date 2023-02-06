"use client";

import { setNull } from "@/store/notificationSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ErrorAlert } from "./ErrorAlert";
import { SuccessAlert } from "./SuccessAlert";

export const Notification = () => {
  const notificationStatus = useSelector(
    (state: RootState) => state.notification
  );
  const dispatch = useDispatch();

  if (notificationStatus === "Success") {
    setTimeout(() => {
      dispatch(setNull());
    }, 3000);

    return <SuccessAlert />;
  }

  if (notificationStatus === "Error") {
    setTimeout(() => {
      dispatch(setNull());
    }, 3000);

    return <ErrorAlert />;
  }

  return null;
};
