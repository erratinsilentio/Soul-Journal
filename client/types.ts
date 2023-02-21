export interface Profile {
  id: string;
  email: string;
  username: string;
  image?: string | null;
}

export interface Note {
  id?: string;
  date?: string;
  meditation: string;
  dream: string;
  exercise: string;
  awake: string;
  goals: any;
  gratitude: string;
  forgiveness: string;
  love: string;
  user_id?: string;
}

export interface Goal {
  id?: string;
  title: string;
  description: string;
  deadline: string;
  user_id?: string;
  done?: boolean;
  archived?: boolean;
}

export interface Categories {
  "This week": Goal[];
  "This month": Goal[];
  "This year": Goal[];
}

export interface ArchiveData {
  Goals: Goal[];
  Notes: Note[];
}

export type Page = "Home" | "Goals" | "Archive" | "Settings";

export type ModalType = "Goal" | "Confirm";
