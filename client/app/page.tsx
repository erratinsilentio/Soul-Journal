"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { RootState } from "@/store/store";
import { checkIfDailyNoteExists } from "@/utils/noteActions";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

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

  if (isLoading) return <Loading />;
  if (error) return <Error />;

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
