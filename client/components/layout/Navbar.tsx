"use client";

import { toggleMenu } from "@/store/menuSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const menuState = useSelector((state: RootState) => state.menu);
  //ikony podswietlone kiedy jestsmy na danej podstronie
  return (
    <nav
      className={`${
        menuState ? "left-0" : "-left-20"
      } fixed top-0 w-16 z-10 sm:left-0 duration-200 flex flex-col py-16 items-center min-h-screen sm:w-20 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900`}
    >
      <Link href="/">
        <CiStickyNote className="text-emerald-700 text-3xl duration-200 hover:text-4xl hover:text-emerald-500" />
      </Link>
      <Link href="/goals">
        <CiRead className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14 hover:text-emerald-500" />
      </Link>
      <Link href="/archive">
        <CiCalendar className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14 hover:text-emerald-500" />
      </Link>
      <Link href="/settings">
        <CiSettings className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14 hover:text-emerald-500" />
      </Link>
    </nav>
  );
};
