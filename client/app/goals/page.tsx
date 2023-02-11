"use client";
import { AddGoalButton } from "@/components/goals/AddGoalButton";
import { TabMenu } from "@/components/goals/TabMenu";
import { AddGoalModal } from "@/components/modal/AddGoalModal";
import { RootState } from "@/store/store";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Goals = () => {
  const goalpad = useSelector((state: RootState) => state.user.goals);
  const [goalpadID, setGoalpadID] = useState(null);

  useEffect(() => {
    setGoalpadID((goalpadID) => goalpad.id);
  }, [goalpad]);

  return (
    <ProtectedWrapper>
      <main className="z-0 flex min-h-screen min-w-full items-start justify-center bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-10">
        <TabMenu />
        <AddGoalModal goalpadID={goalpadID} />
        <AddGoalButton />
      </main>
    </ProtectedWrapper>
  );
};

export default Goals;
