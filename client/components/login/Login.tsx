import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-start justify-start bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-32">
      <span className="mb-10 text-3xl font-semibold text-zinc-200">
        🌙 Welcome to Soul Journal
      </span>
      <span className="mb-10 text-2xl font-thin text-zinc-400">
        Type your email to receive one time login link
      </span>
      <LoginForm />
    </main>
  );
};
