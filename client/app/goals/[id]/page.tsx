"use client";
import { UpdateGoalForm } from "@/components/goals/UpdateGoalForm";

export default function SingleGoalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return (
    <main className="z-0 min-h-screen min-w-full p-2 sm:p-10">
      <UpdateGoalForm id={id} />
    </main>
  );
}
