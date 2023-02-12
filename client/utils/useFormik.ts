"use client";
import { Goal, Note } from "@/types";
import { useFormik } from "formik";
import { getPostgreSQLDate } from "./getDate";
import { addGoal, updateGoal } from "./goalActions";
import { goalValidationSchema } from "./goalSchema";
import { addNote } from "./noteActions";
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

export const noteActionFormik = (dailyNote: Note, notepadID: any) => {
  const formik = useFormik({
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
      notepad_id: notepadID,
    },
    // validationSchema: noteValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // addNote(values, dailyNote);
    },
  });

  return formik;
};

export const addGoalFormik = (goalpad: any) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      deadline: "",
      goalpad_id: goalpad,
    },
    validationSchema: goalValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      addGoal(values);
    },
  });

  return formik;
};

export const updateGoalFormik = (oldGoal: Goal, goalpadID: string) => {
  const formik = useFormik({
    initialValues: {
      title: oldGoal.title,
      description: oldGoal.description,
      deadline: oldGoal.deadline,
      goalpad_id: goalpadID,
    },
    validationSchema: goalValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      updateGoal(oldGoal, values);
    },
  });

  return formik;
};
