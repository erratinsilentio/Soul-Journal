"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { LoginPage } from "@/components/login/Login";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <main className="z-0 min-h-screen min-w-full p-10">
      {!session ? <LoginPage /> : <DailyNoteForm />}
    </main>
  );
}
