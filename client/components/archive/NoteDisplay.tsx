import { Note } from "@/types";
import { useRouter } from "next/navigation";
import { InputSection } from "./InputSection";

export const NoteDisplay = ({ note }: { note: Note }) => {
  const router = useRouter();

  return (
    <section className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-8 shadow-2xl shadow-black sm:p-11">
      <p className="mb-6 text-3xl font-medium text-zinc-200">{note.date}</p>
      <InputSection note={note} />
      <button
        type="button"
        onClick={() => router.back()}
        className="btn my-6 w-full bg-zinc-800 sm:btn-wide"
      >
        Go Back
      </button>
    </section>
  );
};
