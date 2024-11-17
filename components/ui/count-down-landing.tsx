"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <motion.div
      initial={{ scale: 0.96 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="w-24 h-24 flex items-center justify-center backdrop-blur-sm bg-white/30 rounded-xl border border-white/50 shadow-lg"
    >
      <span className="text-4xl font-bold text-gray-800">
        {String(value).padStart(2, '0')}
      </span>
    </motion.div>
    <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>
  </div>
);

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );
      const diff = endOfDay.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative p-8 rounded-2xl">
      {/* Gradient background */}
      <div className="absolute bg-transparent rounded-2xl" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          animate={{
            x: [20, -20],
            y: [0, -30],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-4 -left-4 w-32 h-32 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            x: [-20, 20],
            y: [0, 30],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Time Until End of Day
        </h2>
        <div className="flex items-center justify-center gap-8">
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
