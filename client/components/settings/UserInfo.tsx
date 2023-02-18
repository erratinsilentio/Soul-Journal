import { User } from "@/types";
import { Avatar } from "./Avatar";

export const UserInfo = ({ user }: { user: User }) => {
  return (
    <section className="flex flex-row">
      <Avatar image={user?.image} />
      <section className="mx-4 flex flex-col justify-evenly sm:mx-7">
        <p className="font-light">{user?.username}</p>
        <p className="font-light">{user?.email}</p>
      </section>
    </section>
  );
};
