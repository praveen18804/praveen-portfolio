import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] text-white select-none"
        >
          {/* Subtle Red Ambient Glow behind logo */}
          <div className="absolute w-96 h-96 bg-[#FF2020]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          {/* PRAVEEN Animated Name */}
          <div className="relative overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white"
            >
              PRA<span className="text-[#FF2020] text-glow-red">VEE</span>N
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-zinc-400 font-medium mb-10"
          >
            Graphic Designer <span className="text-[#FF2020] mx-2">&bull;</span> Video Editor
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>LOADING PORTFOLIO</span>
              <span className="text-[#FF2020] font-bold">{progress}%</span>
            </div>

            <div className="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/80">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF2020] via-red-500 to-[#FF2020] shadow-[0_0_12px_#FF2020]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
