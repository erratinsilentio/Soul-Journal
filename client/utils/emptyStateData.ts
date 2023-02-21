import { ArchiveData, Categories } from "@/types";
export const testGoalData: Categories = {
  "This week": [
    {
      id: "1",
      title: "goal #1",
      description: "test goal",
      deadline: "2023-02-19",
      archived: false,
      done: false,
    },
    {
      id: "2",
      title: "goal #2",
      description: "test goal",
      deadline: "2023-02-20",
      archived: false,
      done: false,
    },
  ],
  "This month": [
    {
      id: "3",
      title: "goal #3",
      description: "test goal",
      deadline: "2023-02-28",
      archived: false,
      done: false,
    },
    {
      id: "4",
      title: "goal #4",
      description: "test goal",
      deadline: "2023-03-10",
      archived: false,
      done: false,
    },
  ],
  "This year": [
    {
      id: "5",
      title: "goal #5",
      description: "test goal",
      deadline: "2023-04-19",
      archived: false,
      done: false,
    },
    {
      id: "6",
      title: "goal #6",
      description: "test goal",
      deadline: "2023-05-19",
      archived: false,
      done: false,
    },
  ],
};

export const testArchiveData: ArchiveData = {
  Notes: [
    {
      id: "10",
      date: "2023-01-01",
      meditation: "",
      dream: "",
      exercise: "",
      awake: "",
      goals: "",
      gratitude: "",
      forgiveness: "",
      love: "",
    },
  ],
  Goals: [
    {
      id: "20",
      title: "goal#1",
      description: "",
      deadline: "2023-03-21",
      archived: true,
      done: false,
    },
  ],
};
