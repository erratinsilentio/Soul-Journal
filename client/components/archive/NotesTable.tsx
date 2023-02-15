import HeadlessTabs from "../tab/Tab";

const categories = {
  Notes: [
    { date: "2023-02-14", id: "1" },
    { date: "2023-02-13", id: "2" },
    { date: "2023-02-12", id: "3" },
  ],
  Goals: [
    { title: "goal#1", id: "4" },
    { title: "goal#2", id: "5" },
    { title: "goal#3", id: "6" },
  ],
};

export const ArchiveTabs = () => {
  return <HeadlessTabs categories={categories} />;
};
