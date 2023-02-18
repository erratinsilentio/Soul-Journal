"use client";

import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { getNumberOfGoalsAndNotes } from "@/utils/userActions";
import { useQuery } from "@tanstack/react-query";

export const Stats = ({ id }: { id: string }) => {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery(["user", id], () => getNumberOfGoalsAndNotes(id));

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <section className="stats mt-7 py-4">
        <div className="flex flex-col px-7">
          <p className="text-md">Notes Created</p>
          <p className="text-3xl">{stats?.notes}</p>
        </div>
        <div className="flex flex-col px-7">
          <p className="text-md">Goals Done</p>
          <p className="text-3xl">{stats?.goals}</p>
        </div>
      </section>
    </ErrorLoadingWrapper>
  );
};
