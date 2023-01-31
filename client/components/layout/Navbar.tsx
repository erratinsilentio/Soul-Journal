"use client";

import { RootState } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavbarIcon } from "./Icon";

export type SelectedPath = "Home" | "Goals" | "Archive" | "Settings";

export const Navbar = () => {
  const menuState = useSelector((state: RootState) => state.menu);
  const [selected, setSelected] = useState<SelectedPath>("Home");

  return (
    <nav
      className={`${
        menuState ? "left-0" : "-left-20"
      } fixed top-0 z-10 flex min-h-screen w-16 flex-col items-center bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 py-16 shadow-2xl shadow-black duration-200 sm:left-0 sm:w-20`}
    >
      <Link href="/" onClick={() => setSelected("Home")}>
        <NavbarIcon icon={<CiStickyNote />} selected={selected} text="Home" />
      </Link>
      <Link href="/goals" onClick={() => setSelected("Goals")}>
        <NavbarIcon icon={<CiRead />} selected={selected} text="Goals" />
      </Link>
      <Link href="/archive" onClick={() => setSelected("Archive")}>
        <NavbarIcon icon={<CiCalendar />} selected={selected} text="Archive" />
      </Link>
      <Link href="/settings" onClick={() => setSelected("Settings")}>
        <NavbarIcon icon={<CiSettings />} selected={selected} text="Settings" />
      </Link>
    </nav>
  );
};
