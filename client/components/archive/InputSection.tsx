import { Note } from "@/types";
import { TextSection } from "../home/TextInput";

export const InputSection = ({ note }: { note: Note }) => {
  return (
    <>
      <TextSection
        name="meditation"
        value={note.meditation}
        text="🪬 Meditation:"
        placeholder="meditation..."
        disabled={true}
      />
      <TextSection
        name="dream"
        value={note.dream}
        disabled={true}
        text="🌙 Dreams:"
        placeholder="dreams..."
      />
      <TextSection
        name="exercise"
        value={note.exercise}
        disabled={true}
        text="🏆 Exercise:"
        placeholder="today's workout..."
      />
      <TextSection
        name="awake"
        value={note.awake}
        disabled={true}
        text="🌞 Awake:"
        placeholder="your day..."
      />
      <TextSection
        name="gratitude"
        value={note.gratitude}
        disabled={true}
        text="🌱 I Appreciate..."
        placeholder="the little things..."
      />
      <TextSection
        name="forgiveness"
        value={note.forgiveness}
        disabled={true}
        text="🎭 I Forgive..."
        placeholder="myself / someone..."
      />
      <TextSection
        name="love"
        value={note.love}
        disabled={true}
        text="🖤 I Love..."
        placeholder="myself / someone / something for..."
      />
    </>
  );
};
