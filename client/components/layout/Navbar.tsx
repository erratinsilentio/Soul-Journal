"use client";

import { RootState } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";

type SelectedPath = "home" | "goals" | "archive" | "settings";

export const Navbar = () => {
  const menuState = useSelector((state: RootState) => state.menu);
  const [selected, setSelected] = useState<SelectedPath>("home");

  return (
    <nav
      className={`${
        menuState ? "left-0" : "-left-20"
      } fixed top-0 z-10 flex min-h-screen w-16 flex-col items-center bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 py-16 duration-200 sm:left-0 sm:w-20`}
    >
      <Link href="/" onClick={() => setSelected("home")}>
        <CiStickyNote
          className={`text-3xl text-emerald-700 duration-200 hover:text-emerald-500 ${
            selected === "home" && "text-emerald-500"
          }`}
        />
      </Link>
      <Link href="/goals" onClick={() => setSelected("goals")}>
        <CiRead
          className={`mt-14 text-3xl text-emerald-700 duration-200 hover:text-emerald-500 ${
            selected === "goals" && "text-emerald-500"
          }`}
        />
      </Link>
      <Link href="/archive" onClick={() => setSelected("archive")}>
        <CiCalendar
          className={`mt-14 text-3xl text-emerald-700 duration-200 hover:text-emerald-500 ${
            selected === "archive" && "text-emerald-500"
          }`}
        />
      </Link>
      <Link href="/settings" onClick={() => setSelected("settings")}>
        <CiSettings
          className={`mt-14 text-3xl text-emerald-700 duration-200 hover:text-emerald-500 ${
            selected === "settings" && "text-emerald-500"
          }`}
        />
      </Link>
    </nav>
  );
};
