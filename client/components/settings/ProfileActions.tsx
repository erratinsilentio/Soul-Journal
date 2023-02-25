"use client";
import { setSession } from "@/store/authSlice";
import { useAppDispatch } from "@/store/store";
import { setUser } from "@/store/userSlice";
import { supabase } from "@/supabase";
import useConfirm from "@/utils/hooks/useConfirm";
import { deleteUser } from "@/utils/api/userActions";
import { useRouter } from "next/navigation";

export const ProfileActions = ({ id }: { id: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { showModal } = useConfirm();

  async function logOut() {
    let { error } = await supabase.auth.signOut();
    dispatch(setSession(null));
    dispatch(setUser(null));

    return;
  }

  const showConfirmToLogout = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      logOut().then(() => {
        router.push("/login");
      });
    }
  };

  const showConfirmToDelete = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      deleteUser(id).then(() => {
        router.push("/login");
      });
    }
  };

  return (
    <section className="mt-7 flex min-w-full flex-col sm:items-center md:items-start">
      <button
        className="btn my-2 sm:w-80"
        onClick={() => router.push("/settings/edit")}
      >
        Edit Profile
      </button>
      <button className="btn my-2 sm:w-80" onClick={showConfirmToLogout}>
        Log out
      </button>
      <button className="btn my-2 sm:w-80" onClick={showConfirmToDelete}>
        Delete Account
      </button>
    </section>
  );
};
