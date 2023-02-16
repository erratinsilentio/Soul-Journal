import { supabase } from "@/supabase";
import { User } from "@/types";

export const getUser = async (id: string) => {
  let { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  return user as User;
};

export const getNotepad = async (id: string) => {
  let { data: notepad, error } = await supabase
    .from("notepad")
    .select()
    .eq("user_id", id)
    .single();

  if (!notepad) {
    const { data, error } = await supabase
      .from("notepad")
      .insert([{ user_id: id }])
      .select()
      .single();

    console.log("notepad", data, error);
    return data;
  }

  return notepad;
};

export const getGoals = async (id: string) => {
  let { data: goals, error } = await supabase
    .from("goalpad")
    .select()
    .eq("user_id", id)
    .single();

  if (!goals) {
    const { data, error } = await supabase
      .from("goalpad")
      .insert([{ user_id: id }])
      .select()
      .single();

    console.log("goalpad", data, error);

    return data;
  }

  return goals;
};
