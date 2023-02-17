import { supabase } from "@/supabase";
import { Goal } from "@/types";
import { categorizeGoals } from "./categorizeGoals";

export const getGoals = async (userID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("user_id", userID);

  console.log("getGoals: ", data, error);

  let categorizedGoals = categorizeGoals(data);

  return categorizedGoals;
};

export const getGoal = async (noteID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("id", noteID)
    .single();

  console.log("getGoal: ", data, error);

  return data as Goal;
};

export const addGoal = async (goal: Goal) => {
  const { data, error } = await supabase
    .from("goal")
    .insert([goal])
    .select()
    .single();

  console.log("add goal: ", data, error);
  return data as Goal;
};

export const updateGoal = async (oldGoal: Goal, newGoal: Goal) => {
  console.log(oldGoal, newGoal);
  const { data, error } = await supabase
    .from("goal")
    .update([newGoal])
    .eq("id", oldGoal.id)
    .select()
    .single();

  console.log("update goal: ", data, error);
  return data;
};
