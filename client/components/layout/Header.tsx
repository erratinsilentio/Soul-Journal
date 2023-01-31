"use client";

import { toggleMenu } from "@/store/menuSlice";
import { useEffect, useState } from "react";
import { CiGlobe, CiGrid2H, CiLight, CiDark } from "react-icons/ci";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [date, setDate] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <header className="fixed z-40 left-0 top-0 w-screen h-7 flex items-center justify-end px-6 text-xs bg-gradient-to-r from-emerald-800 via-gray-700 to-emerald-900 shadow-sm">
      <CiGrid2H
        onClick={() => dispatch(toggleMenu())}
        className="fixed top-2 left-6 z-50 text-emerald-100 sm:hidden"
      />
      <div className="text-emerald-100"> {date} </div>
      <CiGlobe className="text-emerald-100 text-base ml-4" />
      <CiDark className="text-emerald-100 text-base ml-3 cursor-pointer" />
    </header>
  );
};
