"use client";
import { RootState, useAppSelector } from "@/store/store";
import { checkIfDailyNoteExists } from "@/utils/noteActions";
import { noteActionFormik } from "@/utils/useFormik";
import { useNoteMutation } from "@/utils/useNoteMutation";
import { useQuery } from "@tanstack/react-query";
import { InputSection } from "./InputSection";
import { SaveButton } from "./SaveButton";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";

export const DailyNoteForm = () => {
  const { addNoteMutation, updateNoteMutation } = useNoteMutation();
  const user = useAppSelector((state: RootState) => state.user.user);

  const {
    data: dailyNote,
    isLoading,
    error,
  } = useQuery(["daily", user?.id], () => checkIfDailyNoteExists(user?.id));

  const formik = noteActionFormik(
    dailyNote || {},
    user?.id,
    addNoteMutation,
    updateNoteMutation
  );

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <form
        onSubmit={formik.handleSubmit}
        className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-8 shadow-2xl shadow-black"
      >
        <p className="mb-6 text-3xl font-medium text-zinc-200 dark:text-zinc-800">
          Daily note
        </p>
        <InputSection formik={formik} />
        <SaveButton />
      </form>
    </ErrorLoadingWrapper>
  );
};
