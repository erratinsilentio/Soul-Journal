import { supabase } from "@/supabase";
import { User } from "@/types";
import { getAllDoneGoals } from "./goalActions";
import { getAllNotes } from "./noteActions";

export const getUser = async (id: string) => {
  const { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  console.log(user);
  return user as User;
};

export const updateUser = async (newUser: User) => {
  const { data, error } = await supabase
    .from("users")
    .update([newUser])
    .eq("id", newUser.id);

  return data;
};

export const deleteUser = async (id: string) => {
  const { data, error } = await supabase.from("users").delete().eq("id", id);
  return data;
};

export const getNumberOfGoalsAndNotes = async (id: string) => {
  const goals = await getAllDoneGoals(id);
  const notes = await getAllNotes(id);

  return {
    notes: notes?.length || 0,
    goals: goals?.length || 0,
  };
};
