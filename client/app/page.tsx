"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { RootState, useAppSelector } from "@/store/store";
import { checkIfDailyNoteExists } from "@/utils/noteActions";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useQuery } from "@tanstack/react-query";
import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

export default function Home() {
  const isDark = useAppSelector((state: RootState) => state.theme);
  const user = useAppSelector((state: RootState) => state.user.user);

  const {
    data: dailyNoteData,
    isLoading,
    error,
  } = useQuery(["daily", user?.id], () => checkIfDailyNoteExists(user?.id));

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <ProtectedWrapper>
      <main
        className={`${
          isDark ? "light" : "dark"
        } z-0 min-h-screen min-w-full p-5 sm:p-10`}
      >
        <DailyNoteForm dailyNote={dailyNoteData} userID={user?.id} />
      </main>
    </ProtectedWrapper>
  );
}
