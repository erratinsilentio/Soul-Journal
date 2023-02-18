"use client";

export const SelectSection = ({
  text,
  options,
  name,
  value,
  onChange,
}: {
  text: string;
  options: string;
  name: string;
  value: any;
  onChange: any;
}) => {
  return (
    <>
      <p className="py-6 text-2xl font-extralight text-zinc-200">{text}</p>
      <section className="flex flex-col">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="select-bordered select w-full max-w-xs py-5 italic"
        >
          <option disabled selected>
            What were you working on today?
          </option>
          <option>Programming...</option>
          <option>Running...</option>
        </select>
        <input
          type="number"
          placeholder="Hours of work..."
          className="input-bordered input my-4 w-full max-w-xs font-thin italic"
        />
      </section>
    </>
  );
};
