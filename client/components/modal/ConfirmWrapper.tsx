"use client";
import { useAppSelector } from "@/store/store";

export const ConfirmWrapper = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useAppSelector((state) => state.modal.confirmModal);

  console.log(isOpen);

  return (
    <main
      className={`${
        !isOpen && "scale-0"
      } fixed top-1/2 left-1/2 z-50 min-h-full min-w-full -translate-y-1/2 -translate-x-1/2 rounded-lg bg-zinc-700 bg-opacity-40 shadow-2xl shadow-black backdrop-blur-md duration-300 sm:h-4/6 sm:w-4/6`}
    >
      <section className="flex min-h-full min-w-full items-center justify-center">
        {children}
      </section>
    </main>
  );
};
