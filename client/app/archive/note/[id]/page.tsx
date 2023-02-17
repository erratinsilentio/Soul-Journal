export default function SingleNotePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <main className="z-0 min-h-screen min-w-full p-2 sm:p-10">{id}</main>;
}
