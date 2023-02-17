"use client";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { getGoal } from "@/utils/goalActions";
import { updateGoalFormik } from "@/utils/useFormik";
import { useGoalMutation } from "@/utils/useGoalMutation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { GoalForm } from "./GoalForm";

export const UpdateGoalForm = ({ id }: { id: string }) => {
  const { updateGoalMutation } = useGoalMutation();

  const {
    data: oldGoal,
    isLoading,
    error,
  } = useQuery(["daily", id], () => getGoal(id));

  const formik = updateGoalFormik(oldGoal, updateGoalMutation);

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <GoalForm formik={formik} type="update" />
    </ErrorLoadingWrapper>
  );
};
