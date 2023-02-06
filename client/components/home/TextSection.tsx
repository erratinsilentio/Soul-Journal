"use client";
import React from "react";

export const TextSection = ({
  text,
  placeholder,
}: {
  text: string;
  placeholder: string;
}) => {
  return (
    <>
      <p className="py-6 text-2xl text-zinc-200 dark:text-zinc-700">{text}</p>
      <textarea
        className="textarea-bordered textarea min-w-full py-5 text-zinc-200 dark:bg-rose-50 dark:text-zinc-700"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
