import { AddGoalForm } from "../goals/AddGoalForm";
import { Modal } from "./Modal";

export const AddGoalModal = () => {
  return (
    <Modal type="Goal">
      <AddGoalForm />
    </Modal>
  );
};
