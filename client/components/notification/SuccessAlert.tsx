import { motion } from "framer-motion";

export const SuccessAlert = () => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -10 }}
      animate={{ opacity: 1, bottom: 50 }}
      transition={{ delay: 0.3 }}
      className="alert alert-success fixed bottom-10 left-1/2 z-50 w-80 -translate-x-1/2 shadow-lg"
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Success</span>
      </div>
    </motion.div>
  );
};
