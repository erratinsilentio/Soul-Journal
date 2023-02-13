"use client";
import { Goal, Note } from "@/types";
import { UseMutationResult } from "@tanstack/react-query/build/lib/types";
import { useFormik } from "formik";
import { getPostgreSQLDate } from "./getDate";
import { addGoal, updateGoal } from "./goalActions";
import { goalValidationSchema } from "./goalSchema";
import { addNote, updateNote } from "./noteActions";
import { noteValidationSchema } from "./noteSchema";
import { loginValidationSchema } from "./userSchema";

interface LoginForm {
  mail: string;
}

export const loginActionFormik = (
  handleLogin: (mail: string) => Promise<void>
) => {
  const formik = useFormik<LoginForm>({
    initialValues: {
      mail: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: LoginForm) => {
      console.log(values);
      handleLogin(values.mail);
    },
  });

  return formik;
};

export const noteActionFormik = (
  dailyNote: Note,
  userID: string,
  addNoteMutation: UseMutationResult<any, unknown, Note, unknown>,
  updateNoteMutation: UseMutationResult<any, unknown, [Note, Note], unknown>
) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      date: getPostgreSQLDate(),
      meditation: dailyNote.meditation ?? "",
      dream: dailyNote.dream ?? "",
      exercise: dailyNote.exercise ?? "",
      awake: dailyNote.awake ?? "",
      goals: "",
      gratitude: dailyNote.gratitude ?? "",
      forgiveness: dailyNote.forgiveness ?? "",
      love: dailyNote.love ?? "",
      user_id: userID,
    },
    validationSchema: noteValidationSchema,
    onSubmit: async (values) => {
      console.log(values, dailyNote);
      dailyNote.date
        ? updateNoteMutation.mutate([values, dailyNote])
        : addNoteMutation.mutate(values);
    },
  });

  return formik;
};

export const addGoalFormik = (userID: string) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      deadline: "",
      user_id: userID,
    },
    validationSchema: goalValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      addGoal(values);
    },
  });

  return formik;
};

export const updateGoalFormik = (oldGoal: Goal, userID: string) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: oldGoal.title,
      description: oldGoal.description,
      deadline: oldGoal.deadline,
      user_id: userID,
    },
    validationSchema: goalValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      updateGoal(oldGoal, values);
    },
  });

  return formik;
};
