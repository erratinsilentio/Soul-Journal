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
    router.push("/login");
    return;
  }

  const showConfirm = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      console.log("confirmed");
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
      <button className="btn my-2 sm:w-80" onClick={showModal}>
        Log out
      </button>
      <button className="btn my-2 sm:w-80" onClick={() => deleteUser(id)}>
        Delete Account
      </button>
    </section>
  );
};
