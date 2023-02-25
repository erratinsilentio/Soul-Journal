import { useAppSelector } from "@/store/store";
import { addGoalFormik } from "@/utils/formik/useFormik";
import { useGoalMutation } from "@/utils/hooks/useGoalMutation";
import { GoalForm } from "./GoalForm";

export const AddGoalForm = () => {
  const { addGoalMutation } = useGoalMutation();
  const user = useAppSelector((state) => state.user.user);

  const formik = addGoalFormik(user?.id as string, addGoalMutation);

  return <GoalForm formik={formik} type="add" />;
};
