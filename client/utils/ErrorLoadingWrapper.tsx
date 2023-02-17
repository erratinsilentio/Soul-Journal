import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";
import { User } from "@/types";
import { JsxElement } from "typescript";

export const ErrorLoadingWrapper = ({
  children,
  loading,
  error,
}: {
  children: React.ReactNode;
  loading: boolean;
  error: unknown;
}) => {
  if (loading) return <Loading />;
  if (error) return <Error />;

  return <>{children}</>;
};
