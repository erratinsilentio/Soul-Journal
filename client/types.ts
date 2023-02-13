export interface User {
  id?: string;
  email: string;
  streak?: number;
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
}
