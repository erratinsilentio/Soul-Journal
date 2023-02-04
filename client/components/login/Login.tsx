import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";

export const LoginPage = () => {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-start justify-start bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-32">
      <LoginHeader />
      <LoginForm />
    </main>
  );
};
