"use client";
import { GoogleButton } from "./GoogleButton";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";
import { motion } from "framer-motion";

export const LoginPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 0.5 }}
      className="min-w-screen flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 p-8 sm:items-start sm:p-16 md:p-32"
    >
      <LoginHeader />
      <LoginForm />
      <GoogleButton />
    </motion.main>
  );
};
