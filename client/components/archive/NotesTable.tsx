"use client";
import { useAppSelector } from "@/store/store";
import { getNotesAndGoals } from "@/utils/archiveActions";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { useQuery } from "@tanstack/react-query";
import HeadlessTabs from "../tab/Tab";

export const ArchiveTabs = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: notesAndGoals,
    isLoading,
    error,
  } = useQuery(["daily", user?.id], () => getNotesAndGoals(user?.id));

  return (
    <ErrorLoadingWrapper loading={isLoading} error={error}>
      <HeadlessTabs categories={notesAndGoals} />
    </ErrorLoadingWrapper>
  );
};
