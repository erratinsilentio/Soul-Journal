"use client";

import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/QueryClient";
import ErrorBoundary from "@/utils/ErrorBoundary";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}
