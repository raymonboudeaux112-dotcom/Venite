import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-cream dark:bg-dark-bg flex flex-col items-center justify-center transition-colors"
        >
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.2,
              ease: "easeInOut"
            }}
          >
            <img
              src="https://veniteuniversity.edu.ng/wp-content/uploads/2024/04/venite-logo-1-1-1.png"
              alt="Venite University Logo"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 text-text-dark/60 dark:text-cream/60 font-mono text-sm tracking-[0.2em] uppercase"
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
