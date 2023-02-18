"use client";
import { useAppSelector } from "@/store/store";
import { Buttons } from "./Buttons";
import { Stats } from "./Stats";
import { UserInfo } from "./UserInfo";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <section className="flex flex-col items-center rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-4 py-12 shadow-2xl shadow-black sm:p-16 md:items-start">
      <UserInfo />
      <Stats />
      <Buttons />
    </section>
  );
};
