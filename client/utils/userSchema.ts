import * as yup from "yup";
import { InferType } from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().required("You must enter your email adress"),
});

export type loginForm = InferType<typeof loginValidationSchema>;

export const UsernameValidationSchema = yup.object({
  username: yup.string().min(5).max(11).required("You must enter new username"),
});

export type UsernameForm = InferType<typeof UsernameValidationSchema>;
