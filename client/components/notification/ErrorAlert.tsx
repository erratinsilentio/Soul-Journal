import { motion } from "framer-motion";

export const ErrorAlert = () => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -10 }}
      animate={{ opacity: 1, bottom: 50 }}
      transition={{ delay: 0.3 }}
      className="alert alert-error fixed bottom-10 left-1/2 z-50 w-80 -translate-x-1/2 shadow-lg"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 flex-shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>"Error! Task failed successfully."</span>
      </div>
    </motion.div>
  );
};
