import { setError, setSuccess } from "@/store/notificationSlice";
import { Goal } from "@/types";
import { addGoal } from "@/utils/goalActions";
import { queryClient } from "@/utils/QueryClient";
import { addGoalFormik } from "@/utils/useFormik";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const AddGoalForm = ({ userID }: { userID: string }) => {
  const dispatch = useDispatch();

  const addGoalMutation = useMutation(
    async (values: Goal) => {
      return addGoal(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["goals"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );
  const formik = addGoalFormik(userID, addGoalMutation);

  return (
    <form className="flex flex-col py-8 px-14" onSubmit={formik.handleSubmit}>
      <p className="my-3 text-3xl font-medium text-zinc-200">New Goal</p>
      <input
        id="title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values["title"]}
        type="text"
        placeholder="Goal title..."
        className="input-bordered input my-2 w-full max-w-xs bg-zinc-800 font-light"
      />
      <textarea
        className="input-bordered textarea my-2 bg-zinc-800 font-light"
        placeholder="Description"
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values["description"]}
      ></textarea>
      <label className="mt-2 font-normal italic text-zinc-300">Deadline:</label>
      <input
        id="deadline"
        name="deadline"
        onChange={formik.handleChange}
        value={formik.values["deadline"]}
        type="date"
        className="my-2 rounded-md bg-zinc-800 font-light text-zinc-500"
      />
      <button type="submit" className="btn-outline btn-accent btn my-4">
        Save
      </button>
    </form>
  );
};
