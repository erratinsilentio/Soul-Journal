import { supabase } from "@/supabase";
import { Goal } from "@/types";
import { categorizeGoals } from "./categorizeGoals";

export const getGoals = async (userID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("user_id", userID);

  let categorizedGoals = categorizeGoals(data);

  return categorizedGoals;
};

export const getAllGoals = async (userID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("user_id", userID);

  return data;
};

export const getAllDoneGoals = async (userID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("user_id", userID)
    .eq("done", true);

  return data;
};

export const getGoal = async (noteID: string) => {
  const { data, error } = await supabase
    .from("goal")
    .select()
    .eq("id", noteID)
    .single();

  return data as Goal;
};

export const addGoal = async (goal: Goal) => {
  const { data, error } = await supabase
    .from("goal")
    .insert([goal])
    .select()
    .single();

  return data as Goal;
};

export const updateGoal = async (oldGoal: Goal, newGoal: Goal) => {
  const { data, error } = await supabase
    .from("goal")
    .update([newGoal])
    .eq("id", oldGoal.id)
    .select()
    .single();

  return data;
};

export const makeGoalDone = async (goal: Goal) => {
  const updatedGoal = { ...goal, done: !goal.done };

  const { data, error } = await supabase
    .from("goal")
    .update([updatedGoal])
    .eq("id", goal.id)
    .select()
    .single();

  return data;
};

export const archiveGoal = async (goal: Goal) => {
  const updatedGoal = { ...goal, archived: true };

  const { data, error } = await supabase
    .from("goal")
    .update([updatedGoal])
    .eq("id", goal.id)
    .select()
    .single();

  return data;
};

export const deleteGoal = async (goalID: string) => {
  const { data, error } = await supabase.from("goal").delete().eq("id", goalID);

  return data;
};
