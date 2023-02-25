import { ArchiveData, Goal, Note } from "@/types";
import { Tab } from "@headlessui/react";
import { GoalRow } from "./GoalRow";
import { NoteRow } from "./NoteRow";
import { motion } from "framer-motion";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function isNote(arg: any): arg is Note {
  return arg.date !== undefined;
}

export default function ArchiveTabs({
  categories,
}: {
  categories: ArchiveData;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="min-w-full max-w-md px-2 sm:px-0"
    >
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
                {posts.map((post: Goal | Note) => {
                  if (isNote(post)) {
                    return <NoteRow post={post} key={post.id} />;
                  } else {
                    return <GoalRow post={post} page="Archive" key={post.id} />;
                  }
                })}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </motion.div>
  );
}
