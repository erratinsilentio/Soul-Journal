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
      <p className="py-6 text-2xl text-zinc-200">{text}</p>
      <textarea
        className="textarea-bordered textarea min-w-full py-5"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
