"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiClock, FiList, FiBarChart2 } from "react-icons/fi";

const useCountdown = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialTime]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return formatTime(time);
};

export function ZenTimerLanding() {
  const countdownTime = useCountdown(43200); // 12 hours in seconds

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold">ZenTimer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sign In
            </a>
          </motion.div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Focus
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Immerse in 12 Hours of Pure Productivity
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Zen
          </motion.button>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiClock,
                title: "12-Hour Focus Mode",
                description: "Distraction-free environment for deep work",
              },
              {
                icon: FiList,
                title: "Task Management",
                description: "Create and track tasks during your session",
              },
              {
                icon: FiBarChart2,
                title: "Progress Tracking",
                description: "Visualize your productivity with daily heatmaps",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              {
                step: 1,
                title: "Start Your Zen Session",
                description: "Click to enter the focus mode",
              },
              {
                step: 2,
                title: "Add Your To-Dos",
                description:
                  "List tasks you want to achieve in the next 12 hours",
              },
              {
                step: 3,
                title: "Track and Review",
                description:
                  "Complete tasks, track progress, and see the daily heatmap",
              },
            ].map(
              (
                step,
                index // Todo : Working on allignment
              ) => (
                <motion.div
                  key={step.step}
                  className="flex flex-col items-center text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Live Countdown Preview
          </h2>
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-5xl font-mono mb-4">{countdownTime}</p>
            <p className="text-gray-400">
              Experience how our countdown keeps you accountable for 12 hours
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex",
                quote:
                  "ZenTimer helped me increase my focus and productivity tremendously!",
              },
              {
                name: "Sam",
                quote:
                  "The 12-hour sessions are perfect for my work style. Highly recommended!",
              },
              {
                name: "Jamie",
                quote:
                  "I love how I can visualize my productivity patterns with the heatmap feature.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-400 mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-bold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Zen Journey?
          </h2>
          <p className="text-xl mb-8">
            Sign up now and try your first 12-hour session for free!
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up Free
          </motion.button>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">ZenTimer</span>
            </div>
            <nav className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ZenTimer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
