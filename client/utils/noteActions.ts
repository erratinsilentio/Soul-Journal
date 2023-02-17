import { supabase } from "@/supabase";
import { Note } from "@/types";
import { getPostgreSQLDate } from "./getDate";

export const checkIfDailyNoteExists = async (userID: any) => {
  const currentDate = getPostgreSQLDate();

  const { data, error } = await supabase
    .from("note")
    .select()
    .eq("user_id", userID)
    .eq("date", currentDate)
    .single();

  console.log("get daily note: ", data, error);

  return data;
};

export const addNote = async (note: Note) => {
  console.log("note from add note", note);

  const { data: newNote, error } = await supabase
    .from("note")
    .insert([note])
    .select()
    .single();

  console.log("new note from add note: ", newNote, error);

  return newNote;
};

export const updateNote = async (note: Note, dailyNote: Note) => {
  console.log("note from update note", note);

  const { data: updatedNote, error } = await supabase
    .from("note")
    .update([note])
    .eq("id", dailyNote.id)
    .select()
    .single();

  console.log("new note from update note", error, updatedNote);
  return updatedNote;
};

export const getAllNotes = async (userID: string) => {
  let { data: notes, error } = await supabase
    .from("note")
    .select()
    .eq("user_id", userID);

  return notes;
};
