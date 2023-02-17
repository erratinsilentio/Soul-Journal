import Link from "next/link";

export const NoteRow = ({ post }) => {
  return (
    <li key={post.id} className="relative rounded-md p-3 hover:bg-zinc-700">
      <h3 className="text-sm font-medium leading-5">{post.title}</h3>

      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>&middot;</li>
        <li>{post.date} note</li>
        <li>&middot;</li>
      </ul>
    </li>
  );
};
