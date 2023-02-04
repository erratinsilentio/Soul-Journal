"use client";
import { supabase } from "@/supabase";
import { useState } from "react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <form onSubmit={handleLogin}>
      <label>email</label>
      <input
        name="email"
        id="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>username</label>
      <input
        name="username"
        id="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>password</label>
      <input
        name="password"
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
