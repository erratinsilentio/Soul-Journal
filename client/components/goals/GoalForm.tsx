"use client";

import { useRouter } from "next/navigation";

export type GoalFormType = "add" | "update";

export const GoalForm = ({ formik, type }) => {
  const router = useRouter();
  return (
    <form className="flex flex-col py-4 px-8" onSubmit={formik.handleSubmit}>
      <p className="my-3 text-3xl font-medium text-zinc-200">
        {type === "add" ? "New Goal" : "Edit Goal"}
      </p>
      <input
        id="title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values["title"]}
        type="text"
        placeholder="Goal title..."
        className="input-bordered input my-2 w-full max-w-xs bg-zinc-800 font-light"
        minLength={3}
        maxLength={25}
      />
      <textarea
        className="input-bordered textarea my-2 bg-zinc-800 font-light"
        placeholder="Description"
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values["description"]}
      ></textarea>
      <label className="mt-2 font-normal italic text-zinc-300">Deadline:</label>
      <input
        id="deadline"
        name="deadline"
        onChange={formik.handleChange}
        value={formik.values["deadline"]}
        type="date"
        className="my-2 rounded-md bg-zinc-800 font-light text-zinc-500"
      />
      <button type="submit" className="btn-outline btn-accent btn mt-8">
        {type === "add" ? "Save" : "Save Changes"}
      </button>
      {type === "update" && (
        <button
          type="button"
          className="btn-outline btn my-4"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      )}
    </form>
  );
};
