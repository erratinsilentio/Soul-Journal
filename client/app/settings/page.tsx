"use client";

import { supabase } from "@/supabase";
import { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rMsg, setRMsg] = useState("");
  const [user, setUser] = useState({});

  const register = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setRMsg(error.message);
    } else {
      setUser(data);
    }
  };

  return (
    <main className="z-0 flex min-h-screen min-w-full items-center justify-center bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900">
      <form>
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
    </main>
  );
};

export default Settings;
