import { setError, setSuccess } from "@/store/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { Note } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { addNote, updateNote } from "../api/noteActions";
import { queryClient } from "../QueryClient";

export const useNoteMutation = () => {
  const dispatch = useAppDispatch();

  const addNoteMutation = useMutation(
    async (values: Note) => {
      return addNote(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notes"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  const updateNoteMutation = useMutation(
    async ([values, dailyNote]: [Note, Note]) => {
      return updateNote(values, dailyNote);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notes"]);
        dispatch(setSuccess());
      },
      onError: () => {
        dispatch(setError());
      },
    }
  );

  return {
    addNoteMutation,
    updateNoteMutation,
  };
};
