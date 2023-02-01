"use client";
import { SelectSection } from "./SelectSection";
import { TextSection } from "./TextSection";

export const DailyNoteForm = () => {
  return (
    <form className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-16 shadow-2xl shadow-black">
      <p className="mb-6 text-3xl text-zinc-200">Daily note</p>
      <TextSection text="🪬 Meditation:" placeholder="meditation..." />
      <TextSection text="🌙 Dreams:" placeholder="dreams..." />
      <TextSection text="🏆 Exercise:" placeholder="today's workout..." />
      <TextSection text="🌞 Awake:" placeholder="your day..." />
      <SelectSection text="👁️ Goals:" options="" />
      <TextSection
        text="🌱 I Appreciate..."
        placeholder="the little things..."
      />
      <TextSection text="🎭 I Forgive..." placeholder="myself / someone..." />
      <TextSection
        text="🖤 I Love..."
        placeholder="myself / someone / something for..."
      />
      <button className="btn-wide btn my-6 bg-zinc-800">Save</button>
    </form>
  );
};
