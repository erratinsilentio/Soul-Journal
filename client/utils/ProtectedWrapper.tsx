import { setSession } from "@/store/authSlice";
import { RootState } from "@/store/store";
import { setGoals, setNotepad, setUser } from "@/store/userSlice";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, getNotepad, getUser } from "./userActions";

export const ProtectedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user.user);
  // check for user id, so we would not have request session from supabase?
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch(setSession(session));
        getUser(session.user.id).then((data) => dispatch(setUser(data)));
      } else {
        router.push("/login");
      }
    });
  }, []);

  return <>{children}</>;
};
