import { setSession } from "@/store/authSlice";
import { setUser } from "@/store/userSlice";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./api/userActions";

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
      } else {
        router.push("/login");
      }
    });
  }, []);

  return <>{children}</>;
};
