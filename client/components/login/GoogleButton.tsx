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
      className="btn-success btn-wide btn relative text-xs hover:brightness-110"
    >
      <SiGoogle className="text-lg" />
    </button>
  );
};
