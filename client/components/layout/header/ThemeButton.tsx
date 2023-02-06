"use client";

import { RootState } from "@/store/store";
import { setDark, setLight } from "@/store/themeSlice";
import { CiLight, CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export const ThemeButton = () => {
  const darkMode = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return darkMode ? (
    <CiDark
      className="ml-4 cursor-pointer text-base text-blue-100"
      onClick={() => dispatch(setLight())}
    />
  ) : (
    <CiLight
      className="ml-4 cursor-pointer text-base text-blue-100"
      onClick={() => dispatch(setDark())}
    />
  );
};
