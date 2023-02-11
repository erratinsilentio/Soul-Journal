"use client";
import { RootState } from "@/store/store";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useSelector } from "react-redux";

export default function Settings() {
  const user = useSelector((state: RootState) => state.user.user);
  const notepad = useSelector((state: RootState) => state.user.notepad);
  const goals = useSelector((state: RootState) => state.user.goals);

  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-10">
        logged in as: {user.id}
        <p>notepad: {notepad.id}</p>
        <p>goals: {goals.id}</p>
      </main>
    </ProtectedWrapper>
  );
}
