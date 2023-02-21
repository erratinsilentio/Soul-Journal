import { Note } from "@/types";
import { FormikProps } from "formik";
import { TextSection } from "./TextInput";

export const InputSection = ({ formik }: { formik: FormikProps<Note> }) => {
  return (
    <>
      <TextSection
        name="meditation"
        value={formik.values["meditation"]}
        onChange={formik.handleChange}
        text="🪬 Meditation:"
        placeholder="meditation..."
        disabled={false}
      />
      <TextSection
        name="dream"
        value={formik.values["dream"]}
        onChange={formik.handleChange}
        text="🌙 Dreams:"
        placeholder="dreams..."
        disabled={false}
      />
      <TextSection
        name="exercise"
        value={formik.values["exercise"]}
        onChange={formik.handleChange}
        text="🏆 Exercise:"
        placeholder="today's workout..."
        disabled={false}
      />
      <TextSection
        name="awake"
        value={formik.values["awake"]}
        onChange={formik.handleChange}
        text="🌞 Awake:"
        placeholder="your day..."
        disabled={false}
      />
      <TextSection
        name="gratitude"
        value={formik.values["gratitude"]}
        onChange={formik.handleChange}
        text="🌱 I Appreciate..."
        placeholder="the little things..."
        disabled={false}
      />
      <TextSection
        name="forgiveness"
        value={formik.values["forgiveness"]}
        onChange={formik.handleChange}
        text="🎭 I Forgive..."
        placeholder="myself / someone..."
        disabled={false}
      />
      <TextSection
        name="love"
        value={formik.values["love"]}
        onChange={formik.handleChange}
        text="🖤 I Love..."
        placeholder="myself / someone / something for..."
        disabled={false}
      />
    </>
  );
};
