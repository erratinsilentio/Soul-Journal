import * as yup from "yup";
import { InferType } from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().required("You must enter your email adress"),
});

export type loginForm = InferType<typeof loginValidationSchema>;
