import { setSession } from "@/store/authSlice";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
      } else {
        router.push("/login");
      }
    });
  }, []);

  return <>{children}</>;
};
