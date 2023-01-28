"use client";

import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
}
