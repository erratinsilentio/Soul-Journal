"use client";
import { DailyNoteForm } from "@/components/home/DailyNoteForm";
import { setSession } from "@/store/authSlice";
import { RootState } from "@/store/store";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentSession = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });
  }, []);

  console.log("kkk", currentSession);
  if (!currentSession) router.push("/login");

  return (
    <main className="z-0 min-h-screen min-w-full p-5 sm:p-10">
      <DailyNoteForm />
    </main>
  );
}
