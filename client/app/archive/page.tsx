"use client";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

const Archive = () => {
  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900">
        archive..
      </main>
    </ProtectedWrapper>
  );
};

export default Archive;
