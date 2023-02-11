import * as yup from "yup";
import { InferType } from "yup";

export const goalValidationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  description: yup.string(),
  deadline: yup.string().required(),
});

export type GoalForm = InferType<typeof goalValidationSchema>;
