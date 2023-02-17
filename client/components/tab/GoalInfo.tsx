import { Goal } from "@/types";
import Link from "next/link";

export const GoalInfo = ({ post }: { post: Goal }) => {
  return (
    <Link href={`/goals/${post.id}`}>
      <h3 className="px-2 text-sm font-medium leading-5">{post.title}</h3>

      <ul className="mt-1 flex space-x-1 px-2 text-xs font-normal leading-4 text-gray-500">
        <li>&middot;</li>
        <li>{post.deadline}</li>
        <li>&middot;</li>
      </ul>
    </Link>
  );
};
