import { setError, setSuccess } from "@/store/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { queryClient } from "@/utils/QueryClient";
import { updateProfileFormik } from "@/utils/useFormik";
import { updateUser } from "@/utils/userActions";
import { User } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const EditProfileForm = ({ profile }: { profile: User }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const updateUserMutation = useMutation(
    async (values: User) => {
      return updateUser(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        dispatch(setSuccess());
        router.push("/settings");
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const formik = updateProfileFormik(profile, updateUserMutation);

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <p className="mb-6 text-3xl font-medium text-zinc-200 dark:text-zinc-800">
        Edit Profile
      </p>
      <p className="py-6 text-2xl font-extralight text-zinc-200">Username:</p>
      <input
        name="username"
        value={formik.values["username"]}
        onChange={formik.handleChange}
        placeholder="your username..."
        disabled={false}
        type="text"
        className="input-bordered input-accent input w-full max-w-xs"
        minLength={5}
        maxLength={11}
      />
      <button
        type="submit"
        className="btn-accent btn-active btn-wide btn my-3 mt-7"
      >
        SAVE
      </button>
      <button
        onClick={() => router.push("/settings")}
        type="button"
        className="btn-outline btn-accent btn"
      >
        Go Back
      </button>
    </form>
  );
};
