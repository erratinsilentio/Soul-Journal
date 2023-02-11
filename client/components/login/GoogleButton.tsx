"use client";
import { supabase } from "@/supabase";
import { SiGoogle } from "react-icons/si";

export const GoogleButton = () => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="btn-wide btn relative text-xs"
    >
      <SiGoogle className="text-md" />
    </button>
  );
};
