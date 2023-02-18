"use client";
import { supabase } from "@/supabase";
import useConfirm from "@/utils/useConfirm";
import { deleteUser } from "@/utils/userActions";
import { useRouter } from "next/navigation";

export const Buttons = ({ id }: { id: string }) => {
  const router = useRouter();
  const { showModal } = useConfirm();

  async function logOut() {
    let { error } = await supabase.auth.signOut();
    return;
  }

  const showConfirmToLogin = async () => {
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
      <button className="btn my-2 sm:w-80" onClick={showConfirmToLogin}>
        Log out
      </button>
      <button className="btn my-2 sm:w-80" onClick={showConfirmToDelete}>
        Delete Account
      </button>
    </section>
  );
};
