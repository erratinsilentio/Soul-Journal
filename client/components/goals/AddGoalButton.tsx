"use client";
import { openGoalModal } from "@/store/modalSlice";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";

export const AddGoalButton = () => {
  const dispatch = useDispatch();
  return (
    <CiCirclePlus
      onClick={() => dispatch(openGoalModal())}
      className="fixed bottom-16 right-16 h-12 w-12 cursor-pointer text-zinc-400 duration-200 hover:scale-125 hover:text-emerald-500"
    />
  );
};
