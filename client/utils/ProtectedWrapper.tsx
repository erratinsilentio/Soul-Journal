import { setSession } from "@/store/authSlice";
import { setGoals, setNotepad, setUser } from "@/store/userSlice";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGoals, getNotepad, getUser } from "./userActions";

export const ProtectedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch(setSession(session));
        getUser(session.user.id).then((data) => dispatch(setUser(data)));
        getNotepad(session.user.id).then((data) => dispatch(setNotepad(data)));
        getGoals(session.user.id).then((data) => dispatch(setGoals(data)));
      } else {
        router.push("/login");
      }
    });
  }, []);

  return <>{children}</>;
};
