"use client";
import { Modal } from "./Modal";

export const AddGoalModal = () => {
  return (
    <Modal>
      <p className="my-3 text-3xl font-medium text-zinc-200">New Goal</p>
      <input
        type="text"
        placeholder="Goal title..."
        className="input-bordered input-accent input my-2 w-full max-w-xs bg-zinc-800 font-light"
      />
      <textarea
        className="textarea-accent textarea my-2 bg-zinc-800 font-light"
        placeholder="Description"
      ></textarea>
      <label className="mt-2 font-normal italic text-zinc-300">Deadline:</label>
      <input
        type="date"
        className="my-2 rounded-md border-accent bg-zinc-800 font-light text-zinc-500"
      />
      <button className="btn-outline btn-accent btn my-4">Save</button>
    </Modal>
  );
};
