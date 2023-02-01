"use client";

import { RootState } from "@/store/store";
import { CiLight, CiDark } from "react-icons/ci";
import { useSelector } from "react-redux";

export const ThemeButton = () => {
  const darkMode = useSelector((state: RootState) => state.theme);

  if (!darkMode)
    return <CiLight className="ml-4 cursor-pointer text-base text-blue-100" />;

  return <CiDark className="ml-4 cursor-pointer text-base text-blue-100" />;
};
