"use client";
import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return <div className="text-blue-100"> {date} </div>;
};
