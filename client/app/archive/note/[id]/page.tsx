"use client";
import { InputSection } from "@/components/archive/InputSection";
import { NoteDisplay } from "@/components/archive/NoteDisplay";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { getSingleNote } from "@/utils/noteActions";
import { useQuery } from "@tanstack/react-query";

export default function SingleNotePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery(["note", id], () => getSingleNote(id));

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <main className="z-0 min-h-screen min-w-full p-2 sm:p-10">
        <NoteDisplay note={note} />
      </main>
    </ErrorLoadingWrapper>
  );
}
