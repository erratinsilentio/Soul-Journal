import { closeGoalModal } from "@/store/modalSlice";
import { setError, setSuccess } from "@/store/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { Goal } from "@/types";
import { useMutation } from "@tanstack/react-query";
import {
  addGoal,
  archiveGoal,
  deleteGoal,
  makeGoalDone,
  updateGoal,
} from "./goalActions";
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
        queryClient.invalidateQueries(["daily"]);
        dispatch(setSuccess());
        dispatch(closeGoalModal());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const updateGoalMutation = useMutation(
    async ([oldGoal, values]: [Goal, Goal]) => {
      return updateGoal(oldGoal, values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["goals"]);
        queryClient.invalidateQueries(["daily"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const makeGoalDoneMutation = useMutation(
    async (goal: Goal) => {
      return makeGoalDone(goal);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["goals"]);
        queryClient.invalidateQueries(["daily"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const deleteGoalMutation = useMutation(
    async (goalID: string) => {
      return deleteGoal(goalID);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["goals"]);
        queryClient.invalidateQueries(["daily"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const archiveGoalMutation = useMutation(
    async (goal: Goal) => {
      return archiveGoal(goal);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["goals"]);
        queryClient.invalidateQueries(["daily"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  return {
    addGoalMutation,
    updateGoalMutation,
    makeGoalDoneMutation,
    deleteGoalMutation,
    archiveGoalMutation,
  };
};
