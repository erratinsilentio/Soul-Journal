"use client";
import React from "react";

export const TextSection = ({
  text,
  placeholder,
  name,
  value,
  onChange,
}: {
  text: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: any;
}) => {
  return (
    <>
      <p className="py-6 text-2xl font-extralight text-zinc-200 dark:text-zinc-700">
        {text}
      </p>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textarea-bordered textarea min-w-full px-7 py-5 font-thin italic text-zinc-200 dark:bg-rose-50 dark:text-zinc-700"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
