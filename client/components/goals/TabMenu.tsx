"use client";

import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../loading/Loading";
import HeadlessTabs from "../tab/Tab";
import { Error } from "../error/Error";
import { useAppSelector } from "@/store/store";

export const TabMenu = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals", user?.id], () => getGoals(user?.id), {
    enabled: !!user?.id,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return <HeadlessTabs categories={goals} />;
};
