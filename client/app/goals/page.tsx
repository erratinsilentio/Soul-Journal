"use client";
import { AddGoalButton } from "@/components/goals/AddGoalButton";
import { TabMenu } from "@/components/goals/TabMenu";
import { AddGoalModal } from "@/components/modal/AddGoalModal";
import { useAppSelector } from "@/store/store";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

const Goals = () => {
  const user = useAppSelector((state) => state.user.user);
  console.log("user from redux", user?.id);

  ///sam routing

  return (
    <ProtectedWrapper>
      <main className="z-0 flex min-h-screen min-w-full items-start justify-center bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-10">
        <TabMenu userID={user?.id} />
        <AddGoalModal userID={user?.id} />
        <AddGoalButton />
      </main>
    </ProtectedWrapper>
  );
};

export default Goals;
