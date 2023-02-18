"use client";
import { closeConfirmModal, closeGoalModal } from "@/store/modalSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ModalType } from "@/types";
import { useState } from "react";

export const Modal = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: ModalType;
}) => {
  const isOpen = useAppSelector((state) =>
    type == "Goal" ? state.modal.goalModal : state.modal.confirmModal
  );
  const dispatch = useAppDispatch();

  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <main
      className={`
      ${!isOpen && "scale-0"} 
      ${
        fullscreen
          ? "top-0 left-0 h-screen w-screen"
          : "h-5/6 w-5/6 sm:h-4/6 sm:w-4/6"
      }
      ${minimized && "-bottom-28 scale-[0.25]"}
      fixed z-50 rounded-lg bg-zinc-700 bg-opacity-40 shadow-2xl shadow-black backdrop-blur-md duration-300`}
    >
      <div className="flex h-5 min-w-full items-center justify-start rounded-t-lg bg-zinc-500 px-4">
        <button
          className="h-3 w-3 rounded-full bg-rose-500 leading-4 text-rose-500 duration-200 hover:bg-rose-400 hover:text-zinc-700"
          onClick={() =>
            type === "Goal"
              ? dispatch(closeGoalModal())
              : dispatch(closeConfirmModal())
          }
        />
        <button
          className="mx-2 h-3 w-3 rounded-full bg-yellow-500 leading-4 text-yellow-500 duration-200 hover:bg-yellow-400 hover:text-zinc-700"
          onClick={() => setMinimized(!minimized)}
        />
        <button
          className="h-3 w-3 rounded-full bg-green-500 leading-4 text-green-500 duration-200 hover:bg-green-400 hover:text-zinc-700"
          onClick={() => setFullscreen(!fullscreen)}
        />
      </div>
      <section onClick={() => setMinimized(false)}>{children}</section>
    </main>
  );
};
