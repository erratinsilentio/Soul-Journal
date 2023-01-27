import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";

export const Navbar = () => {
  return (
    <nav className="fixed z-0 top-0 left-0 flex flex-col py-16 items-center min-h-screen w-20 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900">
      <CiStickyNote className="text-emerald-700 text-3xl" />
      <CiRead className="text-emerald-700 text-3xl mt-14" />
      <CiCalendar className="text-emerald-700 text-3xl mt-14" />
      <CiSettings className="text-emerald-700 text-3xl mt-14" />
    </nav>
  );
};
