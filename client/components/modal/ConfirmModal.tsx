"use client";
import useConfirm from "@/utils/useConfirm";
import { ConfirmWrapper } from "./ConfirmWrapper";

export const ConfirmModal = () => {
  const { onConfirm, onCancel } = useConfirm();

  return (
    <ConfirmWrapper>
      <main className="flex flex-col items-center justify-center p-11">
        <p>Are you sure?</p>
        <section className="flex flex-row justify-evenly">
          <button className="btn-outline btn-error btn m-5" onClick={onConfirm}>
            No
          </button>
          <button
            className="btn-outline btn-success btn m-5"
            onClick={onCancel}
          >
            Yes
          </button>
        </section>
      </main>
    </ConfirmWrapper>
  );
};
