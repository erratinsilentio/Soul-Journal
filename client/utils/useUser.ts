import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export const useUser = (session) => {
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
