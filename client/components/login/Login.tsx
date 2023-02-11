import { GoogleButton } from "./GoogleButton";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";

export const LoginPage = () => {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-8 sm:items-start sm:p-16 md:p-32">
      <LoginHeader />
      <LoginForm />
      <GoogleButton />
    </main>
  );
};
