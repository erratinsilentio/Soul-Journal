"use client";
import { Note } from "@/types";
import { noteActionFormik } from "@/utils/useFormik";
import { useNoteMutation } from "@/utils/useNoteMutation";
import { InputSection } from "./InputSection";
import { SaveButton } from "./SaveButton";

export const DailyNoteForm = ({
  dailyNote,
  userID,
}: {
  dailyNote: Note;
  userID: string;
}) => {
  const { addNoteMutation, updateNoteMutation } = useNoteMutation();

  const formik = noteActionFormik(
    dailyNote || {},
    userID,
    addNoteMutation,
    updateNoteMutation
  );

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-8 shadow-2xl shadow-black
    dark:from-emerald-400 dark:via-emerald-400 dark:to-emerald-500 sm:p-16
    "
    >
      <p className="mb-6 text-3xl font-medium text-zinc-200 dark:text-zinc-800">
        Daily note
      </p>
      <InputSection formik={formik} />
      <SaveButton />
    </form>
  );
};
