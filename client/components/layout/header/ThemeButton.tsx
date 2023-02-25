"use client";

import { RootState } from "@/store/store";
import { setDark, setLight } from "@/store/themeSlice";
import { CiLight, CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export const ThemeButton = () => {
  const darkMode = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const regularStyles = "ml-4 cursor-pointer text-base text-blue-100";

  return darkMode ? (
    <CiDark
      className={`${regularStyles}`}
      onClick={() => dispatch(setLight())}
    />
  ) : (
    <CiLight
      className={`${regularStyles}`}
      onClick={() => dispatch(setDark())}
    />
  );
};
