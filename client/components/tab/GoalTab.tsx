import { Tab } from "@headlessui/react";
import { GoalRow } from "./GoalRow";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const testCategories = {
  "This Week": [
    {
      id: 1,
      title: "goal #1",
      description: "test goal",
      deadline: "2023-02-19",
      archived: false,
    },
    {
      id: 2,
      title: "goal #2",
      description: "test goal",
      deadline: "2023-02-20",
      archived: false,
    },
  ],
  "This Month": [
    {
      id: 3,
      title: "goal #3",
      description: "test goal",
      deadline: "2023-02-28",
      archived: false,
    },
    {
      id: 4,
      title: "goal #4",
      description: "test goal",
      deadline: "2023-03-10",
      archived: false,
    },
  ],
  "This Year": [
    {
      id: 5,
      title: "goal #5",
      description: "test goal",
      deadline: "2023-04-19",
      archived: false,
    },
    {
      id: 6,
      title: "goal #6",
      description: "test goal",
      deadline: "2023-05-19",
      archived: false,
    },
  ],
};
export default function GoalTabs({ categories }) {
  let displayedCategories = categories ? categories : testCategories;
  return (
    <div className="min-w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-zinc-800 p-1 shadow-2xl shadow-black">
          {Object.keys(displayedCategories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-emerald-500",
                  selected
                    ? "bg-zinc-700 shadow"
                    : "text-blue-100 hover:bg-zinc-700 hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(displayedCategories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-zinc-800 bg-opacity-50 p-3 text-zinc-100 shadow-2xl shadow-black"
              )}
            >
              <ul>
                {posts.map((post) => !post.archived && <GoalRow post={post} />)}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
