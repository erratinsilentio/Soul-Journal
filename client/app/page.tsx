"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { RootState } from "@/store/store";
import { checkIfDailyNoteExists } from "@/utils/noteActions";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export default function Home() {
  const isDark = useSelector((state: RootState) => state.theme);
  const currentNotepad = useSelector((state: RootState) => state.user.notepad);

  const {
    data: dailyNoteData,
    isLoading,
    error,
  } = useQuery(["daily", currentNotepad?.id], () =>
    checkIfDailyNoteExists(currentNotepad?.id)
  );

  if (isLoading) return <p>loading</p>;
  if (error) return <p>An error occurred:</p>;

  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-5 sm:p-10">
        <DailyNoteForm
          dailyNote={dailyNoteData}
          notepad={currentNotepad}
          isDark={isDark}
        />
      </main>
    </ProtectedWrapper>
  );
}
