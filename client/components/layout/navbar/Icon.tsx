"use client";
import { closeMenu } from "@/store/menuSlice";
import { useAppDispatch } from "@/store/store";
import { ReactElement } from "react";
import { SelectedPath } from "./Navbar";

export const NavbarIcon = ({
  icon,
  text,
}: {
  icon: ReactElement;
  text: SelectedPath;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(closeMenu())}
      className="group relative my-7 text-3xl text-emerald-700 duration-200 hover:scale-110 hover:text-emerald-500 dark:text-emerald-300"
    >
      {icon}
      <span className="absolute -top-2 left-14 z-50 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-zinc-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 sm:group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};
