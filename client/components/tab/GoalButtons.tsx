import { Goal, Page } from "@/types";
import useConfirm from "@/utils/useConfirm";
import { useGoalMutation } from "@/utils/useGoalMutation";
import { BsThreeDots } from "react-icons/bs";

export const GoalButtons = ({ post, page }: { post: Goal; page: Page }) => {
  const { showModal } = useConfirm();
  const { makeGoalDoneMutation, deleteGoalMutation, archiveGoalMutation } =
    useGoalMutation();

  const showConfirmToDelete = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      deleteGoalMutation.mutateAsync(post.id);
    }
  };

  const showConfirmToArchive = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      archiveGoalMutation.mutateAsync(post);
    }
  };

  if (!post.user_id) return;

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
            <a onClick={showConfirmToDelete}>Delete</a>
          </li>
          {page !== "Archive" && (
            <li>
              <a onClick={showConfirmToArchive}>Archive</a>
            </li>
          )}
        </ul>
      </div>
      <input
        type="checkbox"
        className="checkbox-success checkbox scale-0 group-hover:scale-100"
        checked={post.done ? true : false}
        disabled={page === "Archive" ? true : false}
        onClick={() => makeGoalDoneMutation.mutateAsync(post)}
      />
    </section>
  );
};
