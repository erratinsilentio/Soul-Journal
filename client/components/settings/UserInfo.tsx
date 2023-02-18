import { Avatar } from "./Avatar";

export const UserInfo = () => {
  return (
    <section className="flex flex-row">
      <Avatar image={null} />
      <section className="mx-4 flex flex-col justify-evenly sm:mx-7">
        <p>Username</p>
        <p>email@email.com</p>
      </section>
    </section>
  );
};
