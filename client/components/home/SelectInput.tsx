"use client";

export const SelectSection = ({
  text,
  options,
  name,
  value,
  onChange,
}: {
  text: string;
  options: any;
  name: string;
  value: any;
  onChange: any;
}) => {
  return (
    <>
      <p className="py-6 text-2xl font-extralight text-zinc-200">{text}</p>
      <section className="flex flex-col text-zinc-200">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="select-bordered select w-full max-w-xs py-5 italic text-zinc-200"
        >
          <option disabled selected className="text-zinc-200">
            What were you working on today?
          </option>
          {/* {options.map((goal) => {
            <option className="">{goal.title}</option>;
          })} */}
          <option className="text-zinc-200">Programming...</option>
          <option className="text-zinc-200"> Running...</option>
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
