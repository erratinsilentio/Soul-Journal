"use client";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";

export const Buttons = () => {
  const router = useRouter();

  async function logOut() {
    let { error } = await supabase.auth.signOut();
    router.push("/login");
    return;
  }

  return (
    <section className="mt-7 flex min-w-full flex-col sm:items-center md:items-start">
      <button className="btn my-2 sm:w-80" onClick={logOut}>
        Edit Profile
      </button>
      <button className="btn my-2 sm:w-80" onClick={logOut}>
        Log out
      </button>
      <button className="btn my-2 sm:w-80" onClick={logOut}>
        Delete Account
      </button>
    </section>
  );
};
