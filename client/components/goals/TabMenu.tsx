"use client";
import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import HeadlessTabs from "../tab/Tab";
import { useAppSelector } from "@/store/store";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";

export const TabMenu = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals", user?.id], () => getGoals(user?.id), {
    enabled: !!user?.id,
  });

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <HeadlessTabs categories={goals} />
    </ErrorLoadingWrapper>
  );
};
