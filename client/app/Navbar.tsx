import Link from "next/link";
import { CiStickyNote, CiSettings, CiRead, CiCalendar } from "react-icons/ci";

export const Navbar = () => {
  return (
    <nav className="fixed z-0 top-0 left-0 flex flex-col py-16 items-center min-h-screen w-20 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900">
      <Link href="/">
        <CiStickyNote className="text-emerald-700 text-3xl duration-200 hover:text-4xl" />
      </Link>
      <Link href="/goals">
        <CiRead className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14" />
      </Link>
      <Link href="/archive">
        <CiCalendar className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14" />
      </Link>
      <Link href="/settings">
        <CiSettings className="text-emerald-700 text-3xl duration-200 hover:text-4xl mt-14" />
      </Link>
    </nav>
  );
};
