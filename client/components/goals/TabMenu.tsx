"use client";

import { useEffect, useState } from "react";
import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../loading/Loading";
import { categorizeGoals } from "@/utils/categorizeGoals";
import HeadlessTabs from "../tab/Tab";

export const TabMenu = ({ userID }: { userID: string }) => {
  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals"], () => getGoals(userID));

  if (isLoading) return <Loading />;
  if (error) return <p>error</p>;

  return <HeadlessTabs categories={goals} />;
};
