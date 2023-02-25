import { closeConfirmModal, openConfirmModal } from "@/store/modalSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

let resolveCallback: (arg0: boolean) => void;

function useConfirm() {
  const confirmState = useAppSelector((state) => state.modal.confirmModal);
  const dispatch = useAppDispatch();

  const onConfirm = () => {
    unshowModal();
    resolveCallback(true);
  };

  const onCancel = () => {
    unshowModal();
    resolveCallback(false);
  };
  const showModal = () => {
    dispatch(openConfirmModal());
    console.log(confirmState);
    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  function unshowModal() {
    dispatch(closeConfirmModal());
  }

  return { showModal, onConfirm, onCancel, confirmState, unshowModal };
}

export default useConfirm;
