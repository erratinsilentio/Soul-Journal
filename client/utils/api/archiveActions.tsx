import { ArchiveData } from "@/types";
import { getAllGoals } from "./goalActions";
import { getAllNotes } from "./noteActions";

export const getNotesAndGoals = async (userID: string) => {
  const notes = await getAllNotes(userID);
  const goals = await getAllGoals(userID);
  const notesAndGoals = {
    Notes: notes,
    Goals: goals,
  };
  return notesAndGoals as ArchiveData;
};
