"use client";
import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/store/store";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import GoalTabs from "../tab/GoalTab";
import { testGoalData } from "@/utils/emptyStateData";

export const TabMenu = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals", user?.id], () => getGoals(user?.id as string), {
    enabled: !!user?.id,
  });

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <GoalTabs
        categories={goals?.["This week"].length ? goals : testGoalData}
      />
    </ErrorLoadingWrapper>
  );
};
