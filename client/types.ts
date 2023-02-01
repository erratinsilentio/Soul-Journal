export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  notes: Note[];
  goals: Goal[];
  streak: number;
}

export interface Note {
  id: string;
  user: User;
  date: string;
  meditation: string;
  dream: string;
  exercise: string;
  awake: string;
  goals: Goal[];
  gratitude: string;
  forgiveness: string;
  love: string;
}

export interface Goal {
  id: string;
  user: User;
  title: string;
  description: string;
  deadline: string;
  notes: Note;
}
