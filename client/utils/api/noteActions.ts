import { supabase } from "@/supabase";
import { Note } from "@/types";
import { getPostgreSQLDate } from "../getDate";

export const checkIfDailyNoteExists = async (userID: any) => {
  const currentDate = getPostgreSQLDate();
  const { data, error } = await supabase
    .from("note")
    .select()
    .eq("user_id", userID)
    .eq("date", currentDate)
    .single();

  return data;
};

export const addNote = async (note: Note) => {
  const { data: newNote, error } = await supabase
    .from("note")
    .insert([note])
    .select()
    .single();

  return newNote;
};

export const updateNote = async (note: Note, dailyNote: Note) => {
  const { data: updatedNote, error } = await supabase
    .from("note")
    .update([note])
    .eq("id", dailyNote.id)
    .select()
    .single();

  return updatedNote;
};

export const getAllNotes = async (userID: string) => {
  let { data: notes, error } = await supabase
    .from("note")
    .select()
    .eq("user_id", userID);

  return notes;
};

export const getSingleNote = async (noteID: string) => {
  let { data: note, error } = await supabase
    .from("note")
    .select()
    .eq("id", noteID)
    .single();

  return note;
};
