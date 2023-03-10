import * as yup from "yup";
import { InferType } from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string(),
});

export type loginForm = InferType<typeof loginValidationSchema>;

export const UsernameValidationSchema = yup.object({
  username: yup.string().min(5).max(20).required("You must enter new username"),
});

export type UsernameForm = InferType<typeof UsernameValidationSchema>;
