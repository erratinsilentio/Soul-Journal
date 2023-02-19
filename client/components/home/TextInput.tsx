"use client";
import React from "react";

export const TextSection = ({
  text,
  placeholder,
  name,
  value,
  onChange,
  disabled,
}: {
  text: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: () => void | undefined;
  disabled: boolean;
}) => {
  return (
    <>
      <p className="py-6 text-2xl font-extralight text-zinc-200">{text}</p>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textarea-bordered textarea min-w-full px-7 py-5 font-thin italic text-zinc-200"
        placeholder={placeholder}
        disabled={disabled || false}
      ></textarea>
    </>
  );
};
