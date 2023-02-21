import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

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
