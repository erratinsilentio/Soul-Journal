"use client";

import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
