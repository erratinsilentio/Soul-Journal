"use client";
import { useAppSelector } from "@/store/store";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { getUser } from "@/utils/api/userActions";
import { useQuery } from "@tanstack/react-query";
import { ProfileActions } from "./ProfileActions";
import { Stats } from "./Stats";
import { UserInfo } from "./UserInfo";
import { motion } from "framer-motion";
import { Loading } from "../loading/Loading";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery(["user", user?.id], () => getUser(user?.id as string));

  if (profile && user) {
    return (
      <ErrorLoadingWrapper loading={isLoading} error={error}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-4 py-12 shadow-2xl shadow-black sm:p-16 md:items-start"
        >
          <UserInfo user={profile} />
          <Stats id={user?.id} />
          <ProfileActions id={user?.id} />
        </motion.section>
      </ErrorLoadingWrapper>
    );
  } else {
    return <Loading />;
  }
};
