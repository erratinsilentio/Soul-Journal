"use client";
import { closeMenu } from "@/store/menuSlice";
import { RootState, useAppDispatch } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavbarIcon } from "./Icon";

export type SelectedPath = "Home" | "Goals" | "Archive" | "Settings" | null;

export const Navbar = () => {
  const menuState = useSelector((state: RootState) => state.menu);
  const authState = useSelector((state: RootState) => state.auth);
  const isDark = useSelector((state: RootState) => state.theme);

  const [selected, setSelected] = useState<SelectedPath>(null);

  const dispatch = useAppDispatch();

  return (
    <div className={isDark ? "light" : "dark"}>
      <nav
        className={`${menuState ? "left-0" : "-left-20"} ${
          authState ? "" : "pointer-events-none"
        } fixed top-0 z-10 flex min-h-screen w-16 flex-col items-center bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 py-16 shadow-2xl shadow-black duration-200  dark:via-emerald-500
        dark:to-emerald-600 sm:left-0 sm:w-20
        `}
      >
        <Link href="/" onClick={() => setSelected("Home")}>
          <NavbarIcon
            icon={
              <CiStickyNote
                className={`${selected === "Home" && "text-emerald-500"}`}
                onClick={() => dispatch(closeMenu())}
              />
            }
            text="Home"
          />
        </Link>
        <Link href="/goals" onClick={() => setSelected("Goals")}>
          <NavbarIcon
            icon={
              <CiRead
                className={`${selected === "Goals" && "text-emerald-500"}`}
                onClick={() => dispatch(closeMenu())}
              />
            }
            text="Goals"
          />
        </Link>
        <Link href="/archive" onClick={() => setSelected("Archive")}>
          <NavbarIcon
            icon={
              <CiCalendar
                className={`${selected === "Archive" && "text-emerald-500"}`}
                onClick={() => dispatch(closeMenu())}
              />
            }
            text="Archive"
          />
        </Link>
        <Link href="/settings" onClick={() => setSelected("Settings")}>
          <NavbarIcon
            icon={
              <CiSettings
                className={`${selected === "Settings" && "text-emerald-500"}`}
                onClick={() => dispatch(closeMenu())}
              />
            }
            text="Settings"
          />
        </Link>
      </nav>
    </div>
  );
};
