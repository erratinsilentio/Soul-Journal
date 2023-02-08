import { AddGoalButton } from "@/components/goals/AddGoalButton";
import { TabMenu } from "@/components/goals/TabMenu";
import { AddGoalModal } from "@/components/modal/AddGoalModal";

const Goals = () => {
  return (
    <main className="z-0 flex min-h-screen min-w-full items-start justify-center bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-10">
      <TabMenu />
      <AddGoalModal />
      <AddGoalButton />
    </main>
  );
};

export default Goals;
