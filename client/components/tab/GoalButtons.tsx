import { Goal } from "@/types";
import { useGoalMutation } from "@/utils/useGoalMutation";
import { BsThreeDots } from "react-icons/bs";

export const GoalButtons = ({ post }: { post: Goal }) => {
  const { makeGoalDoneMutation, deleteGoalMutation, archiveGoalMutation } =
    useGoalMutation();

  return (
    <section className="flex flex-row items-center justify-evenly p-5">
      <div className="dropdown dropdown-left z-50 mx-5 scale-0 group-hover:scale-100">
        <label tabIndex={0}>
          <BsThreeDots />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a onClick={() => deleteGoalMutation.mutateAsync(post.id)}>
              Delete
            </a>
          </li>
          <li>
            <a onClick={() => archiveGoalMutation.mutateAsync(post)}>Archive</a>
          </li>
        </ul>
      </div>
      <input
        type="checkbox"
        className="checkbox-success checkbox scale-0 group-hover:scale-100"
        checked={post.done ? true : false}
        onClick={() => makeGoalDoneMutation.mutateAsync(post)}
      />
    </section>
  );
};
