import Link from "next/link";

export const NoteRow = ({ post }) => {
  return (
    <Link href={`/archive/note/${post.id}`}>
      <li key={post.id} className="relative rounded-md p-3 hover:bg-zinc-700">
        <h3 className="px-2 text-sm font-medium leading-5">{post.date}</h3>

        <ul className="mt-1 flex space-x-1 px-2 text-xs font-normal leading-4 text-gray-500">
          <li>&middot;</li>
          <li>Daily Note</li>
          <li>&middot;</li>
        </ul>
      </li>
    </Link>
  );
};
