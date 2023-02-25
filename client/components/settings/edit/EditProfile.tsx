import { Loading } from "@/components/loading/Loading";
import { useAppSelector } from "@/store/store";
import { ErrorLoadingWrapper } from "@/utils/ErrorLoadingWrapper";
import { getUser } from "@/utils/api/userActions";
import { useQuery } from "@tanstack/react-query";
import { EditProfileForm } from "./EditProfileForm";

export const EditProfilePage = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery(["user", user?.id], () => getUser(user?.id as string));

  if (profile) {
    return (
      <ErrorLoadingWrapper loading={isLoading} error={error}>
        <section className="flex flex-col items-center rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-4 py-12 shadow-2xl shadow-black sm:p-16 md:items-start">
          <EditProfileForm profile={profile} />
        </section>
      </ErrorLoadingWrapper>
    );
  } else {
    return <Loading />;
  }
};
