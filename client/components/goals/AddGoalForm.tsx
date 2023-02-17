import { useAppSelector } from "@/store/store";
import { addGoalFormik } from "@/utils/useFormik";
import { useGoalMutation } from "@/utils/useGoalMutation";
import { GoalForm } from "./GoalForm";

export const AddGoalForm = () => {
  const { addGoalMutation } = useGoalMutation();
  const user = useAppSelector((state) => state.user.user);

  const formik = addGoalFormik(user?.id, addGoalMutation);

  return <GoalForm formik={formik} type="add" />;
};
