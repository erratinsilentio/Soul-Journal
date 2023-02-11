"use client";
import { useFormik } from "formik";
import { getPostgreSQLDate } from "./getDate";
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

export const noteActionFormik = (dailyNote: any, notepadID: any) => {
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
      console.log(notepadID);
      addNote(values, dailyNote);
    },
  });

  return formik;
};
