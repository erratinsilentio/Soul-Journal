"use client";

export const SelectSection = ({
  text,
  options,
}: {
  text: string;
  options: string;
}) => {
  return (
    <>
      <p className="py-6 text-2xl text-zinc-200 dark:text-zinc-700 ">{text}</p>
      <section className="flex flex-col">
        <select className="select-bordered select w-full max-w-xs py-5 dark:bg-rose-50 dark:text-zinc-700">
          <option disabled selected>
            What were you working on today?
          </option>
          <option>Programming...</option>
          <option>Running...</option>
        </select>
        <input
          type="number"
          placeholder="Hours of work..."
          className="input-bordered input my-4 w-full max-w-xs dark:bg-rose-50 dark:text-zinc-700"
        />
      </section>
    </>
  );
};
