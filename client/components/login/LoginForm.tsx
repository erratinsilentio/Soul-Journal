"use client";
import { supabase } from "@/supabase";
import { useState } from "react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      console.log(email);
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      console.log("success");
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleLogin} className="flex flex-col">
      <input
        type="text"
        placeholder="email..."
        className="input-bordered input-accent input my-5 w-full max-w-xs"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn-wide btn">
        Send Link
      </button>{" "}
    </form>
  );
};
