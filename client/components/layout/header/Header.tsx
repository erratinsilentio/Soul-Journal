import { Clock } from "./Clock";
import { Hamburger } from "./Hamburger";
import { ThemeButton } from "./ThemeButton";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-40 flex h-7 w-screen items-center justify-end bg-gradient-to-r from-emerald-800 via-slate-700 to-emerald-900 px-6 text-xs shadow-emerald-700">
      <Hamburger />
      <Clock />
      <ThemeButton />
    </header>
  );
};
