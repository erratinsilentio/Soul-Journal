import * as yup from "yup";
import { InferType } from "yup";

export const goalValidationSchema = yup.object({
  title: yup
    .string()
    .min(3, "Enter minimum 3 characters")
    .max(25)
    .required("This field is required"),
  description: yup.string(),
  deadline: yup.string().required(),
});

export type GoalForm = InferType<typeof goalValidationSchema>;
