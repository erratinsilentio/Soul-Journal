"use client";
import { useEffect } from "react";
import { setNull } from "@/store/notificationSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { ErrorAlert } from "./ErrorAlert";
import { SuccessAlert } from "./SuccessAlert";

export const Notification = () => {
  const notificationStatus = useAppSelector(
    (state) => state.notification.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setNull());
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [notificationStatus]);

  if (notificationStatus === "Success") {
    return <SuccessAlert />;
  }
  if (notificationStatus === "Error") {
    return <ErrorAlert />;
  }
  return null;
};
