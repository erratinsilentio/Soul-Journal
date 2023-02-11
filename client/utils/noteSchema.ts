import * as yup from "yup";
import { InferType } from "yup";

export const noteValidationSchema = yup.object({
  meditation: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  dream: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  exercise: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  awake: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  goals: yup.string(),
  gratitude: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  forgiveness: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
  love: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .required("This field is required"),
});

export type NoteForm = InferType<typeof noteValidationSchema>;
