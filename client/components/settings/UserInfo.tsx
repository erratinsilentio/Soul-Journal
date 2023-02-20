import { User } from "@/types";
import { Avatar } from "./Avatar";

export const UserInfo = ({ user }: { user: User }) => {
  return (
    <section className="flex flex-col items-center sm:flex-row sm:items-start">
      <Avatar image={user?.image} />
      <section className="mx-4 mt-4 flex flex-col items-center justify-evenly sm:mx-7 sm:mt-0 sm:items-start sm:py-4">
        <p className="font-light">{user?.username}</p>
        <p className="mt-2 text-sm font-light">{user?.email}</p>
      </section>
    </section>
  );
};
