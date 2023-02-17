import { Goal, Page } from "@/types";
import { GoalButtons } from "./GoalButtons";
import { GoalInfo } from "./GoalInfo";

export const GoalRow = ({ post, page }: { post: Goal; page: Page }) => {
  return (
    <li className="group relative flex flex-row items-center justify-between rounded-md p-3 hover:bg-zinc-700">
      <GoalInfo post={post} />
      <GoalButtons post={post} page={page || "Goals"} />
    </li>
  );
};
