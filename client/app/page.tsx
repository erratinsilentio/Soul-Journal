"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

export default function Home() {
  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-5 sm:p-10">
        <DailyNoteForm />
      </main>
    </ProtectedWrapper>
  );
}
