import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types";

export const useUser = (session: Session) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        return data;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
};
