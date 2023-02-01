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
    <header className="fixed left-0 top-0 z-40 flex h-7 w-screen items-center justify-end bg-gradient-to-r from-emerald-800 via-slate-700 to-emerald-900 px-6 text-xs shadow-emerald-700">
      <label className="swap-rotate swap fixed top-[-2px] left-4 z-50 scale-50 text-blue-100 sm:hidden">
        <input type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          onClick={() => dispatch(toggleMenu())}
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          onClick={() => dispatch(toggleMenu())}
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {/* <CiGrid2H
        onClick={() => dispatch(toggleMenu())}
        className="fixed top-2 left-6 z-50 text-blue-100 sm:hidden"
      /> */}
      <div className="text-blue-100"> {date} </div>
      <CiGlobe className="ml-4 text-base text-blue-100" />
      <CiDark className="ml-3 cursor-pointer text-base text-blue-100" />
    </header>
  );
};
