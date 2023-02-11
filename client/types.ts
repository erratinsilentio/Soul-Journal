export interface User {
  id?: string;
  email: string;
  streak?: number;
}

export interface Notepad {
  id: string;
  user_id: string;
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
  notepad_id?: string;
}

export interface Goals {
  id: string;
  user_id: string;
}

export interface Goal {
  id?: string;
  title: string;
  description: string;
  deadline: string;
  goals_id?: string;
}
