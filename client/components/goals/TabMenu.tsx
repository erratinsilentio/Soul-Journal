"use client";

import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { getGoals } from "@/utils/goalActions";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../loading/Loading";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TabMenu = ({ userID }: { userID: string }) => {
  // const [goals, setGoals] = useState(null);

  // useEffect(() => {
  //   getGoals(userID).then((data) => setGoals(data));
  // }, []);

  let [categories] = useState({
    "This Week": [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: "5-10-2024",
      },
      {
        id: 2,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: 5,
      },
    ],
    "This Month": [
      {
        id: 3,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: 5,
      },
      {
        id: 4,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: 5,
      },
    ],
    "This Year": [
      {
        id: 5,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: 5,
      },
      {
        id: 6,
        title: "Does drinking coffee make you smarter?",
        description: "5h ago",
        deadline: 5,
      },
    ],
  });

  const {
    data: goals,
    isLoading,
    error,
  } = useQuery(["goals"], () => getGoals(userID));

  if (isLoading) return <Loading />;
  if (error) return <p>error</p>;

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
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-zinc-700"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>&middot;</li>
                      <li>{post.deadline}</li>
                      <li>&middot;</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames("absolute inset-0 rounded-md")}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
