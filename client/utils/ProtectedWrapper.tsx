import { setSession } from "@/store/authSlice";
import { setUser } from "@/store/userSlice";
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
        getUser(session.user.id);
      } else {
        router.push("/login");
      }
    });
  }, []);

  const getUser = async (id: string) => {
    let { data: user, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();

    dispatch(setUser(user));
    console.log(user);
    return user;
  };

  return <>{children}</>;
};
