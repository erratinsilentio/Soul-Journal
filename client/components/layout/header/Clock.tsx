"use client";
import { useAppSelector } from "@/store/store";
import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState<string>("");
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return user && <div className="text-blue-100"> {date} </div>;
};
