"use client";

import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../loading/Loading";
import HeadlessTabs from "../tab/Tab";
import { Error } from "../error/Error";

export const TabMenu = ({ userID }: { userID: string }) => {
  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals"], () => getGoals(userID));

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return <HeadlessTabs categories={goals} />;
};
