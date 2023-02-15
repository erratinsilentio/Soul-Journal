export const GoalRow = ({ post, classNames }) => {
  return (
    <li key={post.id} className="relative rounded-md p-3 hover:bg-zinc-700">
      <h3 className="text-sm font-medium leading-5">{post.title}</h3>

      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>&middot;</li>
        <li>{post.deadline}</li>
        <li>&middot;</li>
      </ul>

      <a href="#" className={classNames("absolute inset-0 rounded-md")} />
    </li>
  );
};
