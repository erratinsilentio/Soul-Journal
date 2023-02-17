"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { RootState, useAppSelector } from "@/store/store";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

export default function Home() {
  const isDark = useAppSelector((state: RootState) => state.theme);

  return (
    <ProtectedWrapper>
      <main
        className={`${
          isDark ? "light" : "dark"
        } z-0 min-h-screen min-w-full p-5 sm:p-10`}
      >
        <DailyNoteForm />
      </main>
    </ProtectedWrapper>
  );
}
