export interface User {
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
  done: boolean;
}

export type Page = "Home" | "Goals" | "Archive" | "Settings";
