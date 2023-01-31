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
    <header className="fixed left-0 top-0 z-40 flex h-7 w-screen items-center justify-end bg-gradient-to-r from-emerald-800 via-gray-700 to-emerald-900 px-6 text-xs shadow-sm">
      <CiGrid2H
        onClick={() => dispatch(toggleMenu())}
        className="fixed top-2 left-6 z-50 text-emerald-100 sm:hidden"
      />
      <div className="text-emerald-100"> {date} </div>
      <CiGlobe className="ml-4 text-base text-emerald-100" />
      <CiDark className="ml-3 cursor-pointer text-base text-emerald-100" />
    </header>
  );
};
