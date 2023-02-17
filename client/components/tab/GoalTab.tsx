import { Tab } from "@headlessui/react";
import Link from "next/link";
import { GoalRow } from "./GoalRow";
import { NoteRow } from "./NoteRow";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GoalTabs({ categories }) {
  return (
    <div className="min-w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-zinc-800 p-1 shadow-2xl shadow-black">
          {Object.keys(categories).map((category) => (
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
          {Object.values(categories).map((posts, idx) => (
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
