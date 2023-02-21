// @ts-nocheck
import { Goal } from "@/types";

export function categorizeGoals(tasks: Goal[]) {
  let sorted = {
    "This week": [],
    "This month": [],
    "This year": [],
  };
  tasks.forEach((task) => {
    const deadline = new Date(task.deadline);
    const now = new Date();
    const endOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + (7 - now.getDay())
    );
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 0);
    if (deadline <= endOfWeek) {
      sorted["This week"].push(task);
    } else if (deadline <= endOfMonth) {
      sorted["This month"].push(task);
    } else if (deadline <= endOfYear) {
      sorted["This year"].push(task);
    }
  });
  return sorted;
}
