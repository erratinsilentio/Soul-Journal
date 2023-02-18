import { Note } from "@/types";
import { SelectSection } from "../home/SelectInput";
import { TextSection } from "../home/TextInput";

export const InputSection = ({ note }: { note: Note }) => {
  return (
    <>
      <TextSection
        name="meditation"
        value={note.meditation}
        onChange={undefined}
        text="🪬 Meditation:"
        placeholder="meditation..."
        disabled={true}
      />
      <TextSection
        name="dream"
        value={note.dream}
        onChange={undefined}
        disabled={true}
        text="🌙 Dreams:"
        placeholder="dreams..."
      />
      <TextSection
        name="exercise"
        value={note.exercise}
        disabled={true}
        onChange={undefined}
        text="🏆 Exercise:"
        placeholder="today's workout..."
      />
      <TextSection
        name="awake"
        value={note.awake}
        disabled={true}
        onChange={undefined}
        text="🌞 Awake:"
        placeholder="your day..."
      />
      {/* <SelectSection
        name="goals"
        value={formik.values["goals"]}
        text="👁️ Goals:"
        options=""
      /> */}
      <TextSection
        name="gratitude"
        value={note.gratitude}
        disabled={true}
        onChange={undefined}
        text="🌱 I Appreciate..."
        placeholder="the little things..."
      />
      <TextSection
        name="forgiveness"
        value={note.forgiveness}
        disabled={true}
        onChange={undefined}
        text="🎭 I Forgive..."
        placeholder="myself / someone..."
      />
      <TextSection
        name="love"
        value={note.love}
        disabled={true}
        onChange={undefined}
        text="🖤 I Love..."
        placeholder="myself / someone / something for..."
      />
    </>
  );
};
