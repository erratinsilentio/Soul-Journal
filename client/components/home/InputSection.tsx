import { SelectSection } from "./SelectInput";
import { TextSection } from "./TextInput";

export const InputSection = ({ formik }) => {
  return (
    <>
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
    </>
  );
};
