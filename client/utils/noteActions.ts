import { supabase } from "@/supabase";
import { Note } from "@/types";
import { getPostgreSQLDate } from "./getDate";

export const checkIfDailyNoteExists = async (currentNotepadID: any) => {
  const currentDate = getPostgreSQLDate();

  const { data, error } = await supabase
    .from("note")
    .select()
    .eq("notepad_id", currentNotepadID)
    .eq("date", currentDate)
    .single();

  console.log("daily note: ", data, error);

  return data;
};

export const addNote = async (note: Note, dailyNote: Note) => {
  console.log(note);

  if (dailyNote) {
    const { data: updatedNote, error } = await supabase
      .from("note")
      .update([note])
      .select()
      .single();

    return updatedNote;
  }

  const { data: newNote, error } = await supabase
    .from("note")
    .insert([note])
    .select()
    .single();

  console.log("new note: ", newNote, error);

  return newNote;
};
