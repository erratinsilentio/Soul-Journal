"use client";
import { RootState } from "@/store/store";
import { supabase } from "@/supabase";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Settings() {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  async function logOut() {
    let { error } = await supabase.auth.signOut();
    router.push("/login");
    return;
  }

  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-10">
        logged in as: {user?.id}
        <button className="btn-wide btn" onClick={logOut}>
          Log out
        </button>
      </main>
    </ProtectedWrapper>
  );
}
