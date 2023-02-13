import { AddGoalForm } from "../goals/AddGoalForm";
import { Modal } from "./Modal";

export const AddGoalModal = ({ userID }: { userID: string }) => {
  return (
    <Modal>
      <AddGoalForm userID={userID} />
    </Modal>
  );
};
