"use client";
import { Profile } from "@/components/settings/Profile";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

export default function Settings() {
  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-4 sm:p-10">
        <Profile />
      </main>
    </ProtectedWrapper>
  );
}
