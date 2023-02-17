import { Goal } from "@/types";
import { GoalButtons } from "./GoalButtons";
import { GoalInfo } from "./GoalInfo";

export const GoalRow = ({ post }: { post: Goal }) => {
  return (
    <li
      key={post.id}
      className="group relative flex flex-row items-center justify-between rounded-md p-3 hover:bg-zinc-700"
    >
      <GoalInfo post={post} />
      <GoalButtons />
    </li>
  );
};
