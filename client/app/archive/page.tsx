"use client";
import { ArchiveTabs } from "@/components/archive/NotesTable";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

const Archive = () => {
  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full px-2 py-4 sm:p-10">
        <ArchiveTabs />
      </main>
    </ProtectedWrapper>
  );
};

export default Archive;
