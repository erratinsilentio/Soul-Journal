import { setError, setSuccess } from "@/store/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { Goal } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { addGoal } from "./goalActions";
import { queryClient } from "./QueryClient";

export const useGoalMutation = () => {
  const dispatch = useAppDispatch();

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

  return {
    addGoalMutation,
  };
};
