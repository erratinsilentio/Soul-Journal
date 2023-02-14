import { supabase } from "@/supabase";
import { Goal } from "@/types";

export const getGoals = async (userID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("user_id", userID);

  console.log("getGoals: ", data, error);

  return data;
};

export const addGoal = async (goal: Goal) => {
  const { data, error } = await supabase
    .from("goal")
    .insert([goal])
    .select()
    .single();

  console.log("add goal: ", data, error);
  return data;
};

export const updateGoal = async (oldGoal: Goal, newGoal: Goal) => {
  const { data, error } = await supabase
    .from("goal")
    .update([newGoal])
    .eq("id", oldGoal.id)
    .select()
    .single();

  console.log("update goal: ", data, error);
  return data;
};
