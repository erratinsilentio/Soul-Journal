"use client";
import { Note, Notepad } from "@/types";
import { noteActionFormik } from "@/utils/useFormik";
import { SelectSection } from "./SelectSection";
import { TextSection } from "./TextSection";

export const DailyNoteForm = ({
  dailyNote,
  notepad,
  isDark,
}: {
  dailyNote: Note;
  notepad: string;
  isDark: boolean;
}) => {
  const formik = noteActionFormik(dailyNote || {}, notepad);

  return (
    <div className={isDark ? "light" : "dark"}>
      <form
        onSubmit={formik.handleSubmit}
        className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-8 shadow-2xl shadow-black
    dark:from-emerald-400 dark:via-emerald-400 dark:to-emerald-500 sm:p-16
    "
      >
        <p className="mb-6 text-3xl font-medium text-zinc-200 dark:text-zinc-800">
          Daily note
        </p>
        <TextSection
          name="meditation"
          value={formik.values["meditation"]}
          onChange={formik.handleChange}
          text="🪬 Meditation:"
          placeholder="meditation..."
        />
        <TextSection
          name="dream"
          value={formik.values["dream"]}
          onChange={formik.handleChange}
          text="🌙 Dreams:"
          placeholder="dreams..."
        />
        <TextSection
          name="exercise"
          value={formik.values["exercise"]}
          onChange={formik.handleChange}
          text="🏆 Exercise:"
          placeholder="today's workout..."
        />
        <TextSection
          name="awake"
          value={formik.values["awake"]}
          onChange={formik.handleChange}
          text="🌞 Awake:"
          placeholder="your day..."
        />
        <SelectSection
          name="goals"
          value={formik.values["goals"]}
          onChange={formik.handleChange}
          text="👁️ Goals:"
          options=""
        />
        <TextSection
          name="gratitude"
          value={formik.values["gratitude"]}
          onChange={formik.handleChange}
          text="🌱 I Appreciate..."
          placeholder="the little things..."
        />
        <TextSection
          name="forgiveness"
          value={formik.values["forgiveness"]}
          onChange={formik.handleChange}
          text="🎭 I Forgive..."
          placeholder="myself / someone..."
        />
        <TextSection
          name="love"
          value={formik.values["love"]}
          onChange={formik.handleChange}
          text="🖤 I Love..."
          placeholder="myself / someone / something for..."
        />
        <button
          type="submit"
          className="btn my-6 w-full bg-zinc-800 dark:border-0 dark:bg-rose-100 dark:text-rose-300 dark:hover:bg-rose-50 sm:btn-wide"
        >
          Save
        </button>
      </form>
    </div>
  );
};
