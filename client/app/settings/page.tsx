"use client";
import { Profile } from "@/components/settings/Profile";
import { RootState } from "@/store/store";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useSelector } from "react-redux";

export default function Settings() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-4 sm:p-10">
        <Profile />
      </main>
    </ProtectedWrapper>
  );
}
