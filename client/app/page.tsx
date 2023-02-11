"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { RootState } from "@/store/store";
import { checkIfDailyNoteExists } from "@/utils/noteActions";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

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

  if (isLoading) {
    return (
      <main className="items z-0 flex min-h-screen min-w-full justify-center p-5 sm:p-10">
        <RotatingLines
          strokeColor="#047857"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </main>
    );
  }

  if (error) return <p>An error occurred:</p>;

  console.log("notepad", currentNotepad);

  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-5 sm:p-10">
        <DailyNoteForm
          dailyNote={dailyNoteData}
          notepad={currentNotepad?.id}
          isDark={isDark}
        />
      </main>
    </ProtectedWrapper>
  );
}
