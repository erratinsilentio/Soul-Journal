"use client";

import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";

export const Header = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <header className="fixed z-10 top-0 w-screen h-7 flex items-center justify-end px-6 text-xs bg-gradient-to-r from-emerald-800 via-gray-700 to-emerald-900 shadow-sm">
      <div className="text-emerald-100"> {date} </div>
      <CiGlobe className="text-emerald-100 text-base ml-4" />
    </header>
  );
};
