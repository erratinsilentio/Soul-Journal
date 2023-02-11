import { supabase } from "@/supabase";

export const getUser = async (id: string) => {
  let { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  return user;
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
      .insert([{ user_id: id, note_id: null }])
      .select()
      .single();

    return data;
  }

  return notepad;
};

export const getGoals = async (id: string) => {
  let { data: goals, error } = await supabase
    .from("goals")
    .select()
    .eq("user_id", id)
    .single();

  if (!goals) {
    const { data, error } = await supabase
      .from("goals")
      .insert([{ user_id: id, goal_id: null }])
      .select()
      .single();

    return data;
  }

  return goals;
};
